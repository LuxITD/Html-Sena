var row = "";
var filas= [];
function addrow() {
    const correo = document.getElementById("correo");
    const descripcion = document.getElementById("descripcion");
    const add = document.getElementById("add");
    let row = `<tr>
                <th scope="row">${correo.value}</th>
                <td> ${descripcion.value}</td>
                </tr>`;
               add.innerHTML = row;
}
/*function leerarray() {
    const addr = document.getElementById("add");
    array.forEach(item => {
    console.log(item)
    
    });
}*/

