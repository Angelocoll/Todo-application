//hittar elementen och sparar dom i variabels
let Todoinput = document.querySelector("#Todo");
let TodoBtn = document.querySelector("#Todobtn");
let ul = document.querySelector("#TodoList");
let h1 = document.querySelector("h1");


TodoBtn.addEventListener("click", () => {
    //skapar en if-sats om de inte finns 5 element i listan fortsätt med koden annars skriv ut listan är fullmed följd av tomma string värden
    let RäknaLi = ul.querySelectorAll("li");
    if(RäknaLi.length < 5){

        //skapar ett li element
        let li = document.createElement("li");
        //tilldelar ett värde till li
        li.innerText = "Att göra: " + Todoinput.value;
        //placerar ut li i ul
        ul.append(li);
        //skapa en knapp bredvid den nya li
        let RaderaBtn = document.createElement ("button");
        RaderaBtn.innerText = "X";
        li.append(RaderaBtn);
        
    
        
    //nollställer textrutan till en tomstring efter den läggs till i ul som en li
        Todoinput.value = "";
    }else{
        h1.innerText = "Din Lista är full!";
        Todoinput.value = "";
        
    };
});
//skapar en eventlistner till raderabtn
//går inte för raderabtn finns inte än man hade kunnat göra en foreach loop genom ul eller li och om raderabtn existerar så gör en event listener 
//google hänvisar dock till denna koden
ul.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let x = event.target.parentElement;
        x.remove();
        h1.innerText = "To-do lista!";
        
    }
});