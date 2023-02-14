const billInput = document.querySelector('.bill_search');
const peopleInput = document.querySelector('.search');
const tipPerPerson = document.querySelector('.amount');
const totalPerPerson = document.querySelector('.Total');
const tips = document.querySelectorAll('.button')
const tipCustom = document.querySelector('.custom');
const resetBtn = document.querySelector('.rest')
const error = document.querySelector('.error')

// console.log(error)

billInput.addEventListener('input', billInputFun)
peopleInput.addEventListener('input', peopleInputFun)
tips.forEach(function (val) {
    val.addEventListener('click', handleClick);
});
tipCustom.addEventListener('input', tipInputFun)
resetBtn.addEventListener('click', resetFun)

billInput.value = 0.0;
peopleInput.value = 1;
tipPerPerson.innerHTML = '$' + (0.0).toFixed(2)
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2)

let billValue = 0.0;
let peopleValue = 1;
let tipvalue = 0.15;

function billInputFun() {
    billValue = parseFloat(billInput.value);
    calculateTip()
};

function peopleInputFun() {
    peopleValue = parseFloat(peopleInput.value || "0");

    if(peopleValue < 1){
        error.style.display = 'block';
    }else{
        error.style.display = 'none';
    }

    calculateTip()
};

function tipInputFun() {
    tipvalue = parseFloat(tipCustom.value / 100);

    tips.forEach(function (val) {
        val.classList.remove('active_tip')
    })
    calculateTip()
};


function handleClick(event) {
    tips.forEach(function (val) {
        val.classList.remove('active_tip')
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add('active_tip')
            tipvalue = parseFloat(val.innerHTML) / 100
        }
    });
    calculateTip()
};

function calculateTip() {
    let tipAmount = (billValue * tipvalue) / peopleValue
    let total = (billValue * tipAmount) / peopleValue
    tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2)
    totalPerPerson.innerHTML = '$' + total.toFixed(2)
};

function resetFun() {
    billInput.value = 0.0;
    billInputFun()
    peopleInput.value = 1;
    peopleInputFun()
    tipCustom.value = "";
};

// // ჩემი გაკეთებული ეროუ ფუნქციით
// function handleClick(event) {
//     tips.forEach((val) => {
//         val.classList.remove('active_tip')
//         if(event.target.innerHTML == val.innerHTML){
//             val.classList.add('active_tip')
//             tipvalue = parseFloat(val.innerHTML)/100
//         }
//     });
//     calculateTip()
// };

// // ჩემი გაკეთებული ეროუ ფუნქციით
// tips.forEach((val) =>{
//     val.addEventListener('click', handleClick); 
// })


// // სოსოს დახმარებით გაკეთებული
// function handleClick(event) {
//     const active = document.querySelector('.tip-items>.active_tip');
//     active.classList.remove('active_tip');
//     event.target.classList.add('active_tip')

// };
// function handleClick(event) {
//     tips.forEach((val) => {
//         if(event.target.innerHTML == val.innerHTML){
//             val.classList.add('active_tip')
//         }else{
//             val.classList.remove('active_tip')
//         }
//     });
// };