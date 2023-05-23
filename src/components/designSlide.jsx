"use client";
import React from "react";
import { Fade } from "react-reveal";
// import HoverButton from "./reusableComponent/hoverButton";

export default function DesignSlide() {
  return (
    <div
      className="h-[100vh] w-[100vw] bg-bg1 relative"
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2FBackground%20ui%20screens-min.png?alt=media&token=33516f18-4b94-4ff2-af3b-9df06a02552c)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* // add background layer  */}
      <div className="absolute inset-0 w-full h-full bg-bg1 opacity-30"></div>
      <div className="absolute top-0 flex flex-row w-full items-start justify-start pl-[5vw]">
        <Fade bottom>
          <p className=" text-text_color1 text-4xl md:text-6xl gil-bold text-center pt-10 z-50">
            Look At Our designs
          </p>
        </Fade>
      </div>

      <div className="absolute bottom-3 flex flex-row w-full items-center justify-center">
        <button
          onClick={() => {
            // window.open("https://www.behance.net/naveenkatava", "_blank");
            window.open("https://www.behance.net/spotmiesllp", "_blank");
          }}
          type={"button"}
          className={`gil-reg text-sm flex flex-row items-center justify-center hover:bg-white hover:text-bg1 rounded-md min-w-[120px]  min-h-[40px] mt-4 bg-transparent text-white border border-white`}
        >
          Show More
        </button>
      </div>
    </div>
  );
}
