const pass = document.getElementById("password");
const power = document.getElementById("power-point");
const reasons = document.getElementById("reasons");

var widthPower = 
    ["1%", "25%", "50%", "75%", "100%"]; 
var colorPower = 
    ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

pass.addEventListener('input', updateMeter);

function calcStrength(){ 
	let value = pass.value;
    const weaknesses = [];
    weaknesses.push(checkLength(value));
    weaknesses.push(checkLowercase(value));
    weaknesses.push(checkNumber(value));
    weaknesses.push(checkUppercase(value));
    weaknesses.push(checkSpecial(value));
    console.log(weaknesses);
	
    return weaknesses;
}

function updateMeter(){
    var point = 0;
    const weaknesses = calcStrength();
    reasons.innerHTML = '';
    weaknesses.forEach(weakness => {
        if (weakness == null) return;
        const messageElement = document.createElement('div');
        messageElement.innerText = weakness.message;
        reasons.appendChild(messageElement);
        point += 1;
    })

    if (pass.value.length < 8){
        power.style.width = widthPower[0];
        power.style.backgroundColor = colorPower[0]; 
    }
    else{
        if (point == 3){
            power.style.width = widthPower[1];
            power.style.backgroundColor = colorPower[1]; 
        }
        else if (point == 2){
            power.style.width = widthPower[2];
            power.style.backgroundColor = colorPower[2]; 
        }
        else if (point == 1){
            power.style.width = widthPower[3];
            power.style.backgroundColor = colorPower[3]; 
        }
        else if (point == 0){
            power.style.width = widthPower[4];
            power.style.backgroundColor = colorPower[4]; 
        }
        else{
            power.style.width = widthPower[0];
            power.style.backgroundColor = colorPower[0]; 
        }
    }

    if (power.style.width == "100%"){
        reasons.textContent = "This is a strong password";
        return;
    }
}

function checkLength(value){
    const length = value.length;
    if (length < 8) {
        return{
            message: 'Password too short'
        }
    }
}
function checkNumber(value){
    if (!/[0-9]/.test(value)) {
        return{
            message: 'Password should contain at least 1 number'
        }
    }
}
function checkLowercase(value){
    if (!/[a-z]/.test(value)) {
        return{
            message: 'Password should contain at least 1 lowercase letter'
        }
    }
}
function checkUppercase(value){
    if (!/[A-Z]/.test(value)) {
        return{
            message: 'Password should contain at least 1 uppercase letter'
        }
    }
}
function checkSpecial(value){
    if (!/[^0-9a-zA-Z]/.test(value)) {
        return{
            message: 'Password should contain at least 1 special character'
        }
    }
}

