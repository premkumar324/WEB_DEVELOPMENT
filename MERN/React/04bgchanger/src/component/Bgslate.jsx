import React, { useState } from "react";

function Bgslate() {
  let [bgcolor, setbgcolor] = useState("bg-red-500")
  function changebg(color) {
    setbgcolor(color)
    console.log(color)
  }
  return (
    <>
      <div className={`flex align-middle justify-center  w-full h-screen ${bgcolor}`} >
        <div className="bg-white border-2 relative top-3/4 flex h-min justify-evenly border-black text-black p-4 text-2xl">
          <button onClick={() => { changebg("bg-red-500") }} className="bg-red-500 rounded-lg h-10 content-center w-24 border-2 hover:scale-110 transition-all ease-in  border-black">Red</button>
          <button onClick={() => { changebg("bg-blue-500") }} className="bg-blue-500  rounded-lg h-10 content-center w-24 border-2 hover:scale-110 transition-all ease-in  border-black">Blue</button>
          <button onClick={() => { changebg("bg-green-500") }} className="bg-green-500 rounded-lg h-10 content-center w-24 border-2 hover:scale-110 transition-all ease-in  border-black">Green</button>
          <button onClick={() => { changebg("bg-yellow-500") }} className="bg-yellow-500 rounded-lg h-10 content-center w-24 border-2 hover:scale-110 transition-all ease-in  border-black">Yellow</button>
          <button onClick={() => { changebg("bg-pink-500") }} className="bg-pink-500 rounded-lg h-10 content-center w-24 border-2 hover:scale-110 transition-all ease-in  border-black">Pink</button>
          <button onClick={() => { changebg("bg-orange-500") }} className="bg-orange-500 rounded-lg h-10 content-center w-24 border-2 hover:scale-110 transition-all ease-in  border-black">Orange</button>
        </div>
      </div>
    </>
  );
}

export default Bgslate;
