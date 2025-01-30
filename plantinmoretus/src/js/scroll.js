import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const timelineEvents = document.querySelectorAll(".timeline__event");
const timelineLine = document.querySelector(".timeline__line");

gsap.set(timelineLine, { height: "0%" });
gsap.to(timelineLine, {
  height: "100%", 
  ease: "none",
  duration: 1,
  scrollTrigger: {
    trigger: ".timeline__container",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});





timelineEvents.forEach((event, index) => {

  gsap.set(event, { opacity: 0, y: 40 });

  gsap.to(event, {
    opacity: 1,
    y: 0, 
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: event,
      start: `top 70%`,
      end: `top 30%`,
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });
});



const printScroll = document.querySelector(".print__scroll");
const images = gsap.utils.toArray(".print__scroll img");


gsap.to(images, {
  xPercent: -100 * (images.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".print",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: ".print__container", 
    anticipatePin: 1,
  },
});

const steps = [
  {
    text: "Printing in the 16th century was a meticulous and labor-intensive process. Plantin’s workshop relied on movable type, where each letter was arranged by hand to create pages.",
    lottiePath: "./src/json/Step1.json", 
  },
  {
    text: "Ink was carefully applied to the type using a leather ball, ensuring even distribution before the press was operated.",
    lottiePath: "./src/json/Step2.json", 
  },
  {
    text: "Once printed, pages were hung up to dry before being assembled into books and distributed across Europe.",
    lottiePath: "./src/json/Step3.json",
  }
];

const stepText = document.querySelector(".letter__text");
const stepImage = document.querySelector(".letter__animation img");
const stepTitle = document.querySelector(".letter__step");
let animation = null; 


const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".letter",
      start: "top top", 
      end: "+=3000",
      scrub: 1,
      pin: ".letter__container", 
      anticipatePin: 1,
    }
  });


steps.forEach((step, index) => {
  tl.to(stepText, { opacity: 0, duration: 2 })
    .to(stepImage, { opacity: 0, duration: 2 }, "<")
    .set(stepText, { textContent: step.text })
    .set(stepTitle, { textContent: `Step ${index + 1}` })
    .set(stepImage, { attr: { src: step.img } })
    .to([stepText, stepImage], { opacity: 1, duration: 0.5 })
    .call(() => {
      
      if (animation) {
        animation.destroy(); 
      }

   
      const animationContainer = document.querySelector('.letter__animation');
      if (animationContainer) {
        animation = lottie.loadAnimation({
          container: animationContainer, 
          renderer: 'svg', 
          loop: true, 
          autoplay: true,
          path: step.lottiePath
        });
      }
    });
});



const polygotContainer = document.querySelector(".polygot__container");
const polygotCards = gsap.utils.toArray(".polygot__card");


const totalWidth = polygotContainer.scrollWidth - window.innerWidth;

gsap.to(polygotContainer, {
  x: -totalWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".polygot",
    start: "top top",
    end: `+=${totalWidth}`,
    scrub: 2,
    pin: true,
    anticipatePin: 1,
  },
});



gsap.to(".info__title", {
    scrollTrigger: {
      trigger: ".info__title",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
    },
    color: "#EAC066",  
    duration: 1,
});

  
 
    function playAudio(key) {
        let audioFile;
        
 
        if (key === "l") {
          audioFile = document.getElementById("audio-latin");
        } else if (key === "h") {
          audioFile = document.getElementById("audio-hebrew");
        } else if (key === "g") {
          audioFile = document.getElementById("audio-greek");
        }
    
        if (audioFile) {
            if(! audioFile.paused){
                audioFile.pause();
                audioFile.currentTime = 0;
            }else{
          audioFile.currentTime = 0;  
          audioFile.play();
          
    
          setTimeout(function() {
if(audioFile.paused){

            audioFile.pause();
            audioFile.currentTime = 0; 
         }
        
         }, 25000); 
        }
      }
    } 
   
      document.addEventListener("keydown", function(event) {
        const key = event.key.toLowerCase();
     
        if (key === "l" || key === "h" || key === "g") {
          playAudio(key);
        }
      });


      const cards = document.querySelectorAll('.business__card');

      cards.forEach((card) => {
  
        gsap.fromTo(card.querySelector('.business__card--inner'), {
          rotationY: 0, 
        }, {
          rotationY: 180,  
          duration: 0.6,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,  
            start: "top 20%",  
            end: "bottom 80%",  
            scrub: true, 
            markers: false,
          }
        });
      });


      gsap.from(".descendents__image--img", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".descendents__image",
          start: "top 85%",
          end: "top 50%",
          scrub: true, 
        }
      });
      
 
      gsap.from(".descendents__circle", {
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".descendents__image",
          start: "top bottom",
          toggleActions: "play none none reset",
        }
      });
      
  
      const popup = document.querySelector(".descendents__popup");
      const content = document.querySelector(".descendents__popup--content");

      const closeBtn = document.createElement("button");
      closeBtn.textContent = "Close";
      closeBtn.classList.add("descendents__popup--btn");
      popup.appendChild(closeBtn);
      
    
      document.querySelectorAll(".descendents__circle").forEach(circle => {
        circle.addEventListener("click", function () {
          content.textContent = this.dataset.info; 
          popup.style.display = "block"; 
        });
      });
    
      function closePopup() {
        popup.style.display = "none";
      }
      
      document.querySelector(".descendents__popup--close").addEventListener("click", closePopup);
      closeBtn.addEventListener("click", closePopup);



gsap.from(".legacy__image--img", {
  scrollTrigger: {
    trigger: ".legacy",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
  opacity: 0,
  y: 50,
  scale: 0.8,
  duration: 1.2,
  ease: "power2.out"
});


gsap.from(".legacy__content", {
  scrollTrigger: {
    trigger: ".legacy",
    start: "top 85%",
    end: "top 50%",
    scrub: true,
  },
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "power2.out"
});


gsap.from(".legacy__btn", {
  scrollTrigger: {
    trigger: ".legacy__btn",
    start: "top 75%",
    toggleActions: "play none none none",
  },
  scale: 0.9,
  opacity: 0,
  duration: 0.8,
  ease: "elastic.out(1, 0.5)"
});

