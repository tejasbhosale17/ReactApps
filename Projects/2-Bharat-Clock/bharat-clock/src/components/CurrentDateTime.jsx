function CurrentDateTime() {
  var curDate = new Date();
  var curTime =
    curDate.getDate() +
    "/" +
    (curDate.getMonth() + 1) +
    "/" +
    curDate.getFullYear() +
    " - " +
    curDate.getHours() +
    ":" +
    curDate.getMinutes() +
    ":" +
    curDate.getSeconds();

  return (
    <div className="conatiner-dt">
      This is the current Date and Time: {curTime}
    </div>
  );
}
export default CurrentDateTime;
