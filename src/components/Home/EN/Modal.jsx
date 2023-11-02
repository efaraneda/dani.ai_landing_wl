import React, { useState } from 'react';

const Widget = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [oculto, setOculto] = useState(false);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleClick = () => {
    setOculto(true);
  };

  return (
    <div className="fixed z-50 bottom-0 right-0 mb-4 mr-4">
      {oculto ? null : (
        <>
          {isFullScreen ? (
            <div className="mb-10 rounded-lg w-400 h-320 bg-white flex items-center justify-center shadow-md overflow-hidden cursor-pointer">
              <img
                src={'dani_picture.jpg'}
                className="sm:w-[200px] sm:h-[200px] w-[400px] h-[300px] object-cover"
              />
              <button
                onClick={handleFullScreenToggle}
                className="absolute top-0 right-2 p-2 shadow-md text-black-500 font-bold text-xl rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <div
              className="w-28 h-28 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={'dani_picture.jpg'}
                className="w-full h-full rounded-full object-cover"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute md:bottom-36 sm:bottom-32  bg-lavanda text-black shadow-md md:px-2 sm:px-1 py-1 rounded-lg text-xs text-left">
              <b>Hi! We've translated this</b> for you, but our services are currently working for Spanish speakers. <b>Share with your Latino friends!</b> ❤️
              </div>
            </div>
          )}

          {!isFullScreen && (
            <button
              onClick={handleClick}
              className="absolute top-0 left-0 text-black-500 text-sm rounded-full bg-gray-200 hover:bg-gray-300 w-6 h-6 shadow-md text-center justify-center items-center flex"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Widget;
