import React from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {filterOptions} from "../recoil/api/atoms";
import {CATEGORIES, CATEGORY_TYPES} from "../recoil/api/constants";

interface FilterOptionsProps {
}

export function FilterOptions(props: FilterOptionsProps) {
  const fOpts = useRecoilValue(filterOptions)
  const setFilterOpts = useSetRecoilState(filterOptions)
  function onSelectType (type: CATEGORY_TYPES) {
    const newFilterOpts = {type, category: CATEGORIES[type][0]}
    setFilterOpts(newFilterOpts)
  }
  return (
    <>
      <div>
        <select value={fOpts.type} onChange={e => onSelectType(e.target.value as CATEGORY_TYPES)}>
          <option value={'sfw'}>sfw</option>
          <option value={'nsfw'}>nsfw</option>
        </select>
        <select value={fOpts.category} onChange={e => setFilterOpts({
          ...fOpts, category: e.target.value as any
        })}>
          {CATEGORIES[fOpts.type].map(c => <option value={c}>{c}</option>)}
        </select>
      </div>
    </>
  )
}
