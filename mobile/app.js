document.addEventListener("scroll", () => {
    const scroll = window.scrollY;


    const secOneHeroH1 = document.querySelectorAll(".sec-one-hero-h1");
    const SecOneBox = document.querySelectorAll(".sec-one-intoduction-box")

    const secOneBoxOne = document.querySelector(".sec-one-intoduction-box-one");
    const secOneBoxTwo = document.querySelector(".sec-one-intoduction-box-two");
    const secOneBoxThree = document.querySelector(".sec-one-intoduction-box-three");
    const secOneBoxFour = document.querySelector(".sec-one-intoduction-box-four");  

    if(scroll < 500) {
        for(i=0; i<secOneHeroH1.length; i++) {
            secOneHeroH1[i].style.opacity = `${1 - (scroll/400)}`;
            SecOneBox[i].style.opacity = `${1 - (scroll/400)}`;
        }

        secOneBoxOne.style.transform = `translateY(${scroll / -1.4}px) translateX(${scroll / -1.4}px) rotate(${(scroll / -10) + 5}deg)`;
        secOneBoxTwo.style.transform = `translateY(${scroll / -3}px) translateX(${scroll / 1.4}px) rotate(${(scroll / -3) + 20}deg)`;
        secOneBoxThree.style.transform = `translateY(${scroll / -2}px) translateX(${scroll / 3}px) rotate(${3 * (scroll / 30) + 10}deg)`;
        secOneBoxFour.style.transform = `translateY(${scroll / -4}px) translateX(${ -3* scroll / 3}px) rotate(${-3 * (scroll / 30) - 30}deg)`;
    }


    const SecOneAll = document.querySelectorAll(".sec-one-hero-h1");

    for(i=0; i < SecOneAll.length; i++) {

        if(scroll < 500) {
            SecOneAll[i].style.opacity = 1 - (scroll/400);
        }
    }


    /* go up btn */

    const upBTN = document.querySelector(".go-up-btn");

    if(scroll > 400) {
        upBTN.classList.add("go-up-btn-active");
    } else {
        upBTN.classList.remove("go-up-btn-active");
    }


    /* comments on sec 3 */

    const commentOne = document.querySelector(".sec-three-comment-one");
    const commentTwo = document.querySelector(".sec-three-comment-two");

    const commentsScroll = (scroll - 1200) / 1.4;

    if(commentsScroll > -500 && commentsScroll < 400) {
        commentOne.style.transform = `translate(${commentsScroll}px) rotate(${-20 + (commentsScroll / 4)}deg)`;
        commentTwo.style.transform = `translate(${-commentsScroll}px) rotate(${10 + (commentsScroll / 4)}deg)`;
    }
})


/* waiting to be called by goUpBTN */
function goUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/* checking width and redirecting */
window.addEventListener("resize", () => {
    if(window.screen.width > 750) {
        document.location = "/index.html";
    }
})
