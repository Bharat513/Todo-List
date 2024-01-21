let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");



btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = inp.value;
    inp.value = "";

    let delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText = "Delete Task"

    item.appendChild(delbtn);
    ul.appendChild(item);
});

let delbtns = document.querySelectorAll(".delete");

ul.addEventListener("click", function (event) {
    // console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
})

// for(delBtn of delbtns){
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }    


