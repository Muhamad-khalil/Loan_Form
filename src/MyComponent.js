import MyInputs from "./MyInputs";
const MyComponent = () => {
  return (
    <>
      <MyInputs />
    </>
  );
};
/* -------------------------------------------------------------------------- */
/*                                    main                                    */
/* -------------------------------------------------------------------------- */
export default MyComponent;

// import { useContext } from "react";
// import { LoneInputContext } from "./context/loneFormInputContext";
// const MyComponent = () => {
//   let inputContext = useContext(LoneInputContext);
//   return (
//     <div>
//       <label>{inputContext.labelTitle}</label>
//       <input
//         value={inputContext.inputValue}
//         onChange={(e) => {
//           inputContext.handelChange(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

// export default MyComponent;
