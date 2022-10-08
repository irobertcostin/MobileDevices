let creazaButon = document.querySelector(".btn");
let selection = document.querySelector(".corp-tabel");
let obiectSelectat="";
let selectieChange = "";

// delete
let stergere = document.querySelector(".delete")

// edit
let editare = document.querySelector(".edit")

let maker = document.querySelector(".marca")
let model = document.querySelector(".model")
let memory = document.querySelector(".memorie")
let size = document.querySelector(".stocare")
let color = document.querySelector(".culoare")

// search

let search = document.querySelector(".search")

creazaButon.addEventListener("click", () => {

    let tipRaspuns = preiaElemente();


    if (tipRaspuns.marca !== undefined) {
        handys.push(tipRaspuns);
        adaugaInTabel(handys);
    } else {

        for (i=0;i<tipRaspuns.length;i++) {
                alert(errors[i]);
        }
    }


    resetRows();

    // let inputs = document.querySelectorAll(`.marca , .model , .memorie , . stocare , .culoare`)
    // inputs.forEach(input => {
    //     input.value = "";
    // })


})

selection.addEventListener("click", (e) => {


    let obj = e.target;

    if(obj.classList.contains("asta")){

        if(selectieChange !== ""){
            selectieChange.classList.remove("selectie");
        }

        obj.classList.add("selectie");
        
        obiectSelectat =  obj.textContent;
        selectieChange = obj;
    }


    let telefon = getHandyByModel(handys,obiectSelectat);

    maker.value = telefon.marca;
    model.value = telefon.model;
    memory.value = telefon.memorieRam;
    size.value = telefon.stocare;
    color.value = telefon.culoare;


})


stergere.addEventListener("click", () =>  {

    handys = eliminaElemente(handys,obiectSelectat);

adaugaInTabel(handys);  

resetRows();

}
)

editare.addEventListener("click", () => {

    let telefon = {
        marca:maker.value,
        model:model.value,
        memorieRam:memory.value,
        stocare:size.value,
        culoare:color.value
    }

    handys = updatePhone(handys,telefon);

    adaugaInTabel(handys);

    resetRows();

})


search.addEventListener("click", () =>{

    adaugaInTabel(searchPhoneByModel(handys,model.value))

})

adaugaInTabel(handys);
