const DataResto = './js/dataResto.json';

const AllRestaurante = async () => {
    try {
        const contenedor = document.getElementById('Restaurantes');
        const Res = await fetch(DataResto);

        const Datos = await Res.json(); 
        Datos[0].restaurantes.forEach((resto) => {

            const article = document.createElement('article');
            article.classList.add('TarjetaResto');

            // Imagen
            const divImg = document.createElement('div');
            divImg.classList.add('RestoImg');

            const img = document.createElement('img');
            img.src = resto.img;
            divImg.appendChild(img);

            // Enlace invisible
            const overlayLink = document.createElement('a');
            overlayLink.href = `./restorant.html?id=${resto.id_resto}`;
            overlayLink.classList.add('overlay-link');

            // Texto del restaurante
            const textoResto = document.createElement('div');
            textoResto.classList.add('TextoResto');
            textoResto.innerHTML = `
                <h4>${resto.tipo_comida} <br>${Math.round(resto.distancia_km * 10)} min<br>${resto.horario}</h4>
                <div class="ContainerStarDolar">
                    <div class="Star">
                        ${getStarsSVG(resto.rating)}
                        <span>(${Math.floor(Math.random() * 100)})</span>
                    </div>
                    <div class="Dolar">
                        ${getDollarsSVG(resto.price)}
                    </div>
                </div>
            `;

            // Puntuación grande
            const puntuacion = document.createElement('div');
            puntuacion.classList.add('Puntuacion', 'Tarjeta');
            puntuacion.innerHTML = `<b>${resto.rating}</b>`;

            // Armar la tarjeta
            article.appendChild(divImg);
            article.appendChild(overlayLink);
            article.appendChild(textoResto);
            article.appendChild(puntuacion);

            contenedor.appendChild(article);
        });
    } catch (err) {
        console.error(err);
    }
};

function getStarsSVG(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    let svg = '';

    for (let i = 0; i < fullStars; i++) {
        svg += '<svg width="20" height="20" class="ColorRatingOn" fill="currentColor"><polygon points="10,1 13,7 20,7 15,12 17,19 10,15 3,19 5,12 0,7 7,7"/></svg>';
    }
    for (let i = 0; i < emptyStars; i++) {
        svg += '<svg width="20" height="20" class="ColorRatingOff" fill="currentColor"><polygon points="10,1 13,7 20,7 15,12 17,19 10,15 3,19 5,12 0,7 7,7"/></svg>';
    }

    return svg;
}

function getDollarsSVG(price) {
    let svg = '';
    for (let i = 0; i < price; i++) {
        svg += '<svg width="10" height="20" class="ColorRatingOn" fill="currentColor"><text x="0" y="15" font-size="18">$</text></svg>';
    }
    for (let i = price; i < 3; i++) {
        svg += '<svg width="10" height="20" class="ColorRatingOff" fill="currentColor"><text x="0" y="15" font-size="18">$</text></svg>';
    }
    return svg;
}

const CategoriasGenerales = async () => {
    try {
        const contenedor = document.getElementById('TipoComida');
        const Res = await fetch(DataResto);

        const Datos = await Res.json(); 
        console.log(Datos);
        Datos[2].categorias_generales.forEach((catego) => {
            console.log(catego);

            const DivIco = document.createElement('div');
            DivIco.classList.add('IconoComida');

            const Button = document.createElement('button');

            const Icono = document.createElement('i');
            Icono.classList.add('fas', catego.icono);

            const Texto = document.createElement('span');
            Texto.textContent = catego.nombreCat;

            Button.appendChild(Icono);
            Button.appendChild(Texto);
            DivIco.appendChild(Button);
            contenedor.appendChild(DivIco);
        });
    } catch (err) {
        console.error(err);
    }
}



AllRestaurante();
CategoriasGenerales();