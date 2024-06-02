const DisplayBox = (props) => {
  const { displayValue = "0.0", isprank } = props;
  return (
    <>
      <div className={`display-box ${isprank ? "prank" : ""}`}>
        {displayValue || "0.0"}
      </div>
    </>
  );
};

export default DisplayBox;
