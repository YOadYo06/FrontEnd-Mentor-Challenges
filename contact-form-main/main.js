const form = document.getElementById('ctct');


const FN = document.getElementById('fname');
const LN = document.getElementById('lname');
const email = document.getElementById('emailA');
const quer = document.getElementsByName('RB');
const Mess = document.getElementById('Mess');
const consent = document.getElementById('CB');
const CB = document.querySelector('.CB');
const appearence = document.getElementsByClassName('mess-succ')[0];

const GE = document.getElementsByClassName('GE')[0];
const GEb = document.getElementById('GE');
const SR = document.getElementsByClassName('SR')[0];
const SRb = document.getElementById('SR');

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

GE.addEventListener('click', function() {
    GEb.checked = true;
    GE.style.border='1px solid var(--Green-600)';
    SR.style.border='1px solid var(--Grey-500)';
});
SR.addEventListener('click', function() {
    SRb.checked = true;
    SR.style.border='1px solid var(--Green-600)';
    GE.style.border='1px solid var(--Grey-500)';

});



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (FN.value.trim() === '') {

        document.querySelector('#fname').style.border = '1px solid var(--Red)';
        document.querySelector('.FN').style.color = 'var(--Red)';
        isValid = false;

    } else {
        document.querySelector('#fname').style.border = '1px solid var(--Grey-500)';
        document.querySelector('.FN').style.color = 'transparent';

    }

    if (LN.value.trim() === '') {
        
        document.querySelector('#lname').style.border = '1px solid var(--Red)';
        document.querySelector('.LN').style.color = 'var(--Red)';
        isValid = false;

    } else {
        
        document.querySelector('#lname').style.border = '1px solid var(--Grey-500)';
        document.querySelector('.LN').style.color = 'transparent';
    }

    if (email.value.trim() === '' ) {
        document.querySelector('#emailA').style.border = '1px solid var(--Red)';
        document.querySelector('.E').style.color = 'var(--Red)';
        isValid = false;
    } else {
        if(emailRegEx.test(email.value.trim())){
            document.querySelector('#emailA').style.border = '1px solid var(--Grey-500)';
            document.querySelector('.E').style.color = 'transparent';
        }else{
            document.querySelector('#emailA').style.border = '1px solid var(--Red)';
            document.querySelector('.E').style.color = 'var(--Red)';
            isValid = false;
        }
        
    }

    if (Mess.value.trim() === '') {
        document.querySelector('#Mess').style.border = '1px solid var(--Red)';
        document.querySelector('.MS').style.color = 'var(--Red)';
        isValid = false;
    } else {
        document.querySelector('#Mess').style.border = '1px solid var(--Grey-500)';
        document.querySelector('.MS').style.color = 'transparent';
    }

    if (!(quer[0].checked == true || quer[1].checked == true)) {
        document.querySelector('.SR').style.border = '1px solid var(--Red)';
        document.querySelector('.GE').style.border = '1px solid var(--Red)';
        document.querySelector('.RB').style.color = 'var(--Red)';
        isValid = false;
    } else {
        document.querySelector('.GE').style.border = '1px solid var(--Grey-500)';
        document.querySelector('.SR').style.border = '1px solid var(--Grey-500)';
        document.querySelector('.RB').style.color = 'transparent';
    }

    if(!consent.checked){
        document.querySelector('.CB').style.color = 'red';
        isValid = false;
    }else{
        document.querySelector('.CB').style.color = 'transparent';
    }

    if(isValid){
        appearence.classList.remove('hide');
        setTimeout(()=> {
            appearence.classList.add('hide');
        }, 5000);
    }else{
        appearence.classList.add('hide');
    }


});



FN.addEventListener('focus',function(){
    FN.style.border = '1px solid var(--Green-600)';
    FN.style.outline = 'none';
    FN.style.boxShadow = 'none';
});

FN.addEventListener('blur',function(){
    FN.style.border = '1px solid var(--Grey-500)';
});

LN.addEventListener('focus',function(){
    LN.style.border = '1px solid var(--Green-600)';
    LN.style.outline = 'none';
    LN.style.boxShadow = 'none';
});

LN.addEventListener('blur',function(){
    LN.style.border = '1px solid var(--Grey-500)';
});



email.addEventListener('focus',function(){

    email.style.border = '1px solid var(--Green-600)';
    email.style.outline = 'none';
    email.style.boxShadow = 'none';

});

email.addEventListener('blur',function(){

    email.style.border = '1px solid var(--Grey-500)';

});

Mess.addEventListener('focus',function(){

    Mess.style.border = '1px solid var(--Green-600)';
    Mess.style.outline = 'none';
    Mess.style.boxShadow = 'none';

});

Mess.addEventListener('blur',function(){

    Mess.style.border = '1px solid var(--Grey-500)';

});

CB.addEventListener('click',function(){
    consent.checked=!consent.checked;
});