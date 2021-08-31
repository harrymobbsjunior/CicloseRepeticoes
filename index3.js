let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let peliculas2 = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];

function converterParaMaiusculas(array) {
    for(var i=0; i < array.length; i++)
    {
        array[i] = array[i].toUpperCase();
    }
    return array;
}

//console.log(converterParaMaiusculas(peliculas));

function passagemDeElemento(array1, array2) { 
    var j = array2.length
    for(var i=0; i < j; i++)
    {
        array1.push( array2.pop().toUpperCase());
    }
    return array1;
}

console.log(passagemDeElemento(peliculas, peliculas2 ));

