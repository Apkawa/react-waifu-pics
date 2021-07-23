import {selector} from "recoil";
import {filterOptions, requestRefresh, WaifuPicture} from "./atoms";

const ENDPOINT = 'https://api.waifu.pics/'

export const waifuPicture = selector<WaifuPicture>({
  key: 'waifuPicture',
  get: async ({get}) => {
    get(requestRefresh)
    const {type, category} = get(filterOptions)
    const response = await fetch(`${ENDPOINT}/${type}/${category}`)
    const data = await response.json() as WaifuPicture
    return data
  }
})
