import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-5">
            About Me
          </p>
        </div>
        <p className="text-xl mt-5">
          Driven computer science graduate with a keen interest in app
          development. Seeking an opportunity in the field of software
          engineering to explore and enhance the knowledge and skills I attain.
        </p>

        <p className="text-xl mt-5">Some examples of my skills include:</p>
        <p className="text-xl mt-5">
          React JS/ React Native ➤ building consistent visually appealing
          cross-platform applications ➤ good knowledge of API integration,
          backend, and navigation
        </p>
        <p className="text-xl mt-5">
          Getting Started with AWS ➤ AWS Identity & Access Management, Simple
          Storage Service (S3), Virtual Private Cloud (VPC), Elastic Compute
          Cloud (EC2), High-Level Architecture and Database.
        </p>
        <p className="text-xl mt-5">
          Machine Learning ➤ familiar with Data Exploration and Manipulation,
          Evaluation Metrics, k-NN, Linear Regression, and Decision Tree.
        </p>

        <p className="text-xl mt-5">
          An excellent team player having worked in different roles as an
          intern. A constant learner with an ability to adapt to new
          technologies.
        </p>
        <p className="text-xl mt-5">
          I believe the skills I developed in 4 years of Engineering and working
          as an intern define me and looking forward to implementing and
          polishing them in any opportunity that I receive.
        </p>
      </div>
    </div>
  );
};

export default About;
