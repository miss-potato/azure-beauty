function myFunction() {
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const productContainers = [...document.querySelectorAll('.new-arrivals')]

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
})
