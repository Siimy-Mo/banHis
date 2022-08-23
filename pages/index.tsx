import type { NextPage } from 'next';
import Head from 'next/head';
import SimpleLayout from '../components/layout/SimpleLayout';
import withLayout from '../components/hocs/withLayout';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';
import { listeners } from 'process';
import { useRouter } from 'next/router';

import { useInputValue } from '../hooks/useFetchData';
import { fs } from 'memfs';

const STORAGE_KEY = 'todo-P7oZi9sLs'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Home: NextPage = () => {
  // 声明变量，默认[]，setXXX是改变量的自定义函数set(count+1)
  const router = useRouter();
  const [msg, setMessage] = useState('')
  const [ifLocal, setifLocal] = useState(false)
  const [todoList, setTodoList] = useState([{
    id: 0,
    completed: false,
    text: msg,
  }]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleAddTodo = () => {
    // 非空判定
    if (msg.trim() === '') return

    var lastid = -1
    todoList.map((todo, index) => {
      lastid = (todo.id >= lastid) ? todo.id : lastid
    });

    const todoToServer = {
      id: lastid+1,
      completed: false,
      text: msg,
    };

    setTodoList([...todoList, todoToServer])
    console.log('list add!')
    setMessage('')
    // setTodoAction(true)
  };

  const handleRemoveTodo = (index) => {
    const newList = todoList.filter((item) => item.id !== index);

    setTodoList(newList);
    console.log('list remove!')
    // setTodoAction(true)
  };


  const handleCompleteTodo = (targetIdx) => {
    const tmpTodos = todoList.map((todo, index) => {
      const tmpTodo = todo;
      if (tmpTodo.id == targetIdx) {
        tmpTodo.completed = !todoList[index].completed
      }
      return tmpTodo
    });
    setTodoList(tmpTodos);

    // resetIndex
    const falseTodo = tmpTodos.filter((item) => item.completed !== true);
    const trueTodo = tmpTodos.filter((item) => item.completed === true);
    setTodoList([...falseTodo, ...trueTodo]);

  };


  const renderCompleteTodos = () => {
    const completedTodos = todoList.filter((item) => item.completed == true);
    return (completedTodos.length)
  };
  //副作用？纯函数/引用外部函数，和外部交互，同样的input->output
  // 1.修改dom 2.修改全局变量 3.ajax请求，4计时器 5存储
  // 真实dom构建之后运用，didmount,异步hook
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    const todoToServer = {
      id: 'lastid',
      completed: false,
      text: msg,
    };

    if (data) {
      setTodoList(JSON.parse(data))
    }
    setifLocal(true)

    //读取权限
    axios.defaults.headers.common['authorization'] =
      localStorage.getItem('authorization') || '';

  }, []);

  useEffect(() => {
    if (ifLocal) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
    }
  });



  return (
    <div>
      <Head>
        <title>BanHist</title>
        <meta name="description" content="Bangumi History Recording page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 右侧底纹 */}
      <div className="shrink-0 w-screen overflow-hidden text-indigo-900 bg-lime-500
                      flex items-center md:pl-64 md:py-20">
        <div className="shadow-2xl bg-red-400 rounded-lg max-w-screen-lg min-w-md
                px-8 md:px-20 py-10">

          <h1 className='pt-5 pl-5 mb-5 font-["Cambria"] font-black text-3xl dark:text-white '>TodoList</h1>

          <div className="flex flex-col gap-4 " >
            {/* <form>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">S^^earch</label>

              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-indigo-900 dark:text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search"
                  className="w-full p-4 pl-10  text-sm bg-transparent placeholder-blue-50 text-gray-900 rounded-lg 
                  border border-blue-50 focus:ring-blue-500 focus:border-indigo-900 focus:outline-none
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required
                  onChange={onChange} />


                <button type="submit" 
                className="absolute right-2.5 bottom-2 transition border-indigo-900 border border-solid rounded-3xl
                hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-blue-50
                font-medium text-sm px-4 py-2 
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleAddTodo}>Submit</button>


              </div>
            </form> */}

            <form>
              <label>
                <input
                  placeholder="Type here to add new task item.."
                  className="inputText"
                  value={msg || ""}
                  autoFocus
                  type='text' onChange={onChange} />
              </label>
              <button type="button" className="btn" onClick={handleAddTodo}>Sumbit</button>
            </form>
            
          </div>


          <div className="mt-4 border-red-800">
            <ul
              role="list"
              className="flex-col"
            >
              {
                todoList.map((todo, index) => {

                  return (
                    <li key={todo.id} className="todolist_li relative" >
                      <button type='button'
                        className={classNames('todoItem_focus', todo.completed === true ? 'line-through' : '')}
                        onClick={() => handleCompleteTodo(todo.id)}>{todo.text}</button>
                      <button type="button" onClick={() => handleRemoveTodo(todo.id)}>Delete</button>

                    </li>
                  )
                })
              }
            </ul>

          </div>

          <div className='mt-4'>
            <p className='inline' >Total items:&nbsp;{renderCompleteTodos()}</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p className='inline'>Total items:&nbsp;{todoList.length}</p>
          </div>
        </div>

      </div>


    </div>
  );
};

export default withLayout(Home, SimpleLayout);
// export default Home