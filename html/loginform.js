let imgeye = document.querySelector('#eyeOpen');
let passinp =document.querySelector('#pass');

passinp.addEventListener('keyup',function(){
    let passlength = passinp.value.length;
    if(passlength = 0){
        imgeye.style.display ='none'
    }else{
        imgeye.style.display ='inline-block'
    }
});

imgeye.addEventListener('click' , function(){

    let passtype = passinp.getAttribute('type');

    if(passtype=='password'){

        passinp.setAttribute('type','text' );
        imgeye.setAttribute('src','invisible-eye.png');

    }else{
        passinp.setAttribute('type','password');
        imgeye.setAttribute('src','visible-eye.png');

    };
});