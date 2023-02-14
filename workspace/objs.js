
const person ={
    firsName: "jhon",
    lastName: "doe",
    id: 5566,
    fullName: function() { 
        return this.firsName +" "+this.lastName;
    }
}
function NombreCompleto() {
    document.getElementById("example").innerHTML = person.fullName();
}
const silla ={
    primero : "atras",
    segundo : "adelante",
    mecerce: function() {
        return this.primero +" "+ this.segundo;
    }
}
function Mecerce() {
    document.getElementById("XD").innerHTML = silla.mecerce();
}
const myObj = {
    name : "jhon",
    age : 30,
    cars: {
        car1 :"Ford",
        car2 :"BMW",
        car3 :"Fiat"   
    },
    
}
function Buscar() {
    for(let w in myObj) {
        if(w =="cars"){
            for(let r in myObj[w]){
                alert(myObj[w][r])

            }
        }
    }
}