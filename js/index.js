//khai bao DOM
const submit = document.querySelector('#smb');
const form = document.querySelector('.dien-tt');
const input = document.querySelector('.inp');
const info = document.querySelector('.info');
const footer = document.querySelector('.footer-info');
const btnhover = document.querySelectorAll('.col-xl-4');
const btn = document.querySelectorAll('.btn-show');
const btn_hide = document.querySelectorAll('.show');
const btn_show = document.querySelectorAll('.btn-hide');
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const project = document.querySelectorAll('.pj1');


//check valid email
submit.addEventListener('click',function(){
    if(input.value.match(regex)){
        form.style.display = "none";
        info.style.display = "block";
        footer.style.display = "block";
    } else{
        alert('enter a valid email');
    }
});



//event click
for(let i = 0;i<btnhover.length;i++){

    //show hover btn
    function show_btn(){
        btn[i].style.display = "block";
    }
    btnhover[i].addEventListener('mouseover',show_btn);

    //remove btn
    function remove_btn(){
        btn[i].style.display = 'none';
    }
    btnhover[i].addEventListener('mouseout',remove_btn)


    // click btn

    //show section
    btn[i].addEventListener('click',function(){
        btn_hide[i].classList.remove('show');
        btn_show[i].style.display = 'block';
        btnhover[i].removeEventListener('mouseout',remove_btn);
        btnhover[i].removeEventListener('mouseover',show_btn);
        btn[i].style.display = "none";
    });

    //hide section
    btn_show[i].addEventListener('click',function(){
        btn_hide[i].classList.add('show');
        btn[i].style.display = "block";
        btn_show[i].style.display = 'none';
    });
}


// change location project

function change(){
    window.location.href = 'digital-cv.html';
}

for(let i = 0;i<project.length;i++){
    project[i].addEventListener('click',change);
}



