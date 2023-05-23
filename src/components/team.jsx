"use client";
import { ourTeam } from "@/constants";
import React, { useState } from "react";
import { BsArrowRight, BsArrowUpRightCircle } from "react-icons/bs";
import { Fade } from "react-reveal";
import { PopUp } from "./services";

export default function TeamSlide() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="w-[100vw] h-fit md:h-[100vh] bg-bg3" id="services">
      <PopUp
        show={isPopupOpen}
        setShow={setIsPopupOpen}
        title={"Team"}
        body={ourTeam}
      />
      <div className="flex flex-col justify-center w-[90%] h-full py-[8%] m-auto">
        <Fade bottom>
          <p className="gil-bold text-3xl md:text-6xl text-left pb-12 text-text_color2">
            Meet Our Team
          </p>
        </Fade>
        <div className="w-full h-full m-auto flex flex-col md:flex-row items-center justify-center ">
          <div className="flex flex-col items-center justify-center h-full w-full md:w-[60%]">
            <Fade>
              <div className="group overflow-hidden w-full h-[60%] bg-red-300 rounded-xl mb-2 md:mb-6 relative industry-card">
                {dataInsideDiv({
                  // title: "Product Design",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  image:
                    "https://nftstorage.link/ipfs/bafybeiblblxgs3cwtvbaze4tjlbaz3mz3vt34rrzwsjc2htb3umcd2a55y",
                })}
              </div>
            </Fade>
            <div className="w-full h-[40%] mb-2 md:mb-0 flex flex-row items-center justify-center">
              <Fade>
                <div className="group overflow-hidden flex flex-col items-center justify-center w-[50%] h-full bg-blue-100 rounded-xl mr-2 md:mr-6 industry-card relative">
                  {dataInsideDiv({
                    title: "Web Development",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image:
                      "https://nftstorage.link/ipfs/bafybeicok63j7p4674n76w7i4bd2yfdwle6r5nzascdxuuuoxy7cdkepnu",
                  })}
                </div>
              </Fade>
              <Fade>
                <div className="group overflow-hidden flex flex-col items-center justify-center w-[50%] h-full bg-green-100 rounded-xl industry-card relative">
                  {dataInsideDiv({
                    title: "Blockchain & Web3",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image:
                      "https://nftstorage.link/ipfs/bafybeiglio42xmbwpo3twmh4rposg4fin5plvw6aoek5r2bubbd3xrn4vm",
                  })}
                </div>
              </Fade>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-full ml-0 md:ml-6 w-full md:w-[40%]">
            {/* this div contains 2 div, 1st one is 40% 2nd one is 60% heights respectively */}
            <div className="text-primary2 flex flex-col items-start justify-center w-full h-[45%] rounded-xl mb-2 md:mb-0 industry-card relative">
              {/* add content here
               */}
              <Fade bottom>
                <p className="md:text-5xl gil-bold text-3xl">
                  {" "}
                  We Are <span className="text-primary">Result</span> Driven
                  Team
                </p>
              </Fade>
              <div className="opacity-60">
                <Fade bottom>
                  <p className="text-sm opacity-60">
                    At our company, quality is of the utmost importance when it
                    comes to development. We strive to ensure that all of our
                    products are of the highest standard and built to last. We
                    take pride in our work, and it is our mission to provide our
                    customers with the best experience possible. Quality is the
                    foundation of our company, and we take every measure to
                    ensure our development process is of the highest quality.
                  </p>
                </Fade>
              </div>
              <Fade bottom>
                <p
                  className="gil-med text-sm md:text-md text-primary flex items-center cursor-pointer"
                  onClick={() => {
                    setIsPopupOpen(true);
                  }}
                >
                  Learn More&nbsp; <BsArrowUpRightCircle />{" "}
                </p>
              </Fade>
            </div>
            <Fade>
              <div className="group overflow-hidden flex flex-col items-center justify-center w-full h-[55%] bg-pink-100 rounded-xl industry-card relative">
                {dataInsideDiv({
                  title: "Mobile Development",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  image:
                    "https://nftstorage.link/ipfs/bafybeif65bbuoxkm5ocwd5xpn5xdu2dyaknkw7kowkemuthqpniq3wqcfi",
                })}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );

  function dataInsideDiv({ title, description, image }) {
    return (
      <>
        {/* <div className="absolute inset-0 bg-black opacity-20 hover:opacity-40 opacity-layer rounded-md md:rounded-md" /> */}
        <div className="absolute inset-0 w-full h-full p-3 md:p-6 flex flex-col ">
          {/* <p className="text-white gil-bold text-xl md:text-3xl">{title}</p>
          <p className="opacity-70 text-white text-xs md:text-sm onHoverShow text-justify pt-4">
            {description}
          </p>
          <BsArrowRight
            size=""
            color="white"
            className="absolute bottom-[20px] md:text-[2rem] right-[30px]  onHoverShow"
          /> */}
        </div>
        <img
          src={image}
          alt="pic"
          className="w-full h-full object-cover rounded-md md:rounded-md group-hover:scale-110 transition-all duration-700 ease-in-out"
        />
      </>
    );
  }
}
