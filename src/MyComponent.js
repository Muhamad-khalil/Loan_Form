import MyInputs from "./MyInputs";
const MyComponent = ({ valueComponent, handleChangeComponent, nameInput }) => {
  return (
    <>
      <h1>My header</h1>
      <MyInputs
        nameInput={nameInput}
        value={valueComponent}
        handleChange={handleChangeComponent}
      />
      <h1>My header</h1>
    </>
  );
};
/* -------------------------------------------------------------------------- */
/*                                    main                                    */
/* -------------------------------------------------------------------------- */
export default MyComponent;
