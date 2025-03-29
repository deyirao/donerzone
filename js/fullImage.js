var fullImageContent = document.getElementById("fullImageContent");
var fullImage = document.getElementById("fullImage");

function openFullImg(imagePath) {
    fullImageContent.style.display = "flex";
    fullImage.src = imagePath;
}

function closeFullImg() {
    fullImageContent.style.display = "none";
}