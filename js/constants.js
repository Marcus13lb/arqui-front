var Constants = (function () {

    var apiUrl = 'http://localhost:8000'
    var company = 'Caza Constructora'
    var welcome = `¡Bienvenido a ${company}!`
    var slogan = 'Diseñamos el futuro, construimos el presente';
    var servicesTitle = 'Creando Espacios Únicos: Nuestros Servicios de Construcción a Tu Medida'
    var navbarItems = [
        { href: '#services', title: 'Servicios' },
        { href: '#portfolio', title: 'Proyectos' },
        { href: '#contact', title: 'Contacto' },
    ];

    return {
        apiUrl,
        company,
        welcome,
        navbarItems,
        slogan,
        servicesTitle
    };
})();
