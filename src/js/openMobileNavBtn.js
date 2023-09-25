function openMobileNavBtn() {
  const openMobileNavBtn = document.getElementById("openMobileNavBtn");
  const sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");

  if (openMobileNavBtn.click) {
    sidebar.style.display = "block";
    overlay.style.filter = "blur(20px)";

  }
}

export default openMobileNavBtn;
