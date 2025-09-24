import { createContext } from "react";

export let LoneInputContext = createContext({
  labelTitle: "",
  handelChange: null,
  inputValue: null,
});
