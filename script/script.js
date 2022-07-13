

let myForm = document.querySelector('#myForm');
let todo = document.querySelector('.todo');
let number =0;

myForm.addEventListener('submit' ,function(){
    if(todo.value!=''){

        let LiTag =document.createElement('li');
        LiTag.innerHTML = todo.value;

        let myList = document.querySelector('#tasks ul');
        myList.appendChild(LiTag);

        todo.value ='';
        number++;

        let wee = document.querySelector('#totalNam').innerHTML=number;

    }else{
        alert('type something...')
    }
});
