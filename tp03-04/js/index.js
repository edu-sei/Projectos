const DataResto = './dataResto.json';

function AllRestaurante(){
    const contenedor = document.getElementById('NombreRestaurante');

    DataResto[0].restaurantes.forEach((item) =>{
        const NombreResto = document.createElement('h2');
        NombreResto.textContent = item.nombre.toUpperCase();
        console.log(NombreResto);
        contenedor.appendChild(NombreResto);
    });
}   

AllRestaurante()