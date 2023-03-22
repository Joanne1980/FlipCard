import React, { useState } from "react";
import Confetti from "./Confetti";

export default function Instructions({ playGame }) {
  // Modal open/close
  const [showModal, setShowModal] = useState(true);
  // User input theme search
  const [input, setInput] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  <button onClick={() => setIsVisible(true)}>Fire</button>;
  {
    isVisible && <Confetti />;
  }

  return (
    <>
      {showModal ? (
        <>
          {/*Modal Wrapper*/}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl flex justify-center items-center">
              {/*Content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-alt-900 outline-none focus:outline-none flex ">
                {/*Title*/}
                <div className="flex flex-col justify-center p-5 bg-alt-200 border-b border-solid border-alt-400 rounded-t w-full ">
                  <h3 className="text-3xl font-bold text-center uppercase text-alt-800 pt-2">
                    How to Play
                  </h3>
                </div>
                {/*Instructions*/}
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
                {/*Theme selection*/}
                <div className="flex flex-col justify-center border-t border-solid border-alt-400 pt-6 bg-alt-900 text-alt-300">
                  <h2 className="text-center text-3xl">Select your theme</h2>

                  <div className="flex items-center justify-between p-6  rounded-b">
                    <button
                      value="Cats"
                      className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full mx-2 mb-1 ease-linear transition-all duration-150"
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
                      className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full mx-2 mb-1 ease-linear transition-all duration-150"
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
                      className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full mx-2 mb-1 ease-linear transition-all duration-150"
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
                      className="bg-secondary-600 text-secondary-100 active:bg-secondary-400  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full mx-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        playGame("Fire");
                      }}
                    >
                      Fire
                    </button>
                  </div>
                  {/*User input theme selection*/}
                  <div className="flex flex-col justify-center bg-alt-900 text-alt-300 mx-2">
                    <h2 className="text-center text-3xl">
                      Or search your own Theme
                    </h2>

                    <div className="flex items-center justify-between pt-2 pb-8 px-5 rounded-b">
                      <input
                        className="text-alt-800 w-full m-1 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="text"
                        name="search theme"
                        placeholder="Search for your own theme"
                        value={input}
                        onChange={(e) => {
                          setInput(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          setShowModal(false);
                          playGame(input);
                        }}
                        className=" w-1/4 ml-3 bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      >
                        Set Theme
                      </button>
                      <button onClick={() => setIsVisible(true)}>Fire</button>
                      {isVisible && <Confetti />}
                    </div>
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
