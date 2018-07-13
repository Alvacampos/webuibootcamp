let sliderImages = document.querySelectorAll(".slide")
let arrowLeft = document.querySelector("#arrow-left")
let arrowRight = document.querySelector("#arrow-right")
let current = 0;

// Clear all images
reset=()=> {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
startSlide = () => {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
const slideLeft=()=> {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
const slideRight=()=> {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", () =>{
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();