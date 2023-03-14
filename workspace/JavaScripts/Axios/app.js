/**
 * Declaración de variables, constantes, objetos
 */

const selpokemon = document.getElementById('pokemon');
const divpokeimagen = document.getElementById('pokeimagen');
//const axios = require('axios');


selpokemon.addEventListener('change', function() {
   //creamos nuestro endpoint
    let endpoint = `https://pokeapi.co/api/v2/pokemon/${this.value}`;
    //alertify.success(endpoint);
    // Hacer una petición para un usuario con ID especifico
    axios.get(endpoint)
    .then(function (response) {
        // manejar respuesta exitosa
        //console.log(response.data.sprites);
        const sprite = response.data.sprites
        let tarjetas= '';

        for (let item in sprite) {
            if(item == "back_default" || item == "front_default" ){
                console.log(sprite[item]);
                let urlimg = sprite[item];
                tarjetas +=`<div class="col">
                                <div class="card">
                                    <img src="${urlimg}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${item}</h5>
                                        <p class="card-text">
                                        </p>
                                    </div>
                                </div>
                            </div>`;
                
            console.log('paso por la tarjeta');
            }            
        }
        divpokeimagen.innerHTML = tarjetas

        
    })
    .catch(function (error) {
        // manejar error
        console.log(error);
    })
    .finally(function () {
        // siempre sera executado
        console.log('ejecucción finalizada');
    });

}, false);