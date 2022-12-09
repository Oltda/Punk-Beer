import { atom } from "recoil";

export const paramsState = atom({
    key: "paramsState",
    default: { paramKey: null, paramVal: null },
});