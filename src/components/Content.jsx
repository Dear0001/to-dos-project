import React, { useState } from "react";
import { Category } from "./Category";
import { CardsList } from "./CardList";
import { Form } from "./UI/Form";

export const Content = () => {
  const [cardData, setCardData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addNewCard = (newCard) => {
    setCardData([...cardData, newCard]);
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <div className="sticky top-0 bg-gray-200 pt-5">
        <ul className="flex justify-between">
          <li>
            <a href="" className="text-[15px] uppercase font-[700]">
              Project
            </a>
          </li>
          <li>
            <button
              className="bg-gray-300 px-3 py-2 text-[15px] font-[500] rounded-md uppercase hover:bg-blue-500 hover:text-white"
              onClick={openForm}
            >
              Add new project
            </button>
          </li>
        </ul>
        <div className="flex gap-2 mt-2">
          <Category />
        </div>
      </div>
      {isFormVisible && (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
         <Form addNewCard={addNewCard} closeForm={closeForm} />
       </div>
      )}
      <CardsList cardData={cardData} />
    </>
  );
};
