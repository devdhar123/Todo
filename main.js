let input = document.getElementById("input")
let form = document.querySelector("form")
let dev = document.querySelector("ul")
form.addEventListener("submit",Todo)

function Todo(e){
    
    //privant page reload
    e.preventDefault()

    //get the value form input
    let todo = input.value

    //create li
    let li = document.createElement("li")

    li.className = "list-group-item rounded-3 mt-3 container"

    li.innerText = todo

    let Delbtn = document.createElement("button")
    Delbtn.className = "btn btn-sm btn-danger float-end rounded-3 delete"
    Delbtn.innerText = "Delete"

    li.appendChild(Delbtn)

    dev.appendChild(li)

    form.reset()
}

function del(e){
     if(e.target.className.includes("delete")){
        let deleteli = e.target.parentElement

        dev.removeChild(deleteli)
     }
}

dev.addEventListener("click",del)