const menuAdd = document.querySelector("#menu_add");
const menuAddForm = document.querySelector("#menu_add_form");

function menuFormOn(){
    menuAddForm.style.display='inline-block'
}

function menuFormOff(){
    menuAddForm.style.display='none'
}

//버튼을 누르면 input 창이 나온다
//const HIDDEN_CLASSNAME = "hidden";


menuAdd.addEventListener('click', function(event){
    menuFormOn()
})

menuAdd.addEventListener('click', e => {
    const outTarget = e.target
    if(outTarget.classList.contains("menu_overlay")){
        menuFormOff()
    }
})

window.addEventListener("keyup", e => {
    if(menuAddForm.style.display === "inline-block" && e.key === "Escape") {
        menuFormOff()
    }
})


function addmenu() {
    //1. 추가할 값을 input창에서 읽어온다
    const addValue = document.getElementById('addValue').value;

    //2. 추가할 li element 생성
    //2-1. 추가할 li element 생성
    const createLi = document.createElement('li');

    //2-2. li에 id속성 추가
    li.setAttribute('id',addValue);

    //2-3. li에 text node 추가
    const textNode = document.createTextNode(addValue);
    li.appendChile(textNode);

    //3. 생성된 li를 ul에 추가
    document
    .getElementById('menu_list')
    .appendChild(li);
}