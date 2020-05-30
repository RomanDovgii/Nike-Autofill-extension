const nextBtn = document.querySelector(`#nextBtn`);
const prevBtn = document.querySelector(`#prevBtn`);

let tabs = document.querySelectorAll(`.tab`);
let currentTab = 0; 

const showTab = (tabNumber) => {
  this.tabs = tabs;
  this.tabs[tabNumber].style.display = "grid";
  
  tabNumber === 0 ? hide(prevBtn) : show(prevBtn);
  tabNumber === (this.tabs.length - 1) ? changeText(nextBtn, `Set Profile`) : changeText(nextBtn, `Continue`);
  console.log("wooden dicks");
}

const hide = (element) => {
  element.style.display = `none`;
}

const show = (element) => {
  element.style.display = `inline`;
}

const changeText = (element, text) => {
  element.innerHTML = text;
}

const nextTab = () => {
  hide(tabs[currentTab]);
  currentTab++;
  console.log(currentTab);

  if (currentTab > (tabs.length - 1)) {
    currentTab = tabs.length - 1;
  }

  showTab(currentTab);
}

prevTab = () => {
  hide(tabs[currentTab]);
  currentTab--;
  console.log(currentTab);

  if (currentTab < 0) {
    currentTab = 0;
  }

  showTab(currentTab);
}

//testing range

showTab(currentTab);
nextBtn.addEventListener('click', () => {
  nextTab(1);
});
prevBtn.addEventListener('click', () => {
  prevTab(1);
});

//Эту хуйню доделаешь сам - мне за это не платили. 

// function nextPrev(i) {
//     console.log('okko')
//   this.tabs = document.getElementsByClassName("tab");
//   this.tabs[this.currentTab].style.display = "none";
//   if (validateTab(this.tabs[this.currentTab])){

//     this.currentTab = this.currentTab + i;
//     if (this.currentTab >= this.tabs.length) {
//         document.getElementById("regForm").submit();
//         return false;
//     }
//   }
//   showTab(this.currentTab);
// }

// function validateTab(tab){
//     let inputs = tab.getElementsByTagName("input")
//     let valid = true;

//     for (let i = 0; i < inputs.length; i++){

//         // if (inputs[i].value == "" && inputs[i].id !== 'address2' ) return false;
//         // else if ( inputs[i].id == 'passportNumber'  ){}
//         if (!inputs[i].checkValidity()){
//             inputs[i].className += " invalid";
//             valid = false;
//         } else {
//             inputs[i].className -= " invalid";

//             continue;
//         }
//     }
//     return valid;
// }

// function out(){
//     console.log('okokok');
// }




