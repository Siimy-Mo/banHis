import { Fragment, useCallback, useEffect, useState, createContext, useContext } from 'react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const UserContext = createContext(null)


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}



// export default function StaffInterfaceView(props: StaffInterfaceViewProps) {

// 父組件
function PillStatusTable() {
  //讀取狀態來選擇table
  return(
    <div>
      <Table1/>

    </div>
  )
}
// 子組件


const Table1 = () =>{
  return <div>
    第一個表
  </div>
}

const Table2 = () =>{
  return <div>
    第2個表
  </div>
}

const Table3 = () =>{
  return <div>
    第3個表
  </div>
}


export default PillStatusTable;
