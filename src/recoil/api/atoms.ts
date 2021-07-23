import {atom} from "recoil";
import {NSFW_CATEGORIES, SFW_CATEGORIES} from "./constants";
import {localStorageEffect} from "./effects";

export interface WaifuPicture {
  url: string
}

export type FilterOptionsType = { type: "sfw", category: SFW_CATEGORIES }
  | { type: 'nsfw', category: NSFW_CATEGORIES }


export const filterOptions = atom<FilterOptionsType>({
  key: 'filterOptions',
  default: {type: "sfw", category: "waifu"},
  effects_UNSTABLE: [
    localStorageEffect('filter_options')
  ]
})


export const requestRefresh = atom<number>({
  key: 'requestRefresh',
  default: 0
})
