import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Png1 from "../assets/Images/ppl1.jpg";
import Png2 from "../assets/Images/ppl2.jpg";
import Png3 from "../assets/Images/ppl3.jpg";
import Png4 from "../assets/Images/ppl4.jpg";
import Png5 from "../assets/Images/ppl5.jpg";
import Png6 from "../assets/Images/ppl6.jpg";

const profileData = [
  {
    image: Png1,
    username: "David",
    description:
      "Hey tell me about progress of project? Waiting for your response",
    date: "21 July",
  },
  {
    image: Png2,
    username: "Stephanie",
    description: "I got your first assignment. It was quite good. You can start work on next assignment",
    date: "19 July",
  },
  {
    image: Png3,
    username: "William",
    description: "I want some changes in previous work you sent  me. Waiting for your reply.",
    date: "17 July",
  },
  {
    image: Png4,
    username: "Alona",
    description: "I am really impressed from your work. Keep doing great work",
    date: "15 July",
  },
  {
    image: Png5,
    username: "Michael",
    description: "I am really impressed from your work. Keep doing great work",
    date: "25 July",
  },
  {
    image: Png6,
    username: "Sophia",
    description: "I am really impressed from your work. Keep doing great work",
    date: "26 July",
  },
  {
    image: Png1,
    username: "David",
    description:
      "Hey tell me about progress of project? Waiting for your response",
    date: "21 July",
  },
  {
    image: Png2,
    username: "Stephanie",
    description: "I got your first assignment. It was quite good. You can start work on next assignment",
    date: "19 July",
  },
  {
    image: Png3,
    username: "William",
    description: "I want some changes in previous work you sent  me. Waiting for your reply.",
    date: "17 July",
  },
  {
    image: Png4,
    username: "Alona",
    description: "I am really impressed from your work. Keep doing great work",
    date: "15 July",
  },
  {
    image: Png5,
    username: "Michael",
    description: "I am really impressed from your work. Keep doing great work",
    date: "25 July",
  },
  {
    image: Png6,
    username: "Sophia",
    description: "I am really impressed from your work. Keep doing great work",
    date: "26 July",
  },
];

export const SidebarRight = () => {
  const [starClicked, setStarClicked] = useState(
    Array(profileData.length).fill(false)
  );

  const handleStarClick = (index) => {
    const newStarClicked = [...starClicked];
    newStarClicked[index] = !newStarClicked[index];
    setStarClicked(newStarClicked);
  };

  return (
    <div className="max-h-[570px] overflow-y-scroll example">
      <div className="w-full max-w-md rounded-lg">
        <div className="flow-root">
          <ul role="list" className="">
            {profileData.map((profile, index) => (
              <li
                key={index}
                className={`py-3 sm:py-4  border-t-2 border-gray-300 h-24`}
                
              >
                <div className="flex items-center ">
                  <div className="flex-shrink-0 pl-5">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={profile.image}
                      alt={`${profile.username} image`}
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium">{profile.username}</p>
                    <p className="text-sm text-black-500">{profile.description}</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 pr-[15px]">
                    {starClicked[index] ? <FaStar onClick={() => handleStarClick(index)} /> : <CiStar onClick={() => handleStarClick(index)} />}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
