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
            
          </li>
          <Stats />
        </ul>
      </nav>
    </>
  );  
 
  }


  
