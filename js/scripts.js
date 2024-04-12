window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Cargar Items del navbar
    // Selecciona el elemento del menú
    const menu = document.querySelector('#navbarResponsive ul');

    // Limpia el menú existente
    menu.innerHTML = '';

    // Genera los items del menú
    Constants.navbarItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = item.href;
        a.textContent = item.title;

        li.appendChild(a);
        menu.appendChild(li);
    });

    document.querySelector('#welcome').innerHTML = Constants.welcome;
    document.querySelector('#slogan').innerHTML = Constants.slogan;
    document.querySelector('#servicesTitle').innerHTML = Constants.servicesTitle;

    getServices().then(data => {
        const { result } = data
        
        let html = ``;
        for(let item of result){
            html += `
                <div class="col-md-4 mx-auto">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas ${item.icono} fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-3">${item.nombre}</h4>
                    <p class="text-muted">${item.descripcion}</p>
                </div>
            `;
        }

        document.getElementById('servicesList').innerHTML = html;

    })
    .catch(error => console.error(error));
    
});
