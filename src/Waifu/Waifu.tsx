import React from 'react';
import {WaifuPicture} from "./WaifuPicture";
import {FilterOptions} from "./FilterOptions";

function Waifu() {
  return (
    <>
      <FilterOptions/>
      <React.Suspense fallback={<div>Loading...</div>}>
        <WaifuPicture/>
      </React.Suspense>
    </>
  )
}

export default function WaifuContainer() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
      <div>Your waifu</div>
      <Waifu/>
    </div>
  );
}

