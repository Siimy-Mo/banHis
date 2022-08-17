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
  const [count, setcount] = useState(0)
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

    var lastid = 0
    todoList.map((todo, index) => {
        lastid = (todo.id > lastid) ? todo.id: lastid
      return lastid
    });

    const todoToServer = {
      id: lastid,
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
    setTodoList([...falseTodo,...trueTodo]);

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
      console.log('更新local')
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
      <div className="flex h-screen w-screen bg-rose-50 text-indigo-900">
        {/* 界面 */}
        <div className="w-1/10"></div>
        <div className="
                min-h-50vh overflow-hidden shadow-2xl 
                m-auto px-20 py-10 rounded-lg bg-red-400">

          <h1 className='pt-5 pl-5 mb-5 font-["Cambria"] font-black text-3xl '>TodoList</h1>

          <div className="flex gap-4 " >
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
              <button type="button" className="btn" onClick={() => { setcount(count + 1); }} >Count</button>

            </form>
            <div>Count: {count}</div>
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
                        className={classNames('todoItem_focus',todo.completed===true ? 'line-through':'')}
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
        <div className="w-1/6"></div>

      </div>


    </div>
  );
};

export default withLayout(Home, SimpleLayout);
// export default Home