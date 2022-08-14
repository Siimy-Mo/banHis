import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SimpleLayout from '../components/layout/SimpleLayout';
import withLayout from '../components/hocs/withLayout';
import { useCallback } from 'react';


const Home: NextPage = () => {
  // const [statistics, setStatistics] = useState([]);
  // return之前添加各种参数+逻辑
  const submitBtn = useCallback(() => {
    alert("还在改！" );
  },[]);


  return (
    <div>
      <Head>
        <title>BanHist</title>
        <meta name="description" content="Bangumi History Recording page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen">
        <div className="flex-none bg-blue-900 pl-6 pr-6 px-10 text-blue-50">
          <div className="border-b-4 py-1"></div>
          <div className="border-b-2">2022</div>
          <div className="border-b-2">2021</div>
          <div className="border-b-2">2020</div>
        </div>

        <div className="flex-1 bg-red-50 py-5 px-10 text-indigo-900">
          <div className="w-50 h-100 rounded-md bg-red-400 py-5 px-10">
            中间的框架

            <div className="flex">
            {/* <div className="flex bg-green-400"> */}
              <div>input content</div>___________
              <button id="btn_sumbit" onClick={submitBtn} >Sumbit</button>
            </div>

            <div className="w-50 h-100 border-red-800">display interface(用axios</div>
            {/* <div className="bg-indigo-200">display interface(用axios</div> */}
          </div>
        </div>
      </div>


    </div>
  );
};

export default withLayout(Home, SimpleLayout);
// export default Home