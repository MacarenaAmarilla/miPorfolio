// Contenido en español e inglés
const content = {
    es: {
        nombre: "Macarena Belen Amarilla",
        descripcion: "Desarrollador Front End | Diseño UX/UI | Analista de Sistemas",
        aboutTitle: "Acerca de Mí",
        aboutDescription: "Desarrollador Full Stack JR, Actualmente, estoy cursando la carrera de Analista de Sistemas. Soy una persona muy proactiva y perfeccionista. Me motiva enfrentar desafíos que me permitan aplicar mis conocimientos y continuar creciendo en el área IT. Me gusta trabajar en equipo, escuchar a mis colegas y al usuario para encontrar soluciones eficientes y alineadas con las necesidades reales. Busco oportunidades en un entorno dinámico donde pueda seguir aprendiendo y desarrollándome profesionalmente, contribuyendo al éxito de proyectos tecnológicos con visión y creatividad.",
        experienceTitle: "Profesión",
        job1Title: "Agente de Viajes - Despegar",
        job1Description: "Actualmente, trabajo como agente de viajes en Despegar, donde me especializo en la organización de viajes corporativos, gestionando la venta de pasajes, hoteles y traslados para altos ejecutivos como Chief, VP y otros cargos superiores. Tengo amplia experiencia en la gestión de cambios aéreos y reprogramaciones involuntarias, utilizando herramientas como Sabre, Amadeus, Wordspan, Jira y Workplace para ofrecer un servicio eficiente y personalizado. Me encanta progresar y estar en constante desarrollo, y mi objetivo es fusionar mis dos pasiones: el turismo y los sistemas.",
        job1Years: "febrero 2024 - Actualmente",
        educationTitle: "Educación",
        edu1Title: "Instituto Tecnológico de Educación Superior ORT Argentina",
        edu1Description: "Analista de sistemas.",
        edu1Years: "Marzo 2024 - Diciembre 2030",
        projectsTitle: "Proyectos",
        project1Title: "Web Destino",
        project1Description: "Creación de un sitio web para mi agencia de marketing, diseñado tanto para dispositivos móviles como para escritorio. Utilicé tecnologías como HTML, CSS, Bootstrap y JSON para desarrollar una plataforma funcional y atractiva, enfocada en ofrecer una experiencia de usuario optimizada y adaptada a diferentes resoluciones de pantalla.",
        project2Title: "Internal Travel - Despegar",
        project2Description: "Desarrollé un sitio web enfocado en facilitar el trabajo en equipo, con una estructura clara para gestionar tareas y procesos. Utilicé HTML, CSS, Bootstrap, JavaScript y Node.js para crear una plataforma robusta y eficiente, diseñada para mejorar la colaboración y la organización de proyectos.",
        project3Title: "MASCOTILLAS",
        project3Description: "Colaboré en el desarrollo de una web en equipo para resolver una problemática específica, enfocándome en diseñar una interfaz intuitiva y sencilla. Mi principal responsabilidad fue garantizar que el usuario pudiera navegar de manera eficiente, proporcionando una experiencia fluida y accesible que permite alcanzar los objetivos propuestos de forma rápida y sin complicaciones. Utilicé HTML, CSS, Bootstrap, JavaScript, y la base de datos con SQL Server.",
        whatsappText: "Contactar por WhatsApp"
    },
    en: {
        nombre: "Macarena Belen Amarilla",
        descripcion: "Front End Developer | UX/UI Design | Systems Analyst",
        aboutTitle: "About Me",
        aboutDescription: "Junior Full Stack Developer, currently pursuing a Systems Analyst career. I am a proactive and detail-oriented individual who is motivated by challenges that allow me to apply my knowledge and continue growing in the IT field. I enjoy working in a team, listening to colleagues and users to find efficient solutions aligned with real needs. I seek opportunities in a dynamic environment where I can keep learning and developing professionally, contributing to the success of technological projects with vision and creativity.",
        experienceTitle: "Profession",
        job1Title: "Travel Agent - Despegar",
        job1Description: "I am currently working as a travel agent at Despegar, specializing in organizing corporate trips, managing ticket sales, hotels, and transfers for high-level executives such as Chiefs, VPs, and other senior roles. I have extensive experience in managing flight changes and involuntary rebookings, using tools like Sabre, Amadeus, Wordspan, Jira, and Workplace to provide efficient and personalized service. I love progressing and being in constant development, and my goal is to merge my two passions: tourism and systems.",
        job1Years: "February 2024 - Present",
        educationTitle: "Education",
        edu1Title: "Instituto Tecnológico de Educación Superior ORT Argentina",
        edu1Description: "Systems Analyst.",
        edu1Years: "March 2024 - December 2030",
        projectsTitle: "Projects",
        project1Title: "Web Destino",
        project1Description: "Developed a website for my marketing agency, designed for both mobile and desktop devices. Used technologies such as HTML, CSS, Bootstrap, and JSON to create a functional and attractive platform, focusing on delivering an optimized user experience adapted to different screen resolutions.",
        project2Title: "Internal Travel - Despegar",
        project2Description: "Developed a website aimed at facilitating teamwork, with a clear structure for managing tasks and processes. Used HTML, CSS, Bootstrap, JavaScript, and Node.js to create a robust and efficient platform designed to enhance collaboration and project organization.",
        project3Title: "MASCOTILLAS",
        project3Description: "Collaborated on developing a website in a team to address a specific problem, focusing on designing an intuitive and simple interface. My main responsibility was to ensure that users could navigate efficiently, providing a smooth and accessible experience that allows achieving proposed objectives quickly and without complications. Utilized HTML, CSS, Bootstrap, JavaScript, and SQL Server for the database.",
        whatsappText: "Contact via WhatsApp"
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    document.getElementById("nombre").textContent = content[lang].nombre;
    document.getElementById("descripcion").textContent = content[lang].descripcion;
    document.getElementById("aboutTitle").textContent = content[lang].aboutTitle;
    document.getElementById("aboutDescription").textContent = content[lang].aboutDescription;
    document.getElementById("experienceTitle").textContent = content[lang].experienceTitle;
    document.getElementById("job1Title").textContent = content[lang].job1Title;
    document.getElementById("job1Description").textContent = content[lang].job1Description;
    document.getElementById("job1Years").textContent = content[lang].job1Years;
    document.getElementById("educationTitle").textContent = content[lang].educationTitle;
    document.getElementById("edu1Title").textContent = content[lang].edu1Title;
    document.getElementById("edu1Description").textContent = content[lang].edu1Description;
    document.getElementById("edu1Years").textContent = content[lang].edu1Years;
    document.getElementById("projectsTitle").textContent = content[lang].projectsTitle;
    document.getElementById("project1Title").textContent = content[lang].project1Title;
    document.getElementById("project1Description").textContent = content[lang].project1Description;
    document.getElementById("project2Title").textContent = content[lang].project2Title;
    document.getElementById("project2Description").textContent = content[lang].project2Description;
    document.getElementById("project3Title").textContent = content[lang].project3Title;
    document.getElementById("project3Description").textContent = content[lang].project3Description;
    document.getElementById("whatsappText").textContent = content[lang].whatsappText;
}

// Event listeners para los botones de idioma
document.getElementById("spanishBtn").addEventListener("click", () => changeLanguage('es'));
document.getElementById("englishBtn").addEventListener("click", () => changeLanguage('en'));

// Configuración inicial
changeLanguage('es'); // Configuración por defecto en español