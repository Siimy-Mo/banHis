// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { ChangeEvent } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function SubmitTipView() {
    // export default function LoginView() {
    const [msg, setMessage] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const router = useRouter();

    const videoRef = useRef<HTMLVideoElement>(null);
    const photoRef = useRef<HTMLCanvasElement>(null);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 1920, height: 1080, facingMode: 'environment' }
            }).then(stream => {
                console.log('videoRef.current:', videoRef.current)
                let video = videoRef.current;
                video!.srcObject = stream;
                video!.play();
            }).catch(err => {
                console.error(err)
            })
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);

        let video = videoRef.current!;
        let photo = photoRef.current!;

        photo.width = width;
        photo.height = height;
        let ctx = photo.getContext('2d')!;
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);

    }

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ');
    }

    useEffect(() => {
        getVideo()
    }, [videoRef]);

    return (
        <>

            <div>

                <div className={classNames('relative w-screen h-screen bg-themeSecondary',
                    hasPhoto ? '' : ' hidden')}>
                    <video ref={videoRef}></video>
                    <button className='absolute right-1/2 bottom-6'
                        onClick={takePhoto}>保存照片</button>
                </div>

                <div className={classNames('relative w-screen h-screen bg-themeAnother',
                    hasPhoto ? 'hidden' : ' hidden')}>
                    <canvas ref={photoRef}></canvas>
                    <button className='absolute right-1/2 bottom-6'
                        onClick={()=>setHasPhoto(false)}>返回相机</button>
                </div>


            </div>

        </>
    );
}
