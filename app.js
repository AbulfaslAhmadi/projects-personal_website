document.addEventListener("scroll", () => {
    let scroll = window.scrollY
    leftScroll = scroll / -1.4
    rightScroll = scroll / 1.5

    let SecOneLeft = document.querySelectorAll(".sec-one-left");
    let SecOneRight = document.querySelectorAll(".sec-one-right");

    for(i=0; i<SecOneRight.length; i++) {
       if(scroll < 500) {
        SecOneRight[i].style.transform = `translate(${rightScroll}px)`
        SecOneLeft[i].style.transform = `translate(${leftScroll}px)`
       }
    }

    let upBTN = document.querySelector(".go-up-btn");

    if(scroll > 400) {
        upBTN.classList.add("go-up-btn-active")
    } else {
        upBTN.classList.remove("go-up-btn-active")
    }
})


function goUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}