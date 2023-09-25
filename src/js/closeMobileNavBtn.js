function closeMobileNavBtn() {
  const closeMobileNavBtn = document.getElementById("closeMobileNavBtn");
  const sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");


  if (closeMobileNavBtn.click) {
    sidebar.style.display = "none";
    overlay.style.filter = "blur(0)";
  }
}

export default closeMobileNavBtn;
