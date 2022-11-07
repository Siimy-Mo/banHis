// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { ChangeEvent } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Camera } from "react-camera-pro";

export default function SubmitTipView() {
    // export default function LoginView() {

    const [msg, setMessage] = useState('');
    const router = useRouter();

    const camera = useRef(null);


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    };

    // 摄像头相关
    // const successFunc = (mediaStream: any) => {
    //     let video = cameraVideoRef.current;
    //     // const video = document.getElementById('cameraVideo') as HTMLVideoElement;
    //     // 旧的浏览器可能没有srcObject
    //     if ('srcObject' in video) {
    //         video.srcObject = mediaStream;
    //     }
    //     video.onloadedmetadata = () => {
    //         video.play();
    //     };
    // };

    function errorFunc(err: any) {
        console.log(`${err.name}: ${err.message}`);
        // always check for errors at the end.
    }
    //启动摄像头
    // const openMedia = () => {
    //     const opt = {
    //         audio: false,
    //         video: {
    //             width: 1280,
    //             height: 720
    //         }
    //     };
    //     navigator.mediaDevices.getUserMedia(opt).then(successFunc).catch(errorFunc);
    // };

    //关闭摄像头
    // const closeMedia = () => {
    //     const video = cameraVideoRef.current;
    //     const stream = video.srcObject;
    //     if ('getTracks' in stream) {
    //         const tracks = stream.getTracks();
    //         tracks.forEach(track => {
    //             track.stop();
    //         });
    //     }
    // };
    const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
    useEffect(() => {
        (async () => {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const videoDevices = devices.filter(i => i.kind == 'videoinput');
          setDevices(videoDevices);
        })();
      });

    return (
        <>

            <div className=''>
                攝像機？
                {/* <Camera
          ref={camera}
          aspectRatio="cover"
          numberOfCamerasCallback={i => setNumberOfCameras(i)}
          videoSourceDeviceId={activeDeviceId}
          errorMessages={{
            noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
            permissionDenied: 'Permission denied. Please refresh and give camera permission.',
            switchCamera:
              'It is not possible to switch camera to different one because there is only one video device accessible.',
            canvas: 'Canvas is not supported.',
          }}
        /> */}
                <Camera ref={camera} errorMessages={{
            noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
            permissionDenied: 'Permission denied. Please refresh and give camera permission.',
            switchCamera:
              'It is not possible to switch camera to different one because there is only one video device accessible.',
            canvas: 'Canvas is not supported.',
          }}/>
                {/* <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button> */}
                {/* <img src={image} alt='Taken photo' /> */}
                {/* <button onClick={openMedia}>打开</button> */}
                <button>保存</button>
                {/* <button onClick={closeMedia}>关闭</button> */}
            </div>

        </>
    );
}
