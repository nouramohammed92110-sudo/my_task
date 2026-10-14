let btn = document.getElementById("btn")
let ul = document.getElementById("ul")
let icon = document.getElementById("icon")
let form = document.getElementById("form")
let inp = document.getElementById("inp")
let list = document.getElementById("list")
let isshow=false

btn.addEventListener("click",()=>{
    isshow=!isshow
    if(isshow===true){
        ul.classList.remove("hidden")
        ul.classList.add("flex")
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-x")

    }else{
        ul.classList.remove("flex")
        ul.classList.add("hidden")
        icon.classList.remove("fa-x")
        icon.classList.add("fa-bars")
    }
})


let tasks=[
    {id:1,title:"read book"},
    {id:2,title:"play football"},
    {id:3,title:"study programming"},

]

function rendertasks(){
    list.innerHTML=""

    tasks.map((task)=>{
        list.innerHTML+=`
        <li class="w-full flex justify-between items-center p-4 rounded-md bg-slate-300">${task.title} <span class="text-red-500"><i class="fa-solid fa-trash"></i></span></li>`

    })
}

rendertasks()

function addtask(){
    let value =inp.value
    let newtask={
        id:tasks.length+1,
        title:value
    }
    tasks.push(newtask)
    inp.value=""
    rendertasks()
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    addtask()
})
