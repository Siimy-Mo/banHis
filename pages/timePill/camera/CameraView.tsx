// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { ChangeEvent } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Camera } from "react-camera-pro";
// import { Camera, CameraType } from './Camera';




export default function SubmitTipView() {
    // export default function LoginView() {
    const [msg, setMessage] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const router = useRouter();

    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({
            video:{width:1920, height:1080}
        }).then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        }).catch(err => {
            console.error(err)
        })
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);

        let video = videoRef.current;
        let photo = photoRef.current;
        console.log(photoRef.current)

        // if (photo) {

        //     photo.width = width;
        //     photo.height = height;
        //     let ctx = photo.getContext('2d');
        //     ctx.drawImage(video, 0, 0, width, height);
        //     setHasPhoto(true);
        // }
    }


    useEffect(() => {
        getVideo()
    }, [videoRef]);

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
                <div className='overflow-hidden w-1/2 h-1/2'>

                    {/* <Camera ref={camera} 
                facingMode='environment'
                errorMessages={{
            noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
            permissionDenied: 'Permission denied. Please refresh and give camera permission.',
            switchCamera:
              'It is not possible to switch camera to different one because there is only one video device accessible.',
            canvas: 'Canvas is not supported.',
          }}/> */}
                </div>
                <video ref={videoRef}></video>
                <button className=''
                    onClick={takePhoto}>保存！！</button>

                    {/* hasPhoto控制class */}
                <div className='result'>
                    <canvas ref={photoRef}></canvas>
                    <button>关闭！！</button>
                </div>

            </div>

        </>
    );
}
