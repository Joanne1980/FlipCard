import React, { useEffect, useState } from "react";
import Confetti from "./Confetti";
import axios from "axios";

export default function Stats({
  showHighScores,
  setShowHighScores,
  highScore,
}) {
  const [image, setImage] = useState("");

  useEffect(() => {
    const query = "congratulations";
    const clientKey = "AIzaSyBRnONZMSL4HwwyMm8w4yGEN9ywts8vH28";
    const clientId = "my_test_app";

    var search_url =
      "https://tenor.googleapis.com/v2/search?q=" +
      query +
      "&key=" +
      clientKey +
      "&client_key=" +
      clientId +
      "&limit=10&media_filter=gif&ar_range=wide";

    axios.get(search_url).then((response) => {
      const images = response.data.results;
      const randomImages = images.sort(() => Math.random() - 0.5);
      const image = randomImages[0].media_formats.gif.url;
      setImage(image);
    });
  }, []);

  const getCurrentScore = () => {
    if (highScore) {
      return (
        <>
          <div>
            <img
              src={image}
              alt="Congratulations - you win"
              className="max-h-60 w-full object-cover"
            />
          </div>
          <div className="bg-gray-800 relative px-10 py-5 flex flex-col items-center justify-around text-primary-100 text-lg font-semi-bold leading-relaxed">
            <p>Your time was: </p>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row items-center">
                <p className="text-5xl font-machinaBold text-secondary-600 mr-1 mt-2">
                  {Math.floor(highScore / 60)}
                </p>
                <span className="text-xl">min(s)</span>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-5xl font-machinaBold text-secondary-600 mr-1 mt-2">
                  {Math.floor(highScore % 60)}
                </p>
                <span className="text-xl">sec(s)</span>
              </div>
            </div>
          </div>
          <Confetti />
        </>
      );
    }
  };
  const getHighScores = () => {
    if (localStorage.getItem("scores") !== null) {
      const scores = JSON.parse(localStorage.getItem("scores"));

      return scores.map((score, i) => {
        if (i < 5) {
          return (
            <tr
              key={i}
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {score.theme}
              </td>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {score.date}
                {console.log(score.date)}
              </td>
              <td class="px-6 py-4">
                {Math.floor(score.score / 60)}min {Math.floor(score.score % 60)}
                sec
              </td>
            </tr>
          );
        }
        return <></>;
      });
    }
  };

  return (
    <>
      <button
        className="bg-gray-900 text-primary-200 active:bg-primary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowHighScores(true)}
      >
        Highscores
      </button>

      {showHighScores ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl flex justify-center items-center">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-alt-900 outline-none focus:outline-none flex ">
                {/*header*/}
                <div className="flex flex-col justify-center p-5 bg-alt-200 border-b border-solid border-alt-400 rounded-t w-full ">
                  <h3 className="text-3xl font-machinaBold text-center uppercase text-alt-800 pt-2">
                    Highscores
                  </h3>
                </div>
                {/*body*/}
                {/* Show players current score*/}
                {getCurrentScore()}
                <div>
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead>
                      <tr class="bg-white border-b dark:bg-slate-900 dark:border-gray-700">
                        <th className="px-6 text-lg pt-3 pb-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Theme
                        </th>
                        <th className="px-6 text-lg pt-3 pb-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Date
                        </th>
                        <th className="px-6 text-lg pt-3 pb-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>{getHighScores()}</tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="bg-gray-900 flex items-center justify-center p-6 border-t border-solid border-primary-400 rounded-b gap-3">
                  <button
                    className="w-3/4 bg-secondary-100 text-secondary-600 active:bg-secondary-200 font-bold text-xl uppercase px-6 pt-3 pb-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowHighScores(false)}
                  >
                    Close
                  </button>
                  <button
                    className="w-3/4 bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold text-xl uppercase px-6 pt-3 pb-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => window.location.reload(false)}
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
