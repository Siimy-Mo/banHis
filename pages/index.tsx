import type { NextPage } from 'next';
import Head from 'next/head';
import SimpleLayout from '../components/layout/SimpleLayout';
import withLayout from '../components/hocs/withLayout';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';
import { listeners } from 'process';
import { useRouter } from 'next/router';

interface StatisticProps {
  count: number;
}




const Home: NextPage = () => {
  // 声明变量，默认[]，setXXX是改变量的自定义函数set(count+1)
  const router = useRouter();
  const [count, setcount] = useState(0)
  const [msg, setMessage] = useState('')
  const [todoList, setTodoList] = useState([
    { content: '11' },
    { content: 2 },
    { content: 3 },
    { content: 4 }
  ]);

  const submitBtn = useCallback(() => {
    setTodoList([...todoList, {content:msg}]);
    console.log('create: ', msg)
    // setcount([...lists,{A:'a'}]); 原来的all + new，json格式
  }, []);


  const handleChange = event => {
    setMessage(event.target.value);
    console.log(event.target.value)

  };



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

        <div className="flex-1 bg-red-50 py-5 px-10 text-indigo-900">
          <div className="h-2/3 w-2/3 m-auto rounded-md bg-red-400 py-5 px-10
                          ">
            中间的框架
            <button type="button" onClick={() => { router.push('/404'); }}
            >Push to 404【可以用的</button>

            <div className="flex gap-4" >
              {/* <div className="flex bg-green-400"> class可以直接在form上*/}
              <form onSubmit={submitBtn} >
                <label>
                  <input type='text' id='input' placeholder="Type the info..." onChange={handleChange}/>
                </label>
                <button type="button" className="mx-5 px-3 py-1 bg-yellow-200" onClick={submitBtn}>Sumbit</button>
                <button type="button" className="mx-5 px-3 py-1 bg-yellow-200" onClick={() => { setcount(count + 1); }} >Count</button>

              </form>
              <div>Count: {count}</div>
            </div>


            <div className="w-50 h-100 border-red-800">display interface(用axios
              <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {
                  todoList.map((target, index) => {
                    return <li key={index}>Todolist{target.content}</li>
                  })
                }

              </ul>

            </div>
            {/* <div className="bg-indigo-200">display interface(用axios</div> */}
          </div>
        </div>
      </div>


    </div>
  );
};

export default withLayout(Home, SimpleLayout);
// export default Home