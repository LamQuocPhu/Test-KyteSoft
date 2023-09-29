function openOptionBtn() {
  var more = document.getElementById("option-wrapper");
  var btnText = document.getElementById("myBtn");
  const closebtn = document.getElementById("closebtn");
  const openbtn = document.getElementById("openbtn");

  more.style.transform = "translate(0,0)";
  btnText.style.transform = "translate(-351px,0)";
  openbtn.style.display = "none";
  closebtn.style.display = "block";


  // if (btnText.style.display === "block") {
  //   closebtn.style.display = "none";
  // }
  // else {
  //   closebtn.style.display = "block";
  // }
  // if (more.style.display === "none") {
  //   more.style.display = "inline";
  //   btnText.style.position = "fixed";
  //   btnText.style.top = "150px";
  //   btnText.style.right = "350px";
  // }
  // else  {
  //   more.style.display = "none";
  //   btnText.style.display = "inline";
  //   btnText.style.zIndex = "9999";
  //   btnText.style.position = "fixed";
  //   btnText.style.top = "150px";
  //   btnText.style.right = "0px";
  // }

}
export default openOptionBtn;
