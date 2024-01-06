import { atom } from "recoil";
export const fontColorState = atom<string>({
    key: "fontColorState",
    default: "white",
})