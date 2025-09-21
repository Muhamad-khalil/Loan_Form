const MyComponent = ({ value, handleChange, nameInput }) => {
  return (
    <>
      <label htmlFor="">{nameInput}</label>
      <input
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </>
  );
};

export default MyComponent;
