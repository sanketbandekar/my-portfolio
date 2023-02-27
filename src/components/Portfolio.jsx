import React from "react";
import mern from "../assets/projects/memories.png";
import chat from "../assets/projects/chat-app.png";
import ecommerce from "../assets/projects/ecommerce.png";
import f from "../assets/projects/f.jpg";
import img1 from "../assets/projects/img1.png";
import n from "../assets/projects/n.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      data: mern,
      title: "Memories App",
      link: "https://github.com/sanketbandekar/mern",
    },
    {
      id: 2,
      data: chat,
      title: "Chat App",
      link: "https://github.com/sanketbandekar/chat-application",
    },
    {
      id: 3,
      data: ecommerce,
      title: "Ecommerce App",
      link: "https://github.com/sanketbandekar/lifestyle-store",
    },
    {
      id: 4,
      data: img1,
      title: "Box Office App",
      link: "https://github.com/sanketbandekar/box-office",
    },
    {
      id: 5,
      data: n,
      title: "NFT Marketplace App",
      link: "https://github.com/sanketbandekar/nft-demo-app",
    },
    {
      id: 6,
      data: f,
      title: "Food App",
      link: "https://github.com/sanketbandekar/react-native-restaurant-app",
    },
  ];
  return (
    <div
      name="Portfolio"
      className=" bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen "
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out my projects here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, data, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="flex items-center justify-center mx-3">
                {title}
              </div>
              <img
                src={data}
                alt="img"
                className="rounded-md duration-200 hover:scale-105 object-scale-down"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
