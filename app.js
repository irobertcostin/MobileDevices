let creazaButon = document.querySelector(".btn");
let selection = document.querySelector(".corp-tabel");
let obiectSelectat="";
let selectieChange = "";

let stergere = document.querySelector(".delete")


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


})


stergere.addEventListener("click", () =>  {

    handys = eliminaElemente(handys,obiectSelectat);

adaugaInTabel(handys);  

}
)

adaugaInTabel(handys);