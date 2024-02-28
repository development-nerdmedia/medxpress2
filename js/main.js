var swiper = new Swiper(".sliderHome", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  simulateTouch: false,
  pagination: {
    el: "section.home .swiper-pagination",
    clickable: true,
  },
});

$('.clientes_marquee').marquee({
  duration: 20000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});


if (window.matchMedia("(min-width: 501px)").matches) {
} else {
  var contentImg = document.querySelectorAll("section.aboutServicios .container img");
  for (let i = 0; i < contentImg.length; i++) {
    contentImg[i].classList.add("mostrar");
  }
  var contentImg2 = document.querySelectorAll("section.aboutMision .container");
  for (let i = 0; i < contentImg2.length; i++) {
    contentImg2[i].classList.add("mostrar");
  }
  var contentImg3 = document.querySelectorAll("section.aboutServicios .container ");
  for (let i = 0; i < contentImg3.length; i++) {
    contentImg3[i].classList.add("mostrar");
  }
}


/******************************************* */

$(document).ready(function () {
  AOS.init();
  setTimeout(() => {

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function addClassToVisibleElements(elements, className) {
      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add(className);
        }
      });
    }


    const elementsImgs = document.querySelectorAll("section.aboutServicios .container");
    const elementsImgsMovil = document.querySelectorAll("section.aboutServicios .container .part2 .title img");
    const elementsImgsMovil2 = document.querySelectorAll("section.aboutServicios .container");
    const elementsImgEmpresa = document.querySelectorAll("section.aboutMision .container");

    addClassToVisibleElements(elementsImgs, "mostrar");
    addClassToVisibleElements(elementsImgsMovil, "mostrar");
    addClassToVisibleElements(elementsImgsMovil2, "mostrar");
    addClassToVisibleElements(elementsImgEmpresa, "mostrar");

    window.addEventListener("scroll", function () {
      addClassToVisibleElements(elementsImgs, "mostrar");
      addClassToVisibleElements(elementsImgsMovil, "mostrar");
      addClassToVisibleElements(elementsImgEmpresa, "mostrar");
      addClassToVisibleElements(elementsImgsMovil2, "mostrar");
    })

  }, 100);
})

/******************************************* */



/******************************************* */

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
function isIOS2() {
  return /iPhone/i.test(navigator.userAgent);
}

function isTablet() {
  return /iPad/i.test(navigator.userAgent);
}

if (isAndroid()) {
  document.querySelector("body").classList.add("movil")
  document.querySelector("body").classList.add("and")
}
if (isIOS()) {
  document.querySelector("body").classList.add("movil")
}
if (isIOS2()) {
  document.querySelector("body").classList.add("cel")
}
if (isTablet()) {
  document.querySelector("body").classList.add("movil")
}



/******************************************* */


window.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  var headerClass = 'hLTFFw';
  var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  function handleScroll() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var isAtTop = currentScrollPos === 0;
    var isScrollingUp = prevScrollPos > currentScrollPos;

    if (isAtTop) {
      headerClass = 'hLTFFw';
    } else if (isScrollingUp) {
      headerClass = 'leoCdG';
    } else {
      headerClass = 'bVLcxx';
    }

    header.className = headerClass;
    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', handleScroll);
});


document.addEventListener("click", function (e) {
  if (e.target.closest("section.aboutServicios .btnPop") || e.target.closest("section.popUpContacto .close")) {
    document.querySelector("body").classList.toggle("scrollnone")
    document.querySelector(".popUpContacto").classList.toggle("open")
  }
})

MyApp = {
  validate: {
    init: function () {
      $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

      var formespacioinput = document.querySelectorAll('.form-input.required');

      function validateInput(e) {
        for (let y = 0; y < formespacioinput.length; y++) {
          if (!formespacioinput[y].value) {
            formespacioinput[y].closest('.form-group').classList.add("error");
            e.preventDefault();
          } else {
            formespacioinput[y].closest('.form-group').classList.remove("error");
          }
        }
      }


      function validateInputCorreo(e) {
        var inputCorreo = document.querySelector('input[type=mail]');
        var valueCorreo = inputCorreo.value;
        if (valueCorreo.includes("@") && valueCorreo.includes(".com")) {
          inputCorreo.closest('.form-group').classList.remove("error");
        } else {
          inputCorreo.closest('.form-group').classList.add("error");
          e.preventDefault();
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest("form button")) {
          validateInput(e)
          validateInputCorreo(e)
        }
        if (e.target.closest("form select")) {
          e.target.closest('.form-group').classList.toggle("active");
        }
        else {
          document.querySelector("form select").closest('.form-group').classList.remove("active")
        }
      })
    }
  },
  sliderEquipo: {
    init: function () {
      $('.sliderEquipo').slick({
        centerMode: true,
        slidesToShow: 4.35,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3.7,
            }
          },
          {
            breakpoint: 1281,
            settings: {
              slidesToShow: 3.65,
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2.3,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1.65,
            }
          }
          ,
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 0.999,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      });
      $('.sliderEquipo').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // Se ejecuta antes de cambiar de diapositiva
        document.querySelector(".sliderEquipo").classList.toggle("orden")

        // Aquí puedes realizar las acciones que desees cuando cambie la diapositiva
      });
      $('.prev-btn').click(function () {
        $('.sliderEquipo').slick('slickPrev');
      });

      $('.next-btn').click(function () {
        $('.sliderEquipo').slick('slickNext');
      });
    }
  },
  relacionadas: {
    init: function () {
      var swiperRelacion = new Swiper(".sliderRelacion", {
        slidesPerView: 2.5,
        spaceBetween: 80,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        speed: 1000,
        navigation: {
          nextEl: ".flechas .swiper-button-next",
          prevEl: ".flechas .swiper-button-prev",
        },
        breakpoints: {
          1441: {
            slidesPerView: 2.5,
            spaceBetween: 80,
          },
          1281: {
            slidesPerView: 2.3,
            spaceBetween: 40,
          },
          1025: {
            slidesPerView: 2.22,
            spaceBetween: 40,
          },
          769: {
            slidesPerView: 2.07,
            spaceBetween: 35,
          },
          501: {
            slidesPerView: 1.58,
            spaceBetween: 35,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 35,
          }
        },
      });
    }
  },
  contentCategorias: {
    init: function () {
      let listaTitle = [];
      const enlaces = document.querySelectorAll("#categorias li");
      for (let i = 0; i < enlaces.length; i++) {
        textoitem = enlaces[i].getAttribute("data-category");
        listaTitle.push(textoitem);
      }
      $(".itemArticulo").hide();
      var categoryMain = document.querySelector(
        "#categorias li.select"
      ).getAttribute("data-category");
      if (categoryMain === "Todos") {
        $(`.itemArticulo`).show(0);
      } else {
        $(`.itemArticulo[data-category="${categoryMain}"]`).show();
      }
      enlaces.forEach((elemento) => {
        elemento.addEventListener("click", (evento) => {
          evento.preventDefault();
          enlaces.forEach((enlace) =>
            enlace.classList.remove("select")
          );
          evento.target.classList.add("select");
          var categoria = evento.target.getAttribute("data-category");
          $(`.itemArticulo`).not(`[data-category="${categoria}"]`).hide();
          $(`.itemArticulo[data-category="${categoria}"]`).show();
          if (categoria === "Todos") {
            $(`.itemArticulo`).show();
          }
        });
      });
    },
  },
  desplegable: {
    init: function () {
      document.addEventListener("click", function (e) {
        if (e.target.closest("footer .desplegable .title")) {
          e.target.closest('.desplegable').classList.toggle("open");
        }
      })
    }
  },
  galery: {
    init: function () {
      var swiperGalery = new Swiper(".sliderGalery", {
        effect: "cards",
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 1500,
        },
        speed: 500,
      });
    }
  },
  menuMovil: {
    init: function () {
      document.addEventListener("click", function (e) {
        if (e.target.closest("header .navigation .part2 ul li:last-child button") || e.target.closest("section.menuMovilPage .top button")) {
          document.querySelector('.menuMovilPage').classList.toggle("open");
          document.querySelector('body').classList.toggle("scrollhidden");
        }
      })
    }
  },
}

if ($('section.menuMovilPage').length > 0) {
  MyApp.menuMovil.init();
}

if ($('.formulario').length > 0) {
  MyApp.validate.init();
}

if ($('.sliderEquipo').length > 0) {
  MyApp.sliderEquipo.init();
}

if ($('.noticiasRelacionadas').length > 0) {
  MyApp.relacionadas.init();
}

if ($('.listaBlog').length > 0) {
  MyApp.contentCategorias.init();
}
if ($('footer .desplegable').length > 0) {
  MyApp.desplegable.init();
}

if ($('.sliderGalery').length > 0) {
  MyApp.galery.init();
}