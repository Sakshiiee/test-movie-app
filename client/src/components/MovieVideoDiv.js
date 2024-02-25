import React, { useRef, useEffect, useState } from 'react';

const Start = () => {
    const videoRef = useRef(null);
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        video.loop = true;
        video.play().catch(error => {
            console.error('Video playback error:', error);
        });

    //     // const timeout = setTimeout(() => {
    //     //   setShowVideo(false);
    //     //   setTimeout(() => {
    //     //     window.location.href = '/homepage'; 
    //     //   }, 1000);
    //     // }, 3000);

    //     // return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={{ width: '100%',height:"500px" ,overflow: 'hidden' }}>
            <video  ref={videoRef} controls height="700px"  >
                <source src="/wave.mp4" type="video/mp4" />
            </video>
         </div>
    );
};

export default Start;
