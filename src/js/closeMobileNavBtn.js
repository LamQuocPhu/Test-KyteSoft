function closeMobileNavBtn() {
  const closeMobileNavBtn = document.getElementById("closeMobileNavBtn");
  const sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");
  const close = document.getElementById("closemobile");



  if (closeMobileNavBtn.click) {
    sidebar.style.display = "none";
    overlay.style.filter = "blur(0)";
    close.style.zIndex = "-1";
  }
}

export default closeMobileNavBtn;
