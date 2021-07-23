import React, {MouseEventHandler} from "react";
import {useRecoilValue} from "recoil";
import {waifuPicture} from "../recoil/api/selectors";
import {useRefreshPicture} from "../recoil/api/hooks";

interface WaifuPictureProps {
}

export function WaifuPicture(props: WaifuPictureProps) {
  const pic = useRecoilValue(waifuPicture)
  const refresh = useRefreshPicture()
  const onClickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
    refresh()
    e.stopPropagation();
  }
  return (
    <>
      <div>
        <React.Suspense fallback={<div>Loading</div>}>
          <a onClick={onClickHandler} href="#">
            <img style={{height: '80vh'}} src={pic.url}></img>
          </a>
        </React.Suspense>
      </div>
    </>
  )
}
