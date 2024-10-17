
// Array of project data (images, titles, descriptions)
const projects = [
    {
        image: 'src/assets/Images/two-eyes.png',
        title: 'Two Eyes: Two Worlds',
        description: 'Videojuego en el que se experimenta con la inversión de gravedad, interacción con diferentes objetos de colores, botones, placas de presión y parkour.',
        moreInfo: {
          text: 'Mi rol en este proyecto fue programar las interacciones entre el jugador y los objetos: agarrar un objeto, presionar un botón. Esto también incluye la creación y programación de las animaciones que se activan al interactuar con los objetos.',
          team: ['Abdiel Baldonedo', 'Manuel Cabello', 'Douglas González', 'Sebastian Urbano'],
          technologiesUsed: 'Unity, C#, Github'
        }
  
    },
    {
        image: 'src/assets/Images/vrbar.png',
        title: 'VR Bar',
        description: 'Juego de bartender en realidad virtual, sirviendo bebidas a diferentes clientes del bar.',
        moreInfo: {
          text: 'Mi rol en este proyecto fue importar el personaje que actuaría como cliente para el jugador, programar su ruta de movimiento y cómo interactuaba con las bebidas que crea el jugador. Del mismo modo, probé el videojuego con los visores Meta Quest 2 en busca de errores y feedback para el resto del equipo.',
          team: ['Abdiel Baldonedo', 'Martín Cardoze', 'Alan Cruz', 'Sebastian Urbano'],
          technologiesUsed: 'Unity, C#, Github, Blender, Canva'
        }
    },
    {
      image: 'src/assets/Images/TimeGame.png',
      title: 'TimeScale',
      description: 'Juego 2D en el que el jugador debe controlar el tiempo para tener mayor control sobre su movimiento y superar obstáculos que requieren de gran precisión. Inspirado en Mario. ',
      moreInfo: {
        text: 'Mi rol en este proyecto fue programar el movimiento del personaje, la ralentización del tiempo y aplicar efectos visuales para darle feedback al jugador de que ha ralentizado el tiempo, programar la compatibilidad con mando, el manejo de colisiones y el manejo de los obstáculos. ',
        team: ['Abdiel Baldonedo', 'Martín Cardoze'],
        technologiesUsed: 'Unity, C#, Github'
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
    const technologiesUsed = document.getElementById("technologiesUsed");
  
    const project = projects[currentProjectIndex];
  
    galleryImage.src = projects[currentProjectIndex].image;
    projectTitle.textContent = projects[currentProjectIndex].title;
    projectDescription.textContent = projects[currentProjectIndex].description;
    technologiesUsed.textContent = "Tecnologías usadas: " + projects[currentProjectIndex].moreInfo.technologiesUsed;
  
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
    console.log("button clicked");
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