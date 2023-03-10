import { atom } from "recoil";

export const discIdAtom = atom({
  key: "discId",
  default: 100,
});

export const searchIdAtom = atom({
  key: "searchId",
  default: 0,
});

export const bgColorAtom = atom({
  key: "bgColor",
  default: "#FAF7F0",
});

export const compBgColorAtom = atom({
  key: "compBgColorAtom",
  default: "#404258",
});

export const fontColorAtom = atom({
  key: "fontColor",
  default: "#e5e5cb",
});

export const btnColorAtom = atom({
  key: "btnColor",
  default: "#6B728E",
});
