import type { NextPage } from 'next';
import Head from 'next/head';
import SimpleLayout from '../components/layout/SimpleLayout';
import withLayout from '../components/hocs/withLayout';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';
// import { listeners } from 'process';
import { useRouter } from 'next/router';

// import { fs } from 'memfs';

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
      id: lastid + 1,
      completed: false,
      text: msg,
    };

    setTodoList([...todoList, todoToServer])
    console.log('list add!')
    setMessage('')
    // setTodoAction(true)
  };

  const handleRemoveTodo = (index:any) => {
    const newList = todoList.filter((item) => item.id !== index);

    setTodoList(newList);
    console.log('list remove!')
    // setTodoAction(true)
  };


  const handleCompleteTodo = (targetIdx:any) => {
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

      <div className="text-indigo-900 h-full md:absolute w-full
                      flex items-center md:pl-64">
        <div className="shadow-2xl bg-red-400 rounded-lg w-screen md:w-2/3
                px-8 md:px-20 py-10">

          <h1 className='pt-5 pl-5 mb-5 font-["Cambria"] font-black text-3xl dark:text-white '>TodoList</h1>

          <div className="" >
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-indigo-900 dark:text-indigo-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search"
                  className="w-full p-3 pl-10  text-sm bg-transparent placeholder-blue-50 text-gray-900 rounded-lg 
                border border-blue-50 focus:ring-blue-500 focus:border-indigo-900 focus:outline-none
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required
                  onChange={onChange} />
              </div>

              <button type="submit"
                className="font-medium text-sm px-4 py-3 ml-2 transition border-indigo-900 border border-solid rounded-2xl
              hover:bg-indigo-900 focus:ring-2 focus:outline-none focus:ring-indigo-500 hover:text-blue-50
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleAddTodo}>
                Sumbit
              </button>
            </form>

          </div>



          <div className=" relative mt-6 sm:rounded-lg">
            <table className="w-full text-sm text-left  dark:text-gray-400">

              <thead className="text-xl uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    <p className='font-["Cambria"] font-black dark:text-white '>Content</p>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                  todoList.map((todo, index) => {
                    return (
                      <tr key={todo.id} className="todoItem_focus dark:border-gray-700 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                          <button type='button'
                            className={classNames(todo.completed === true ? 'line-through' : '')}
                            onClick={() => handleCompleteTodo(todo.id)}>{todo.text}</button>
                        </th>
                        <td className="py-4 px-6 text-right">
                          <button type="button" onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>

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