$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});


// Theme

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/IMG/moon.png";
  }
  else {
    icon.src = "/IMG/sun.png";
  }
}

// slider 1
const slides0 = document.querySelectorAll(".slide0");

counter0 = 0;

slides0.forEach((slide, index) => {
  slide.style.left = `${index * 56}%`;
}
)

const slideImage0 = () => {
  slides0.forEach((slide) => {
    slide.style.transform = `translateX(-${counter0 * 100}%)`;
  })
};

setInterval(() => {
  slideImage0();
  counter0++;
  for (var i = 0; i <= 4; i++) {
    setTimeout(() => {
      slideImage0();
    }, 1000);
    if (counter0 == 4) {
      counter0 = 0;
    }
  }
}, 3200)


//  slider 2
const slides = document.querySelectorAll(".slide");

counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 56}%`;
}
)

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  })
};

setInterval(() => {
  slideImage();
  counter++;
  for (var i = 0; i <= 4; i++) {
    setTimeout(() => {
      slideImage1();
    }, 2000);
    if (counter == 4) {
      counter = 0;
    }
  }
}, 3000)

//  slider 3
const slides1 = document.querySelectorAll(".slide1");

counter1 = 0;

slides1.forEach((slide, index) => {
  slide.style.left = `${index * 56}%`;
}
)

const slideImage1 = () => {
  slides1.forEach((slide) => {
    slide.style.transform = `translateX(-${counter1 * 100}%)`;
  })
};

setInterval(() => {
  slideImage1();
  counter1++;
  for (var i = 0; i <= 3; i++) {
    setTimeout(() => {
      slideImage1();
    }, 1000);

    if (counter1 == 3) {
      counter1 = 0;
    }
  }

}, 2900)
