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
    const clientId = "my_test_app"


    var search_url = "https://tenor.googleapis.com/v2/search?q=" + query + "&key=" +
      clientKey + "&client_key=" + clientId + "&limit=10&media_filter=gif&ar_range=wide";

    axios.get(search_url).then((response) => {
      const images = response.data.results;
      const randomImages = images.sort(() => Math.random() - 0.5);
      const image = randomImages[0].media_formats.gif.url;
      setImage(image)
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
            />
          </div>
          <div className="relative px-10 py-6 flex-auto my-4 text-primary-100 text-lg font-semi-bold leading-relaxed">
            <p>
              Your time was: {Math.floor(highScore / 60)}min{" "}
              {Math.floor(highScore % 60)}sec
            </p>
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
        className="bg-primary-900 text-primary-200 active:bg-primary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-primary-800 outline-none focus:outline-none flex ">
                {/*header*/}
                <div className="flex p-5 bg-primary-600 border-b border-solid border-primary-400 rounded-t w-full text-center ">
                  <h3 className="text-3xl font-bold uppercase text-primary-100 ">
                    Stats
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-primary-300 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowHighScores(false)}
                  >
                    <span className="bg-transparent text-primary-400 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {/* Show players current score*/}
                {getCurrentScore()}
                <div>
                  {/* <h3 className="px-5">High Scores</h3> */}
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Theme
                        </th>
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Date
                        </th>
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>{getHighScores()}</tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-primary-400 rounded-b">
                  <button
                    className="text-secondary-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowHighScores(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-secondary-600 text-secondary-100 active:bg-secondary-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
