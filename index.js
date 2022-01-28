const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton =document.querySelector("#check-number");
const message = document.querySelector("#message");
const compareValues = (sum, luckyNumber) => {
    if(sum%luckyNumber===0){
       message.innerText = "Your birthdate is lucky!🤩";
    }else{
        message.innerText = "Sorry! Your birthdate is not lucky🙁";
    }
}
const checkBirthDateIsLucky = () => {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(dob=="" || luckyNumber.value==""){
        message.innerText = "Please enter both the fields 😤";
    }else 
        compareValues(sum, luckyNumber.value);
}

const calculateSum = (dob) => {
     dob = dob.replaceAll("-","");
     let sum=0;
     for(let i =0; i<dob.length ; i++){
         sum = sum + Number(dob.charAt(i));
     }
     return sum;
 }

checkNumberButton.addEventListener("click", checkBirthDateIsLucky)
