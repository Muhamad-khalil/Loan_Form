import "./formStyle.css";

const Model = ({ isVisible, errorMessage = null }) => {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1>The Has been Submitted Successfully</h1> */}
          <h1 style={{color: errorMessage ? "red" : "green"}}>
            {errorMessage != null
              ? errorMessage
              : "The Has been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Model;
