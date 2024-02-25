// import React, { useRef, useEffect, useState } from 'react';

// const Start = () => {
//     const videoRef = useRef(null);
//     const [showVideo, setShowVideo] = useState(true);

//     useEffect(() => {
//         const video = videoRef.current;
//         video.loop = true;
//         video.play().catch(error => {
//             console.error('Video playback error:', error);
//         });

//     //     // const timeout = setTimeout(() => {
//     //     //   setShowVideo(false);
//     //     //   setTimeout(() => {
//     //     //     window.location.href = '/homepage'; 
//     //     //   }, 1000);
//     //     // }, 3000);

//     //     // return () => clearTimeout(timeout);
//     }, []);

//     return (
//         <div style={{ width: '100%',height:"500px" ,overflow: 'hidden' }}>
//             <video  ref={videoRef} controls height="700px"  >
//                 <source src="/wave.mp4" type="video/mp4" />
//             </video>
//          </div>
//     );
// };

// export default Start;


import React, { useRef, useEffect, useState } from 'react';
export default function MovieVideoDiv() {


    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;
        video.loop = true;
        // video.play().catch(error => {
        //     console.error('Video playback error:', error);
        // });
    }, []);


    return (
        <div
            className="col-span-5 lg:col-span-2   border   "
            style={{ height: "100%" }}
        >

            <video ref={videoRef} controls height="700px"  >
                <source src="/wave.mp4" type="video/mp4" />
            </video>

        </div>
    );
}
