function closeOptionBtn() {
  var more = document.getElementById("option-wrapper");
  var btnText = document.getElementById("myBtn");
  const closebtn = document.getElementById("closebtn");
  const openbtn = document.getElementById("openbtn");

  more.style.transform = "translate(351px, 0)";
  btnText.style.transform = "translate(0,0)";
  closebtn.style.display = "none";
  openbtn.style.display = "block";
}
export default closeOptionBtn;
