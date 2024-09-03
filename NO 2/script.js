


function navigateToFile() {
    var selectBox = document.getElementById("pageSelect");
    var pilihFile = selectBox.options[selectBox.selectedIndex].value;
    if (pilihFile) {
        window.location.href = pilihFile;
    }
}


var modal = document.getElementById("modal");
var btn = document.getElementById("myBtn");


btn.onclick = function() {
    if (modal.style.display == "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}