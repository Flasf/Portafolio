
function change_color_theme(buttonThemeToggler){
    const colorLightText = "#000";
    const colorLightBackground = "#fff";
    const colorDarkText = "#000";
    const colorDarkBackground = "#0d1b2a";
    

    const body = document.querySelector("body");
    const section = document.querySelector(".section");
    console.log("body selected");

    if(buttonThemeToggler.checked){
        body.style.backgroundColor = colorLightBackground;
        body.style.color = colorLightText;
        section.style.backgroundColor = colorLightBackground;
        section.style.color = colorLightText;
    }else{
        body.style.backgroundColor = colorDarkBackground;
        body.style.color = colorDarkText;
        section.style.backgroundColor = colorDarkBackground;
        section.style.color = colorDarkText;
    }
}


function updateViewsCount() {
  const viewsCount = getViewsCount();
  const currentCount = parseInt(viewsCount); //ensures it's an integer
  const newCount = currentCount + 1;
  document.getElementById("visits").textContent = (newCount + addFireToViewCount(newCount)).toString();
  
  storeViewsCount(newCount);
}

function storeViewsCount(count) {
  localStorage.setItem("visits", count.toString());
}

/**
 * Retrieves the stored view count from local storage and returns it as an integer.
 * If the stored value is not a number, it returns 0.
 * @returns {number} The view count
*/
function getViewsCount() {
  const storedViewsCount = localStorage.getItem("visits");
  if (!storedViewsCount) {
    storedViewsCount = 0; // Default to "0" if no value exists
  }
  
  return parseInt(storedViewsCount);
}


function addFireToViewCount(currentCount) {
  if (currentCount >= 100) {
    return "🔥🔥🔥";
  } else if (currentCount >= 50) {
    return "🔥🔥";
  } else if (currentCount >= 10) {
    return "🔥";
  } else {
    return "";
  }
}


function resetViewsCount() {
  localStorage.setItem("visits", "0");
  document.getElementById("visits").textContent = "0";
}

// Attach resetViewsCount to the Reset button
document.getElementById("resetButton").addEventListener("click", resetViewsCount);

// Call updateViewsCount when the page loads
window.addEventListener("load", updateViewsCount);

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

function typewriterEffect(element, text, delay = 100, callback = null) {
  let i = 0;
  function type() {
      if (i < text.length) {
          element.textContent += text.charAt(i);  // Add one character at a time
          i++;
          setTimeout(type, delay);  // Continue typing
      } else if (callback) {
          callback();  // Call the next typing effect once this one is done
      }
  }
  type();
}

window.onload = function() {
  const nameElement = document.getElementById("typewriter-name");
  const titleElement = document.getElementById("typewriter-title");

  // Start typing the name first, then the title after it's done
  typewriterEffect(nameElement, "Abdiel Javier Baldonedo Ramos", 75, function() {
    // Remove the blinking caret from the name after it's done
    nameElement.classList.add("no-caret");

    typewriterEffect(titleElement, "Diseñador y Desarrollador de Videojuegos", 75);
  });
};


// Array of project data (images, titles, descriptions)
const projects = [
  {
      image: 'assets/Images/two-eyes.png',
      title: 'Two Eyes: Two Worlds',
      description: 'Videojuego en el que se experimenta con la inversión de gravedad, interacción con diferentes objetos de colores, botones, placas de presión y parkour.',
      moreInfo: {
        text: 'Mi rol en este proyecto fue programar las interacciones entre el jugador y los objetos: agarrar un objeto, presionar un botón. Esto también incluye la creación y programación de las animaciones que se activan al interactuar con los objetos.',
        team: ['Abdiel Baldonedo', 'Manuel Cabello', 'Douglas González', 'Sebastian Urbano']
      }

  },
  {
      image: 'assets/Images/vrbar.png',
      title: 'VR Bar',
      description: 'Juego de bartender en realidad virtual, sirviendo bebidas a diferentes clientes del bar.',
      moreInfo: {
        text: 'Mi rol en este proyecto fue importar el personaje que actuaría como cliente para el jugador, programar su ruta de movimiento y cómo interactuaba con las bebidas que crea el jugador. Del mismo modo, probé el videojuego con los visores Meta Quest 2 en busca de errores y feedback para el resto del equipo.',
        team: ['Abdiel Baldonedo', 'Martín Cardoze', 'Alan Cruz', 'Sebastian Urbano']
      }
  },
];

let currentProjectIndex = 0;

// updates the displayed image, title, and description
function updateGallery() {
  const galleryImage = document.getElementById("galleryImage");
  const projectTitle = document.getElementById("projectTitle");
  const projectDescription = document.getElementById("projectDescription");
  const moreInfoSection = document.getElementById("moreInfoSection");
  const moreInfoButton = document.getElementById("moreInfoButton");
  const teamList = document.getElementById("teamList");

  const project = projects[currentProjectIndex];

  galleryImage.src = projects[currentProjectIndex].image;
  projectTitle.textContent = projects[currentProjectIndex].title;
  projectDescription.textContent = projects[currentProjectIndex].description;

  // Reset the "More Info" section to hidden when switching projects
  moreInfoSection.style.display = "none";
  moreInfoButton.textContent = "Más información";

  // Update the "More Info" content dynamically
  moreInfoSection.querySelector('p').textContent = project.moreInfo.text;
  teamList.innerHTML = '';
  project.moreInfo.team.forEach(member => {
      const li = document.createElement('li');
      li.textContent = member;
      teamList.appendChild(li);
  });
}

document.getElementById("prevButton").addEventListener("click", function() {
  currentProjectIndex = (currentProjectIndex === 0) ? projects.length - 1 : currentProjectIndex - 1;
  updateGallery();
});

document.getElementById("nextButton").addEventListener("click", function() {
  currentProjectIndex = (currentProjectIndex === projects.length - 1) ? 0 : currentProjectIndex + 1;
  updateGallery();
});


document.getElementById("moreInfoButton").addEventListener("click", function() {
  const moreInfoSection = document.getElementById("moreInfoSection");
  
  if (moreInfoSection.style.display === "block") {
    moreInfoSection.style.display = "none";  // Hide if visible
    this.textContent = "Más información";
  } else {
    moreInfoSection.style.display = "block";  // Show if hidden
    this.textContent = "Menos información";
  }
});

// Initialize the gallery with the first project
updateGallery();

