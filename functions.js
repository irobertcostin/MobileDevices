function creazaRand (obj) {

    let text = `
    <tr>
        <td>${obj.marca}</td>
        <td class="asta">${obj.model}</td>
        <td>${obj.memorieRam}</td>
        <td>${obj.stocare}</td>
        <td>${obj.culoare}</td>
    </tr>
    `
        return text;
}

function adaugaInTabel (arr) {
    let text = "";

    for (let i = 0; i<arr.length;i++) {
        text += creazaRand(arr[i]);
    }

    let container = document.querySelector(".corp-tabel");
    container.innerHTML = text; 
}

function preiaElemente () {

let mobil = {
    marca: maker.value,
    model: model.value,
    memorieRam: memory.value,
    stocare: size.value,
    culoare: color.value
}


if (mobil.marca !== "" && mobil.model !== "" && mobil.memorieRam !== "" && mobil.stocare !== "" && mobil.culoare !== "") {

    return mobil;
} else {

    let errors = [];
   
    if (mobil.marca == "") {
    errors.push("Hersteller eingeben")
    }

    if (mobil.model == "") {
    errors.push("Model eingeben")
   }

   if (mobil.memorieRam == "") {
    errors.push("RAM eingeben")
   }

   if (mobil.stocare == "") {
    errors.push("Speicherplatz eingeben")
   }

   if (mobil.culoare == "") {
    errors.push("Farbe eingeben")
   }

    alert(errors);
}

}

function eliminaElemente(arr,parametru) {

    let nou = [];

    for(i=0;i<arr.length;i++) {

        if(parametru !== arr[i].model) {
            nou.push(arr[i]);
        }
    }
    return nou;
}

function resetRows(){
    maker.value ="";
    model.value ="";
    memory.value ="";
    size.value ="";
    color.value ="";
}

function getHandyByModel (arr,model) {

    let x = "";

    for (i=0;i<arr.length;i++){

        if(arr[i].model == model) {
            x = arr[i];
        }

    }

return x;

}

function updatePhone (arr,model) {

    arr = eliminaElemente(handys,model.model);
    arr.push(model);
    return arr;

}


function searchPhoneByModel (arr,model) {

    let searched = [];

    for(i=0;i<arr.length;i++){

        if(arr[i].model.includes(model)){
            searched.push(arr[i]);
        }


    }

    return searched;

}