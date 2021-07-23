import {AtomEffect, DefaultValue} from "recoil";

export function localStorageEffect<T>(key: string) {
  const _Effect: AtomEffect<T> = ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet(newValue => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
  return _Effect
}
