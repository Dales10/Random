document.querySelector("#reset").addEventListener("click", () => {
    document.querySelector("#nome").value = "";
    document.querySelector("#senha").value = "";
    document.querySelector("#idade").value = "";
});

document.querySelector("#returnTop").addEventListener("click", () => {
    window.scrollTo(0, 0);
    returnTop.style.display = "none";
})

window.addEventListener("wheel", () => {
    var scrollY = window.scrollY;
    var returnTop = document.querySelector("#returnTop");
    if (scrollY > 500) {
        returnTop.style.display = "block";
    } else {
        returnTop.style.display = "none";
    };
});

setInterval(() => {
    var getScrollProgress = window.scrollY/ (document.body.scrollHeight - window.innerHeight) * 100;
    document.querySelector(".progress-bar").style.width = `${getScrollProgress}%`;
}, 100)