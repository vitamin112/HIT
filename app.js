var header = document.querySelector("header .container");

console.log(header);

window.onscroll = () => headerHandler();
function headerHandler() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.padding = "0";
    }
    else {
        header.style.padding = "20px 0";
    }
}
