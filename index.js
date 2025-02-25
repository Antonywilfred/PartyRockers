let menu = document.querySelector("#menubar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// Review Swiper
var swiper = new Swiper(".ReviewSlide", {
  slidesPerView: 1,
  grabCoror: true,
  loop: true,
  spaceBetween: 10,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnImteraction: false,
  },
});

function whatsapp(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var number=document.getElementById("number").value;
  var occasion=document.getElementById("occasion").value;
  var message=document.getElementById("message").value;

  var whatsappurl="https://wa.me/+96566181041?text="
  +"Name:"+name+"%0a"
  +"Email:"+email+"%0a"
  +"Number:"+number+"%0a"
  +"Occasion:"+occasion+"%0a"
  +"Message:"+message+"%0a"

  window.open(whatsappurl,"_blank").focus();
}
