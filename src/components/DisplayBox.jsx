const DisplayBox = (props) => {
  const { displayValue = "0.0" } = props;
  return (
    <>
      <div className="display-box">{displayValue || "0.0"}</div>
    </>
  );
};

export default DisplayBox;
