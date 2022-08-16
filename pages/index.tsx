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

//每个item的类型,用于全局

//组件的状态类型，
// const todoList: todoItem[] = [
//   { completed: false, text: '吃饭' },
//   { completed: false, text: 'Code' },
//   { completed: false, text: '3' },
//   { completed: false, text: '4' }
// ];

const Home: NextPage = () => {
  // 声明变量，默认[]，setXXX是改变量的自定义函数set(count+1)
  const newTodo = useInputValue('');

  const router = useRouter();
  const [addLoading, setAddLoading] = useState(false);
  const [count, setcount] = useState(0)
  const [msg, setMessage] = useState('')
  const [todoList, setTodoList] = useState([
    { id:0,completed: false, text: '11' },
    { id:1,completed: false, text: '2' },
    { id:2,completed: false, text: '3' },
    { id:3,completed: false, text: '4' }
  ]);

  // const submitBtn = useCallback(() => {
  //   setTodoList([...todoList, {text:msg}]);
  //   console.log('create: ', msg)
  //   // setcount([...lists,{A:'a'}]); 原来的all + new，json格式
  // }, []);

  const handleAddTodo = () => {
    // 非空判定
    if (msg.trim() === '') return

    console.log('非空判定！')

    let lastid = (todoList.length==0)? 0: todoList[todoList.length-1].id
  
    const todoToServer = {
      id:lastid+1,
      completed: false,
      text: msg,
    };
    setTodoList([...todoList, todoToServer])

    // 文本清空
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

      <div className="flex h-screen">
        <div className="flex-none bg-blue-900 pl-6 pr-6 px-10 text-blue-50 w-24">
          <div className="border-b-4 py-1"></div>
          <div className="border-b-2">2022</div>
          <div className="border-b-2">2021</div>
          <div className="border-b-2">2020</div>
          <div className="border-b-2">这里打算做header，竖着的header</div>
        </div>

      {/* 右侧底纹 */}
        <div className="flex-1 flex h-sreen bg-red-50 py-5 px-10 text-indigo-900">
          {/* 界面 */}
          <div className="
                min-h-50vh flex-col items-center justify-between overflow-hidden shadow-2xl 
                m-auto px-20 py-10 rounded-lg bg-red-400">
            <h1 className='pt-5 pl-5 mb-5 font-black text-3xl'>TodoList</h1>

            <div className="flex gap-4" >
              {/* <div className="flex bg-green-400"> class可以直接在form上*/}
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
                    // const labelId = `checkbox-list-label-${todo.id}`;

                    return (
                      <li key={todo.id} className="todolist_li relative" onClick={() => handleRemoveTodo(todo.id)}>
                        <input type="checkbox" />
                        <label className="absolute left-10">{todo.text}</label>

                        <button type="button" >Delete</button>

                      </li>
                    )
                  })
                }

              </ul>

            </div>
          </div>
        <div className="w-1/5"></div>

        </div>

      </div>


    </div>
  );
};

export default withLayout(Home, SimpleLayout);
// export default Home