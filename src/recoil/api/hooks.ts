import {useSetRecoilState} from "recoil";
import {requestRefresh} from "./atoms";

export function useRefreshPicture() {
  const setRefreshPicture = useSetRecoilState(requestRefresh);
  return () => {
    setRefreshPicture(requestID => requestID + 1);
  };
}
