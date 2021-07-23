import React from "react";
import {useRecoilValue} from "recoil";
import {waifuPicture} from "../recoil/api/selectors";
import {useRefreshPicture} from "../recoil/api/hooks";

interface WaifuPictureProps {
}

export function WaifuPicture(props: WaifuPictureProps) {
  const pic = useRecoilValue(waifuPicture)
  const refresh = useRefreshPicture()
  const onClickHandler = () => {
    refresh()
  }
  return (
    <>
      <div>
        <React.Suspense fallback={<div>Loading</div>}>
          <img onClick={onClickHandler}
               style={{height: '80vh', cursor: "pointer"}}
               src={pic.url}
               alt=" "/>
        </React.Suspense>
      </div>
    </>
  )
}
