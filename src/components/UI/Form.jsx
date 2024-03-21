import React, { useState } from "react";

export const Form = ({ addNewCard, closeForm }) => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedStartDate = formatDate(startDate);

    const newCard = {
      date: formattedStartDate,
      company: company,
      title: position,
      type: type,
      description: description,
      buttonColor: "#a587fa",
      buttonText: "See Details",
      bgColor: "bg-red-100",
      textColor: "text-red-500",
    };

    addNewCard(newCard);

    setPosition("");
    setCompany("");
    setType("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    closeForm(); // Close the form
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  };

  const handleCloseForm = () => {
    closeForm(); // Close the form when the close button is clicked
  };

  return (
    <div className=" p-4 w-[35rem]">
      <div className="relative rounded-lg shadow bg-white">
        <button
          type="button"
          className="absolute top-3 end-2.5 text-gray-900 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          onClick={handleCloseForm}
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

        <h4 className="text-center font-bold text-[1.2rem] py-4">
          Input Your Information
        </h4>
        <form className="mx-8" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="position"
                className="block mb-2 text-sm font-medium text-gray-900 uppercase"
              >
                Position
              </label>
              <input
                type="text"
                id="position"
                className="shadow-sm border border-blue-500 text-gray-900 text-sm block w-full p-2.5 bg-gray-200 rounded-md dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 uppercase"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="shadow-sm border border-blue-500 text-gray-900 text-sm  block w-full p-2.5 bg-gray-200 rounded-md dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900 uppercase"
              >
                Type
              </label>
              <select
                id="type"
                className="shadow-sm border border-blue-500 text-gray-900 text-sm block w-full p-2.5 bg-gray-200 rounded-md dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="" disabled>
                  ------- Choose Any Option -------
                </option>
                <option value="Part Time">Part Time</option>
                <option value="Full Time">Full Time</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="start-date"
                  className="block mb-2 text-sm font-medium text-gray-900 uppercase"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="start-date"
                  className="shadow-sm border border-blue-500 text-gray-900 text-sm  block w-full p-2.5 bg-gray-200 rounded-md dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="end-date"
                  className="block mb-2 text-sm font-medium text-gray-900 uppercase"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="end-date"
                  className="shadow-sm border border-blue-500 text-gray-900 text-sm  block w-full p-2.5 bg-gray-200 rounded-md dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 uppercase"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-200 rounded-lg border border-blue-500 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:text-1xl"
                placeholder="Write your thoughts here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-5 text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Form;
