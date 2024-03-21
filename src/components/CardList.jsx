import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const typeColors = {
  "Full Time": { bgColor: "bg-red-100", textColor: "text-red-500" },
  "Part Time": { bgColor: "bg-purple-100", textColor: "text-purple-500" },
  Freelance: { bgColor: "bg-yellow-100", textColor: "text-yellow-500" },
};

const initialCardData = [
  {
    date: "01-01-2023",
    company: "ABC",
    title: "Software Engineer",
    type: "Full Time",
    description: "Worked on various projects using React and Node.js.",
    buttonColor: "#a587fa",
    buttonText: "See Details",
  },
  {
    date: "06-15-2023",
    company: "APD",
    title: "Frontend Developer",
    type: "Part Time",
    description: "Responsible for building user interfaces with Angular.",
    buttonColor: "#a587fa",
    buttonText: "See Details",
  },
  {
    date: "09-30-2023",
    company: "Freelance",
    title: "Web Designer",
    type: "Freelance",
    description: "Designed and developed websites for various clients.",
    buttonColor: "#a587fa",
    buttonText: "See Details",
  },
];

const Card = ({
  date,
  company,
  title,
  type,
  description,
  buttonColor,
  buttonText,
}) => {
  const { bgColor, textColor } = typeColors[type] || {};
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="block w-[210px] rounded-[20px] bg-white shadow-secondary-1">
      <div className="p-4 flex flex-col">
        <div className="flex justify-between">
          <small className="text-gray-400 block text-[10px] mb-3">{date}</small>
          <span>
            <BsThreeDotsVertical />
          </span>
        </div>
        <p className="font-bold text-[10px]">{company} Company</p>
        <h2 className="text-[1rem] font-bold mb-5">{title}</h2>

        <div className="mb-3">
          <span
            className={`${bgColor || ""} ${
              textColor || ""
            } px-3 py-[2px] rounded-[20px] font-bold text-[12px]`}
          >
            {type}
          </span>
        </div>
        <hr />
        <button
          type="button"
          data-modal-target="popup-modal"
          className={`bg-[${buttonColor}] px-2 py-3 font-bold text-[13px] rounded-[35px] text-white self-end mt-3`}
          onClick={() => setShowPopup(!showPopup)}
        >
          {buttonText}
        </button>

        {showPopup && (
          <div
            id="popup-modal"
            tabIndex="-1"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center z-50"
          >
            <div
              className={`relative w-full rounded-[15px] max-w-md max-h-full  ${
                bgColor || ""
              }`}
            >
              <div className="relative bg-blak rounded-[15px] shadow">
                <button
                  type="button"
                  className="absolute top-3 end-2.5 bg-transparent text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  onClick={() => setShowPopup(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
                <div className="p-4 md:p-5 text-left">
                  <h4>
                    <span className="font-bold">{company}</span> Company
                  </h4>
                  <p>
                    <strong>Position:</strong> {title} ({type})
                  </p>
                  <p>
                    <strong>Duration:</strong> From {date} to {date}
                  </p>
                  <p>
                    <strong>Description:</strong> {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const CardsList = ({ cardData }) => {
  return (
    <div className="grid grid-cols-3 gap-3 py-4">
      {/* <DataCard /> */}
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}

      {/* Default card */}
      {initialCardData.map((card, index) => (
        <Card key={index + cardData.length} {...card} />
      ))}
    </div>
  );
};
