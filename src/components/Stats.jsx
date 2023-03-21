import React, { useState } from "react";
import Countdown from "./Countdown";

export default function Stats() {
  const [showModal, setShowModal] = React.useState(false);

  const getHighScores = () => {


    if (localStorage.getItem('scores') !== null) {

      const scoresHtml = [];

      const scores = JSON.parse(localStorage.getItem('scores'));

      return scores.map((score, i) => {
        return (
          <tr key={i} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {score.date}
            </th>
            <td class="px-6 py-4">
              {score.score}
            </td>
          </tr>
        )

      })

    }
  }

  return (
    <>
      <button
        className="bg-primary-500 text-primary-200 active:bg-primary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Stats
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl flex justify-center items-center">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-primary-800 outline-none focus:outline-none flex ">
                {/*header*/}
                <div className="flex p-5 bg-primary-600 border-b border-solid border-primary-400 rounded-t w-full text-center ">
                  <h3 className="text-3xl font-bold uppercase text-primary-100 ">
                    Stats
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-primary-300 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-primary-400 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-10 py-6 flex-auto my-4 text-primary-100 text-lg font-semi-bold leading-relaxed">
                  <p>Your time was:</p>
                </div>
                <div>
                  <h3>High Scores</h3>
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    {getHighScores()}
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-primary-400 rounded-b">
                  <button
                    className="text-secondary-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Play Again
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-primary-800"></div>
        </>
      ) : null}
    </>
  );
}
