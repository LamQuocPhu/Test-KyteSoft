function openMobileNavBtn() {
  const openMobileNavBtn = document.getElementById("openMobileNavBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const close = document.getElementById("closemobile");

  if (openMobileNavBtn.click) {
    sidebar.style.display = "block";
    overlay.style.filter = "blur(20px)";
    close.style.zIndex = "99";
  }
}

export default openMobileNavBtn;
