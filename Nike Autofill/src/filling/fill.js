 
var profile = 0; // введи номер профиля
 
// made by Gaspromov & Cactus-web
 
var profiles = [ // заполнение профилей. не удаляй то, что уже есть!
    [ 'Имя', 'Отчество', 'Фамилия', 'Адрес1', 'Адрес2', 'Москва', '1: RU-MOW', '105043', 'Номер телефона', 'email', 'номер паспорта', 'дата выдачи', 'место выдачи', 'инн', 
    ], // скопируй эту и 2 строчки выше и вставь после этой строчки, запиши туда данные
]
 
 
 
 
 
 
var ids = [
    'firstName', 'middleName', 'lastName', 'addressLine1',
    'addressLine2', 'city', 'region', 'postCode', '9188426656', 'gaspromov@mail.ru',             //continue
    'passport Number', 'passport Issue Date', 'issuing Authority', 'innNumber',     //continue
    // 'cardNumber-input', 'cardExpiry-input', 'cardCvc-input'                     //continue
]
 
var currentInput;
var continueButton;
 
function setCurrentInput(id){
    let k =0;
    if ( id == 'cardNumber-input' || id == 'cardExpiry-input' || id == 'cardCvc-input'){
        console.log(id);
        if (id == 'cardNumber-input')  k=0;
        else if (id == 'cardExpiry-input')  k=1;
        else  k=2;
        this.currentInput = document.querySelectorAll('input.form-control.ng-untouched.ng-pristine.ng-invalid')[k];
    }
    else if (id !== 'phone'){
        
        this.currentInput = document.getElementById(id);}
    else 
        this.currentInput = document.querySelector('#phone input');
}
 
function setValueInput(value){
    console.log(this.currentInput);
    this.currentInput.value = value;
 
    this.currentInput.dispatchEvent(new Event('input', {
        view: window,
        bubbles: true,
        cancelable: true
    }))
}
 
function deleteClass(){
    for (let i=0; i < 3; i++){
        if (i == 1) matches = document.querySelectorAll('esw-input.ng-invalid');
        else if (i == 2) matches = document.querySelectorAll('div.ng-invalid');
        else matches = document.querySelectorAll('input.isInvalid');
        for ( let k = 0; k < matches.length; k++){
            matches[k].classList.remove("ng-invalid");
            matches[k].classList.remove("isInvalid");
            matches[k].classList.remove("ng-pristine");
            matches[k].classList.add("ng-valid");
            matches[k].focus()
        }
    }
}
 
 
function doFilling(start,length){
    for (let i=start; i <= length; i++){
        deleteClass();
        // console.log(ids[i], this.profiles[this.profile][i])
        setCurrentInput(ids[i]);
        setValueInput(this.profiles[this.profile][i]);
        deleteClass();
    }
}
 
function clickContinue(){
    this.continueButton = document.querySelector('button.button-continue');
    this.continueButton.click();
}
 
function setNewCard(){
    if (document.querySelector('div.new-card-link'))
        document.querySelector('div.new-card-link').click()
}
 
 
 function doFillingAll(){
    console.log('ids[14]')
    doFilling(0,9);
    setTimeout(deleteClass, 3000);
    setTimeout(clickContinue, 5000)
     
    setTimeout(doFilling, 7000, 10, 13);
    setTimeout(deleteClass, 8000);
    setTimeout(clickContinue, 9000);
     
    setTimeout( setNewCard, 11000);
    // setTimeout(doFilling, 19000, 14, 16);
    // setTimeout(deleteClass, 17000);
    // setTimeout(clickContinue, 19000);

 }

 function check(){
     if (document.getElementById('firstName')) doFillingAll();
     else timeOutCheck();
 }
 
 function timeOutCheck(){
     setTimeout(check, 10);
 }

 check();

