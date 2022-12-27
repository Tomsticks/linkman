let accounts = [
    {
         accountName:'Olaniyan Miracle',
         accountNumber: '9035783851',
        isActive: true,
        accountBal: 1000,
        accountPin: 12345,
    },
    {
        accountName:'Python V',
        accountNumber: '7035647594',
        isActive: false,
        accountBal: 3000,
        accountPin: 5789,
    },
    {
        accountName:'James Dumber',
        accountNumber: '8032503025',
        isActive: true,
        accountBal: 5000,
        accountPin: 6789,
    }
]
let pattern = /^[0-9]{1,10}$/;
let accountInput = document.querySelector('.findAccount input')
console.log(accountInput);
let login = document.querySelector('.findAccount button')
let mainBox = document.querySelector('.findAccount')
console.log(login);

let firstValue = accounts[0]
let secondValue = accounts[1]
let thirdValue = accounts[2]

function validateAcct(){
   if(accountInput.value === firstValue.accountNumber){
    alert(firstValue.accountName);
   }else if(accountInput.value === secondValue.accountNumber){
    alert(secondValue.accountName);
   }else if(accountInput.value === thirdValue.accountNumber){
    alert(thirdValue.accountName);
    pattern.test(accountInput.value)
   }else if(accountInput.value === ""){
    alert ('Enter Your Account Number')
   }
   else{
    alert('Invalid Account Number')
   }
   clearInput();
};

function clearInput(){
    let clear = document.querySelector('.findAccount input')
    clear.value = '';
}


login.addEventListener('click',function(e){
    validateAcct();
    console.log(pattern.test(accountInput.value));
    e.preventDefault();
})





