import { useContext } from "react";
import { LoneInputContext } from "./context/loneFormInputContext";
import { UserContext } from "./context/userContext";

const MyInputs = () => {
  let UserData = useContext(UserContext);
  let inputContext = useContext(LoneInputContext);
  return (
    <div>
      <label>
        {UserData.Name} {inputContext.labelTitle}
      </label>
      <input
        value={inputContext.inputValue}
        onChange={(e) => {
          inputContext.handelChange(e.target.value);
        }}
      />
    </div>
  );
};

export default MyInputs;
