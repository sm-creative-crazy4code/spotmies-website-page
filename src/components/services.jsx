"use client";
import {
  productDesign,
  webDevelopment,
  blockchainDevelopment,
  mobileDevelopment,
  windowsDevelopment,
} from "@/constants";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Fade from "react-reveal/Fade";

export default function Services() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [body, setbody] = useState(productDesign);
  return (
    <div className="w-[100vw] h-fit md:h-[100vh] bg-bg2" id="services">
      {/* {PopUp(title, body, show, setIsPopupOpen)} */}
      <PopUp
        title={title}
        body={body}
        show={isPopupOpen}
        setShow={setIsPopupOpen}
      />
      <div className="flex flex-col justify-center w-[90%] h-full py-[8%] m-auto">
        <Fade bottom>
          <p className="gil-bold text-3xl md:text-5xl text-left pb-12 text-text_color2">
            What We Offer
          </p>
        </Fade>
        <div className="w-full h-full m-auto flex flex-col md:flex-row items-center justify-center ">
          <div className="flex flex-col items-center justify-center h-full w-full md:w-[70%]">
            <Fade>
              <div className=" w-full h-[60%] bg-red-300 rounded-xl mb-2 md:mb-6 relative industry-card">
                {dataInsideDiv({
                  onClick: () => {
                    setIsPopupOpen(true);
                    setTitle("Product Design");
                    setbody(productDesign);
                  },
                  title: "Product Design",
                  description:
                    "Transform your ideas into reality with our expert product design services",
                  image:
                    "https://images.unsplash.com/photo-1606161290889-77950cfb67d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                })}
              </div>
            </Fade>

            <div className="w-full h-[40%] mb-2 md:mb-0 flex flex-row items-center justify-center">
              <Fade>
                <div className="flex flex-col items-center justify-center w-[50%] h-full bg-blue-100 rounded-xl mr-2 md:mr-6 industry-card relative">
                  {dataInsideDiv({
                    onClick: () => {
                      setIsPopupOpen(true);
                      setTitle("Web Development");
                      setbody(webDevelopment);
                    },
                    title: "Web Development",
                    description:
                      "From ideation to launch, our web development services deliver excellence at every step",
                    image:
                      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                  })}
                </div>
              </Fade>
              <Fade>
                <div className="flex flex-col items-center justify-center w-[50%] h-full bg-green-100 rounded-xl industry-card relative">
                  {dataInsideDiv({
                    onClick: () => {
                      setIsPopupOpen(true);
                      setTitle("Blockchain");
                      setbody(blockchainDevelopment);
                    },
                    title: "Blockchain & Web3",
                    description:
                      "Empower your business with the transformative potential of blockchain technology",
                    image:
                      "https://images.unsplash.com/photo-1639152446002-ffd04bd3d529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
                  })}
                </div>
              </Fade>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full ml-0 md:ml-6 w-full md:w-[30%]">
            {/* this div contains 2 div, 1st one is 40% 2nd one is 60% heights respectively */}
            <Fade>
              <div className="flex flex-col items-center justify-center w-full h-[40%] bg-yellow-100 rounded-xl mb-2 md:mb-6 industry-card relative">
                {dataInsideDiv({
                  onClick: () => {
                    setIsPopupOpen(true);
                    setTitle("Windows & Mac");
                    setbody(windowsDevelopment);
                  },
                  title: "Windows & Mac",
                  description:
                    "Maximize your device's potential with our expert Windows & Mac services.",
                  image:
                    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80",
                })}
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center justify-center w-full h-[60%] bg-pink-100 rounded-xl industry-card relative">
                {dataInsideDiv({
                  onClick: () => {
                    setIsPopupOpen(true);
                    setTitle("Android & IOS");
                    setbody(mobileDevelopment);
                  },
                  title: "Android & IOS",
                  description:
                    "Building Mobile apps that not only look great but perform flawlessly across all devices",
                  image:
                    "https://images.unsplash.com/photo-1628233345409-349459e6f79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                })}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );

  function dataInsideDiv({ title, description, image, onClick }) {
    return (
      <>
        <div className="absolute inset-0 bg-black opacity-20 hover:opacity-40 opacity-layer rounded-md md:rounded-xl" />
        <div className="absolute inset-0 w-full h-full p-3 md:p-6 flex flex-col">
          <Fade bottom>
            <p className="text-white gil-bold text-xl md:text-3xl">{title}</p>
          </Fade>
          <p className="opacity-70 text-white text-md md:text-xl onHoverShow text-justify pt-4">
            {description}
          </p>
          <BsArrowRight
            onClick={() => {
              onClick && onClick();
            }}
            size=""
            color="white"
            className="absolute bottom-[20px] md:text-[2rem] right-[30px]  onHoverShow cursor-pointer"
          />
        </div>
        <img
          src={image}
          alt="pic"
          className="w-full h-full object-cover rounded-md md:rounded-xl "
        />
      </>
    );
  }
}
export function PopUp({ title, body, show, setShow }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div
        // key={key}
        className="rounded-xl bg-white z-50 shadow-sm p-9 hover:shadow-lg transition duration-300 w-[90vw] md:w-[70vw] h-[80vh] md:min-h-fit md:h-[80vh] min-h-[300px] flex flex-col justify-between relative md:overflow-y-auto overflow-y-auto"
      >
        <h2 className="text-3xl gil-bold text-primary2">{title}</h2>
        {body.map((item, key) => (
          <>
            <p className="text-gray-600 pt-4 text-md md:text-xl" key={key}>
              {item.description}
              <br />
            </p>
          </>
        ))}
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => {
            setShow(false);
          }}
        >
          <AiOutlineCloseCircle size="2rem" color="black" />
        </div>
      </div>
    </div>
  );
}
