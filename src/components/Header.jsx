import React, { useState } from "react";
import Instructions from "./Instructions";
      

export default function Header() {
  return <>
  <nav className="bg-white border-gray-100 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-300 h-15">
  <h2 class="font-{300} 1.150rem">
  Flip Card
  </h2>
<ul class="flex justify-end">
  <li class="mr-3">
    <a class="inline-block border border-blue-900 rounded hover:border-gray-500 text-blue-900 hover:bg-gray-200 py-1 px-3" href="Stats">Stats</a>
  </li>
  <li class="mr-3">
    <a class="inline-block border border-blue-900 rounded hover:border-gray-500 text-blue-900 hover:bg-gray-200 py-1 px-3" href="Instructions">?</a>
  </li>
</ul>
  </nav>
</>
  
}
