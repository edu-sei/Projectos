const DataResto = './dataResto.json';
const UrlListGeografica = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
const UrlfilterResto = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican";
const UrlPlato = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

const AllRestaurante = async() => {
    try{
        const contenedor = document.getElementById('NombreRestaurante');

        const Res = await fetch(UrlListGeografica);
        const {meals} = await Res.json();

        meals.forEach((item) =>{
            const NombreResto = document.createElement('h2');
            NombreResto.textContent = item.strArea.toUpperCase();
            console.log(NombreResto);
            
        });
    }catch(err){
        console.error(err);
    }
}

AllRestaurante()