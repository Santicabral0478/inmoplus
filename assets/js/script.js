
const addEventOnElement = function (element, type, listener) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, listener);
    }
  } else {
    element.addEventListener(type, listener);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);


const closeNav = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElement(navLinks, "click", closeNav);



/*cambiar fondo */

function cambioFondo() {
  var fondo = document.querySelector('.principal-img'); 

  setTimeout(function() {
    fondo.classList.add('backgimg1');

    setTimeout(function() {
      fondo.classList.remove('backgimg1');
      fondo.classList.add('backgimg2'); 

      setTimeout(function() {
        fondo.classList.remove('backgimg2');
        fondo.classList.add('backgimg3'); 

        
        setTimeout(function() {
          fondo.classList.remove('backgimg3');
          fondo.classList.add('backgimg4');
          
          setTimeout(function(){
            fondo.classList.remove('backgimg4');
            fondo.classList.add('backgimg5');

              setTimeout(function(){
                fondo.classList.remove('backgimg5');
    
                  cambioFondo();
              });

          }, 4000);
          
        }, 4000);

      }, 4000);

    }, 4000);

  });
}
cambioFondo(); 


/*busqueda*/

document.addEventListener('DOMContentLoaded', function() {
  const inmuebleSelect = document.getElementById('inmueble-select');
  const opcionSelect = document.getElementById('opcion-select');
  var buscarBtn = document.getElementById('buscar-btn');
  const articles = document.querySelectorAll('article');
  const propiedad = document.querySelector(".lista-inmuebles");

  buscarBtn.addEventListener('click', function() {
      const selectedInmueble = inmuebleSelect.value;
      const selectedOpcion = opcionSelect.value;

      for (const article of articles) {
        article.classList.add('none-article');
          if (article.classList.contains(selectedInmueble) && article.classList.contains(selectedOpcion)) {
            article.classList.remove('none-article');
            propiedad.classList.remove("none-section");
          }
      }
  });
});


/*listas-ocultas-busqueda*/

const observer = new MutationObserver(function(mutationsList, observer) {
  mutationsList.forEach(function(mutation) {
    // Verificar si la clase "none-article" ha cambiado en los elementos con clase "propiedad"
    if (mutation.target.classList.contains('propiedad')) {
      var li = mutation.target.closest('.li-element');
      if (li) {
        if (mutation.target.classList.contains('none-article')) {
          li.classList.add('none-li');
        } else {
          li.classList.remove('none-li');
        }
      }
    }
  });
});

// Opciones para el observador (configuración)
const observerOptions = {
  attributes: true,
  attributeFilter: ['class'],
  subtree: true
};

// Comenzar a observar los cambios en los nodos
const elementsToObserve = document.querySelectorAll('.propiedad');
elementsToObserve.forEach(function(element) {
  observer.observe(element, observerOptions);
});

