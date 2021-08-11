var imageSources = ["yu-bg.jpg", "yu-bg1.jpg"]
    var index = 0;
    setInterval (myFunction, 1000);
function myFunction() {
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("mainpicture").src = imageSources[index];
    index++;
}
