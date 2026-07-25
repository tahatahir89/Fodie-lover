let crsr =document.querySelector(".cursor")
let blur =document.querySelector(".cursor-blur")

// Only run the custom cursor effect on devices that actually have a mouse.
// On touch devices there's no cursor to follow, so skip this entirely.
let hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches

if(hasFinePointer){
  document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+ 30 +"px"
  crsr.style.top = dets.y+ 10+"px"

  blur.style.left = dets.x-200+"px"
  blur.style.top = dets.y-200+"px"
  })
}

var h4all = document.querySelectorAll("nav h4")

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
     elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #b4e922"
        crsr.style.backgroundColor = " #b4e922"
    })
})

function changeImage(imageUrl) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageUrl;
}

// Mobile hamburger menu toggle
let navToggle = document.getElementById("navToggle")
let navLinks = document.querySelector(".nav-links")

if(navToggle && navLinks){
  navToggle.addEventListener("click", function(){
    navToggle.classList.toggle("open")
    navLinks.classList.toggle("open")
    let isOpen = navLinks.classList.contains("open")
    navToggle.setAttribute("aria-expanded", isOpen)
  })

  // Close the menu after tapping a link, so it doesn't stay open
  // when the user navigates
  navLinks.querySelectorAll("h4").forEach(function(link){
    link.addEventListener("click", function(){
      navToggle.classList.remove("open")
      navLinks.classList.remove("open")
      navToggle.setAttribute("aria-expanded", "false")
    })
  })
}

gsap.to("nav",{
    backgroundColor:"black",
    duration:1,
    delay:0.5,
    height:100,
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        scrub:3,
        start:"top -30%",
        end:"top -75%",
    }
})

gsap.from("#img-1",{
    x:-250,
    y:-250,
    duration:2,
    scrollTrigger:{
        trigger:"#img-1",
        scroller:"body",
        scrub:3,
        start:"top 20%",
        end:"top 47%",
    }
})

gsap.from("#img-2",{
    x:150,
    y:150,
    duration:2,
    scrollTrigger:{
        trigger:"#img-1",
        scroller:"body",
        scrub:3,
        start:"top 40%",
        end:"top 10%",
    }
})

gsap.from(".page5 h1",{
    y:50,
    duration:0.5,
    scrollTrigger:{
        trigger:".page5 h1",
        scroller:"body",
        scrub:2,
        start:"top 75%",
        end:"top 70%",
    }
})

gsap.from(".elem h2",{
    scale:1.2,
    duration:0.2,
    scrollTrigger:{
        trigger:".elem h2",
        scroller:"body",
        scrub:0,
        start:"top 90%",
        end:"top 65%",
    }
})