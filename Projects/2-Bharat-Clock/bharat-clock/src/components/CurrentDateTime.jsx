function CurrentDateTime() {
  var curDate = new Date();
  return (
    <div className="conatiner-dt">
      This is the current Date and Time: {curDate.toLocaleDateString()} -{" "}
      {curDate.toLocaleTimeString()}
    </div>
  );
}
export default CurrentDateTime;
