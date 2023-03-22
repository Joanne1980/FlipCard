import React, { useState } from "react";

export default function Instructions({ theme, setTheme, playGame }) {
  const [showModal, setShowModal] = React.useState(true);

  return (
    <>
      {/* <button
        className="bg-alt-500 text-alt-200 active:bg-alt-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        ?
      </button> */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl flex justify-center items-center">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-alt-800 outline-none focus:outline-none flex ">
                {/*header*/}
                <div className="flex flex-col justify-center p-5 bg-alt-200 border-b border-solid border-alt-400 rounded-t w-full ">
                  <h3 className="text-3xl font-bold text-center uppercase text-alt-800 pt-2">
                    How to Play
                  </h3>
                </div>
                {/*body*/}
                <div className="relative px-10 py-6 flex-auto my-4 text-alt-100 text-lg font-semi-bold leading-relaxed">
                  <ol className="list-disc pl-3">
                    <li>Choose a theme for your playing cards.</li>
                    <br />
                    <li className="">
                      You will be shown a quick peek of your playing cards on
                      the board. Try to remember where the pairs are!
                    </li>
                    <br />
                    <li>
                      Begin to match the pairs by clicking on two cards at a
                      time. The cards will flip over to reveal the card image.
                    </li>
                    <br />
                    <li>
                      Correctly paired cards will remain flipped over, incorrect
                      pairs will reset.
                    </li>
                    <br />
                    <li>
                      Players who finish matching their pairs in the quickest
                      time will make it to the leaderboard!
                    </li>
                  </ol>
                </div>
                {/*footer*/}
                <div className="flex flex-col justify-center border-t border-solid border-alt-400 pt-6 bg-alt-800 text-alt-300">
                  <h2 className="text-center text-3xl">Select your theme</h2>

                  <div className="flex items-center justify-between p-6  rounded-b">
                    <button
                      value="Cats"
                      className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        playGame("Cats");
                      }}
                    >
                      Cats
                    </button>
                    <button
                      value="Dogs"
                      className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        playGame("Dogs");
                      }}
                    >
                      Dogs
                    </button>
                    <button
                      value="Cars"
                      className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        playGame("Cars");
                      }}
                    >
                      Cars
                    </button>
                    <button
                      value="Fire"
                      className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        playGame("Fire");
                      }}
                    >
                      Fire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-alt-800"></div>
        </>
      ) : null}
    </>
  );
}
