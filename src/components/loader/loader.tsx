import React from "react";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="fixed z-[999999999] top-0 left-0 w-full h-screen dark:bg-dark_secondary_bg_color bg-light_bg_color   flex justify-center items-center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <style>
        {`      
                body{
                    overflow : hidden;
                }
                .lds-ripple {
                    display: inline-block;
                    position: relative;
                    width: 80px;
                    height: 80px;
                  }
                  .lds-ripple div {
                    position: absolute;
                    border: 4px solid #ff8700;
                    opacity: 1;
                    border-radius: 50%;
                    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                  }
                  .lds-ripple div:nth-child(2) {
                    animation-delay: -0.5s;
                  }
                  .lds-ripple div:nth-child(3) {
                    animation-delay: -3s;
                  }
                  .lds-ripple div:nth-child(4) {
                    animation-delay: -4s;
                  }
                  @keyframes lds-ripple {
                    0% {
                      top: 36px;
                      left: 36px;
                      width: 0;
                      height: 0;
                      opacity: 0;
                    }
                    4.9% {
                      top: 36px;
                      left: 36px;
                      width: 0;
                      height: 0;
                      opacity: 0;
                    }
                    5% {
                      top: 36px;
                      left: 36px;
                      width: 0;
                      height: 0;
                      opacity: 1;
                    }
                    100% {
                      top: 0px;
                      left: 0px;
                      width: 72px;
                      height: 72px;
                      opacity: 0;
                    }
                  }
                  
            `}
      </style>
    </React.Fragment>
  );
};

export default Loader;
