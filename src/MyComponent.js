const MyComponent = ({ value, handleChange, InputName }) => {
  return (
    <>
      <label htmlFor="">{InputName}</label>
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
