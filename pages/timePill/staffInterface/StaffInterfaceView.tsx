// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface StaffInterfaceViewProps {
    handleSignIn: FormEventHandler;
}

export default function StaffInterfaceView(props: StaffInterfaceViewProps) {
    // export default function LoginView() {
    const { handleSignIn, } = props;
    const [register, setRegister] = useState(false)
    const router = useRouter();

    return (
        <>

            <div className='flex justify-center items-center h-screen'>

                <div className='flex flex-col items-center '>
                    <div className=''>
                        <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                            staff操作界面</h3>
                    </div>

                    <div className='flex flex-col items-center w-full px-12 py-6 pt-12 rounded-xl bg-red-300 timePillIntroShadowOn'>
                        功能界面劃分：
                        <div >現有膠囊狀態數</div>
                        <div>
                            未發送膠囊(點擊後下拉) -> 手動發送郵件
                        </div>
                        <div>
                            取出膠囊
                        </div>

                    </div>
                </div>
                {/* 确认登入之后显示query和update的选项！ */}

            </div>

        </>
    );
}
