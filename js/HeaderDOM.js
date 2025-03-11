function armaheader(){
    header = document.createElement('header');
    nav = document.createElement('nav');
    nav.setAttribute('class','navbar navbar-expand-lg bg-light');
    section = document.createElement('section');
    section.setAttribute('class','container-fluid');
    a_logo = document.createElement('a');
    a_logo.setAttribute('class','navbar-brand');
    a_logo.setAttribute('href','./index.html');
    logo = document.createElement('img');
    logo.setAttribute('src','./recursos/logo/TDAH_LOGO.png');
    logo.setAttribute('alt','TDAH COFFEE');
    logo.setAttribute('width','80');
    logo.setAttribute('height','80');
    //logo.setAttribute('sryle','transform: scale(5.3)');

    botonmenu = document.createElement('button');
    botonmenu.setAttribute('type','button');
    botonmenu.setAttribute('data-bs-toggle','collapse');
    botonmenu.setAttribute('data-bs-target','#navbarNavAltMarkup');
    botonmenu.setAttribute('class','navbar-toggler');
    botonmenu.setAttribute('aria-controls','navbarNavAltMarkup');
    botonmenu.setAttribute('aria-expanded','false');
    botonmenu.setAttribute('aria-label','Toggle navigation');
    span = document.createElement('span');
    span.setAttribute('class','navbar-toggler-icon');
    navbarNavAltMarkup = document.createElement('div');
    navbarNavAltMarkup.setAttribute('class','collapse navbar-collapse');
    navbarNavAltMarkup.setAttribute('id','navbarNavAltMarkup');
    navbar_nav = document.createElement('div');
    navbar_nav.setAttribute('class','navbar-nav');
    
    
    for (i = 0; i<paginas.length; i++){
        aas = document.createElement('a');
        aas.setAttribute('class','nav-link active');
        aas.setAttribute('href','#/'+paginas[i].nombre);
        texto = document.createTextNode(paginas[i].nombre)
        aas.appendChild(texto)
        navbar_nav.appendChild(aas)
    }

    a_logo.appendChild(logo);
    section.appendChild(a_logo);
    
    botonmenu.appendChild(span);
    section.appendChild(botonmenu);

    navbarNavAltMarkup.appendChild(navbar_nav);
    section.appendChild(navbarNavAltMarkup);

    nav.appendChild(section);
    header.appendChild(nav);
    document.body.appendChild(header);
}