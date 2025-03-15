var cursor = document.querySelector("#cursor")
var blurr = document.querySelector("#cursor-blur")
window.addEventListener("mousemove",function
    (dets) {
    cursor.style.left = dets.x + 30 + "px";
    cursor.style.top = dets.y + "px";
    blurr.style.left = dets.x - 150 + "px";
    blurr.style.top = dets.y - 150 + "px";
})

var h4all = document.querySelectorAll("#nav a")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "7vw",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    scale: 0,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "about-us",
        scroller: "body",
        //markers: true,
        start: "top 70%",
        end: "bottom 65%",
        scrub: 1,

    }
})

gsap.from(".card", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "bottom 65%",
        scrub: 1,
    }
})


gsap.from("#colon1", {
    y: -70,
    x: -70,

    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 65%",
        scrub: 4,
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 65%",
        scrub: 4,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 65%",
        scrub: 2,
}
})

var fall = document.querySelectorAll("#footer-part a")
fall.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    ele.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})

// Select the arrow and page elements
const scrollArrow = document.querySelector("#arrow ");
const page2 = document.querySelector("#page2");

// When the arrow is clicked, smoothly scroll to Page 2 using GSAP
scrollArrow.addEventListener("click", function () {
    console.log("hello")
    gsap.to(window,{
        duration: 1,          // Duration of the scroll animation (1 second)
        scrollTo: page2,      // Target element (Page 2)
        ease: "power2.out",   // Easing function to make the scroll smooth
    });
});


function slider(){
   
let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Move to the next or previous slide
  currentIndex += step;

  // Loop back to the beginning if we reach the end
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Update the slider's position
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Automatic slide change every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 7000);
}

var btn=document.querySelector(".cafe-text button")
btn.addEventListener("mouseenter",function(){
    gsap.to(btn,{
        color:"#000",
        backgroundColor:"#95C11E",
       
        duration:0.5,

    })
})
btn.addEventListener("mouseleave",function(){
    gsap.to(btn,{
        color:"#fff",
        backgroundColor:"#000",
        duration:0.5,

    })
})
slider()