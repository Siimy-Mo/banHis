import { Fragment, useCallback, useEffect, useState, createContext, useContext } from 'react';
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


    </div>
  )
}
// 子組件


function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

export default PillStatusTable;
