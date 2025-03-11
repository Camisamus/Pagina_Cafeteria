
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        armaheader()
        //armarbody()
        armafooter()
    }
}
paginas = [
   // {nombre : "Inicio"},
    {nombre : "Responsiva"},
   // {nombre : "Vetados"},
]

function armaheader(){
    cuerpo = document.createElement('Div');

    document.body.appendChild(cuerpo);
}

function armafooter(){
    footer = document.createElement('Div');
    footer.setAttribute('class','footer fixed-bottom p-1');
    footer.setAttribute('style','background-color: rgba(0, 0, 0, 0.2)')
    dafooter = document.createElement('footer');
    dafooter.setAttribute('class','d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top');
    div1 = document.createElement('div');
    div1.setAttribute('class','col-md-4 d-flex align-items-center');
    span = document.createElement('span');
    span.setAttribute('class','mb-3 mb-md-0 text-body-secondary');
    texto = document.createTextNode("© Guild SPA");
    ul1 = document.createElement('ul');
    ul1.setAttribute('class','nav col-md-4 justify-content-end list-unstyled d-flex');
    liIstagram = document.createElement('li');
    liIstagram.setAttribute('class','ms-3');
    aInstagram = document.createElement('a');
    aInstagram.setAttribute('class','text-body-secondary');
    aInstagram.setAttribute('href','https://www.instagram.com/cafe_tdah');
    svgInstagram = document.createElement('svg');
    svgInstagram.setAttribute('class','bi');
    svgInstagram.setAttribute('width','24');
    svgInstagram.setAttribute('height','24');
    useInstagram = document.createElement('use');
    useInstagram.setAttribute('xlink:href','#instagram');
    svgInstagram.appendChild(useInstagram);
    aInstagram.appendChild(svgInstagram);
    liIstagram.appendChild(aInstagram);
    ul1.appendChild(liIstagram);
    dafooter.appendChild(div1);
    dafooter.appendChild(span);
    dafooter.appendChild(texto);
    dafooter.appendChild(ul1);
    footer.appendChild(dafooter);
    document.body.appendChild(footer);
}