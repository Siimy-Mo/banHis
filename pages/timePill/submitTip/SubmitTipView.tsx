// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


interface SubmitTipViewProps {
    information:any;
    diff:number;
    // handleSignIn: FormEventHandler;
}

export default function SubmitTipView(props: SubmitTipViewProps) {
    const { information, diff } = props;
    // const deadline = information.deadline.substr(0,10);
    const router = useRouter();

    return (
        <>

            <div className='flex justify-center items-center py-20 md:pt-48 text-red-900'>
                <div className='flex flex-col items-center w-5/6 md:w-full '>

                    <div className=''>
                        <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none md:text-4xl lg:text-5xl dark:text-white">
                            提交成功</h3>
                    </div>

                    <div className='flex flex-col items-center max-w-screen-md px-6 md:px-12 py-6 pt-12 rounded-xl bg-red-200 timePillIntroShadowOn'>
                        {/* 这里不应该写,父级div的子轴上的剧中无才用的 */}
                        <div className='md:mb-6 text-center text-sm md:text-lg'>
                            恭喜你已經成功將一枚時光膠囊發送到未來，
                            時光膠囊編號為：<b>{information.id}</b>。<br/>

                            時光膠囊將會隨時間漂流，直至<b>{information.deadline}</b>
                            會再次通過郵箱：<b>{information.email}</b>,
                            通知<b>{diff}</b>天後的你到店打開膠囊。<br/><br/>
                            膠囊預覽：</div>
                            <img className="my-2 w-2/3 rounded" src={information.content} alt="Img preview" />

                        <div className=''>
                            <button type="button"
                                onClick={() => router.push('../timePill')}
                                className="staffInterfaceBtn">Confirm</button>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
