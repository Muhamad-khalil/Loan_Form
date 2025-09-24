import Modal from "./Modal";
import "./formStyle.css";
import { useContext, useState } from "react";
import MyComponent from "./MyComponent";
import { LoneInputContext } from "./context/loneFormInputContext";
import { UserContext } from "./context/userContext";
export default function LoneForm() {
  const userData = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    PhoneNumber: "",
    ago: "",
    checkedEmp: false,
    salaryRange: "",
  });
  function handelFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);

    const { ago, PhoneNumber } = loanInputs;

    if (ago < 18 || ago > 100) {
      setErrorMessage("The age is not allowed");
    } else if (PhoneNumber.length < 10 || PhoneNumber.length > 12) {
      setErrorMessage("Phone Number Format Is Incorrect");
    }

    setShowModal(true);
  }

  const btnIsDisable =
    loanInputs.name == "" ||
    loanInputs.PhoneNumber == "" ||
    loanInputs.ago == "";

  function handelDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  function HandelNameChangeInput(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }
  function HandelPhoneNumberChangeInput(value) {
    setLoanInputs({ ...loanInputs, PhoneNumber: value });
  }
  function HandelAgoChangeInput(value) {
    setLoanInputs({ ...loanInputs, ago: value });
  }
  return (
    <div
      onClick={handelDivClick}
      className="flex"
      style={{
        flexDirection: "column",
        marginTop: "250px",
      }}
    >
      <h1 style={{ color: "white" }}>Hello {userData.Name}</h1>
      <form id="loan-form" style={{ flexDirection: "column" }}>
        <h1>requesting A Lone </h1>
        <hr />

        <LoneInputContext.Provider
          value={{
            value: loanInputs.name,
            handelChange: HandelNameChangeInput,
            labelTitle: "Name :",
          }}
        >
          <MyComponent />
        </LoneInputContext.Provider>

        <LoneInputContext.Provider
          value={{
            value: loanInputs.PhoneNumber,
            labelTitle: "Phone Number :",
            handelChange: HandelPhoneNumberChangeInput,
          }}
        >
          <MyComponent />
        </LoneInputContext.Provider>

        <LoneInputContext.Provider
          value={{
            value: loanInputs.ago,
            labelTitle: "Ago :",
            handelChange: HandelAgoChangeInput,
          }}
        >
          <MyComponent />
        </LoneInputContext.Provider>

        {/* <MyComponent
          nameInput="Ago: "
          valueComponent={loanInputs.ago}
          handleChangeComponent={HandelAgoChangeInput}
        /> */}

        <div style={{ marginTop: "30px" }}>
          <label htmlFor="">are you an employee?:</label>
          <input
            type="checkbox"
            checked={loanInputs.checkedEmp}
            onChange={(e) => {
              setLoanInputs({ ...loanInputs, checkedEmp: e.target.checked });
            }}
          />
        </div>

        <label htmlFor="">salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(e) => {
            setLoanInputs({ ...loanInputs, salaryRange: e.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000</option>
          <option>above 2000</option>
        </select>

        <button
          className={btnIsDisable ? "disabled" : ""}
          disabled={btnIsDisable}
          onClick={handelFormSubmit}
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
