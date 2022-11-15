// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface StaffLoginViewProps {
    handleSubmit: any;
}

export default function StaffLoginView(props: StaffLoginViewProps) {
    // export default function LoginView() {
    const { handleSubmit } = props;
    const [msg, setMessage] = useState('')
    const router = useRouter();


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <>

            <div className='flex justify-center items-center h-screen'>

                {/* 根据登入状态展示两个组件：1登入界面（动态消失且往上移动）2、选择界面
                    或者只将text input 转为两个按钮，不用组件更迭*/}
                <div className='flex flex-col items-center '>

                    <div className='mb-6'>
                        <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                            Staff Login</h3>
                    </div>

                    <div className='flex flex-col items-center w-full px-12 py-6 pt-12 rounded-xl bg-red-300 timePillIntroShadowOn'>

                        <form onSubmit={handleSubmit}>
                            {/* 这里不应该写,父级div的子轴上的剧中无才用的 */}
                            <div className='mb-6 text-center'>输入Staff编号</div>
                            <label htmlFor='staffCode' className="">
                                <input type="text" name="staffCode"
                                    placeholder='Staff Code' required />
                            </label>

                            {/* 加载logo：没有效果 */}
                            {/* {SubmitLoading ? (
                                <div className="">提交中...</div>
                            ) : <div></div>} */}

                            <div className=''>
                                <button type="submit"
                                    onClick={() => router.push('../timePill')}
                                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Confirm</button>

                            </div>
                        </form>

                    </div>
                </div>
                {/* 确认登入之后显示query和update的选项！ */}

            </div>

        </>
    );
}
