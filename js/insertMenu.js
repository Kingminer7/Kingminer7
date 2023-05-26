document.body.innerHTML =
  '       <div class="menubar" id="menubar">\n' +
  "            <ul>\n" +
  '                <li><a href="' + window.location.origin + '">Home</a></li>\n' +
  '                <li><a href="' + window.location.origin + '/projects">Projects</a></li>\n' +
  '                <li><a href="' + window.location.origin + '/about">About</a></li>\n' +
  "            </ul>\n" +
  "        </div>\n" +
  '        <div class="menu-toggle" id="menuToggle">\n' +
  '            <i class="fas fa-bars"></i>\n' +
  "        </div>\n" +
  document.body.innerHTML;

const menu = document.getElementById("menubar");
const toggleButton = document.getElementById("menuToggle");

toggleButton.addEventListener("click", function () {
  menu.classList.toggle("open");
  toggleButton.classList.toggle("open");
});
