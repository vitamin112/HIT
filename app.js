var header = document.querySelector("header .container");

var menuBtn = document.querySelector("header .menu-btn");


window.onscroll = () => headerHandler();
function headerHandler() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");

    }
}
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    let menuBtnChild = document.querySelectorAll("header .container ul a");

    menuBtnChild.forEach((child) => {
        child.onclick = () => {
            menuBtn.classList.toggle("active");
        }
    });
})
