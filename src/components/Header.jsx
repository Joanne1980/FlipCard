import React, { useState } from "react";
import Instructions from "./Instructions";
import Stats from "./Stats";
import axios from "axios";

export default function Header() {
  return (
    <>   
      <nav className="px-2 sm:px-4 py-2.5 rounded bg-primary-600 h-13">
        <h2 class="font-{300} 1.150rem">Flip Card</h2>
        <div class="flex start">
          <img alt="game logo" src="././design1.png" />
        </div>
        <ul class="flex justify-end">
          <li class="mr-3">
            {/* <a
              class="bg-primary-500 text-primary-200 active:bg-primary-400 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" id="language"
            >
              <img alt="Language icon" src="././Lan-icon.png" />
            </a> */}
          </li>
          <Stats />
        </ul>
      </nav>
    </>
  );  
  // const options = {
  //   method: 'GET',
  //   url: 'https://text-translator2.p.rapidapi.com/getLanguages',
  //   headers: {
  //     'X-RapidAPI-Key': '6ad8abfd77mshf2eeda7dbb2a73ep178573jsne1cbeaa1df4e',
  //     'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
 
  }


  
