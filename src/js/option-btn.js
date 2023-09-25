function OptionBtn() {
  var more = document.getElementById("option-wrapper");
  var btnText = document.getElementById("myBtn");

  if (more.style.display === "none") {
    more.style.display = "inline";
    btnText.style.position = "fixed";
    btnText.style.top = "150px";
    btnText.style.right = "350px";
  }
  else  {
    more.style.display = "none";
    btnText.style.display = "inline";
    btnText.style.zIndex = "9999";
    btnText.style.position = "fixed";
    btnText.style.top = "150px";
    btnText.style.right = "0px";
  }

}
export default OptionBtn;
