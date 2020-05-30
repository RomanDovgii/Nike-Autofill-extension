var currentTab = 0;
var tabs = document.getElementsByClassName("tab");
re_passportNumber = '';
showTab(currentTab); 


function showTab(n) {

  this.tabs = document.getElementsByClassName("tab");
  this.tabs[n].style.display = "grid";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (n == (this.tabs.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Set profile";
  } else {
    document.getElementById("nextBtn").innerHTML = "Continue";
  }

}

function nextPrev(i) {
    console.log('okko')
  this.tabs = document.getElementsByClassName("tab");
  this.tabs[this.currentTab].style.display = "none";
  if (validateTab(this.tabs[this.currentTab])){

    this.currentTab = this.currentTab + i;
    if (this.currentTab >= this.tabs.length) {
        document.getElementById("regForm").submit();
        return false;
    }
  }
  showTab(this.currentTab);
}

function validateTab(tab){
    let inputs = tab.getElementsByTagName("input")
    let valid = true;

    for (let i = 0; i < inputs.length; i++){

        // if (inputs[i].value == "" && inputs[i].id !== 'address2' ) return false;
        // else if ( inputs[i].id == 'passportNumber'  ){}
        if (!inputs[i].checkValidity()){
            inputs[i].className += " invalid";
            valid = false;
        }else {
            inputs[i].className -= " invalid";

            continue;
        }
    }
    return valid;
}

function out(){
    console.log('okokok');
}




