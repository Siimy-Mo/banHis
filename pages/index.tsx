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



const Home: NextPage = () => {
  // 声明变量，默认[]，setXXX是改变量的自定义函数set(count+1)
  const newTodo = useInputValue('');

  const router = useRouter();
  const [addLoading, setAddLoading] = useState(false);
  const [count, setcount] = useState(0)
  const [msg, setMessage] = useState('')
  const [todoList, setTodoList] = useState([
    { id:0,completed: false, text: '恰饭' },
    { id:1,completed: false, text: '睡觉' },
    { id:2,completed: false, text: '摸鱼' },
  ]);


  const handleAddTodo = () => {
    // 非空判定
    if (msg.trim() === '') return

    console.log('非空判定！')

    let lastid = (todoList.length==0)? 0: todoList[todoList.length-1].id+1
  
    const todoToServer = {
      id:lastid,
      completed: false,
      text: msg,
    };
    setTodoList([...todoList, todoToServer])

    // localStorage.setItem(lastid, todoToServer)
    // console.log(localStorage)
    setMessage('')
  };

  const handleRemoveTodo = (index) => {
    console.log('index: ',index)
    const newList = todoList.filter((item) => item.id !== index);

    setTodoList(newList);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }


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
                // className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                className="flex-col"
              >
                {
                  todoList.map((todo, index) => {

                    return (
                      <li key={todo.id} className="todolist_li relative" >
                        <button type='button'className='todoItem_focus '>{todo.text}</button>
                        <button type="button" onClick={() => handleRemoveTodo(todo.id)}>Delete</button>

                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        <div className="w-1/6"></div>

        </div>


    </div>
  );
};

export default withLayout(Home, SimpleLayout);
// export default Home