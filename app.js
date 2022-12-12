let convertBtn = document.getElementById("convert")
// let num = 20
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
convertBtn.addEventListener("click", function() {
    let num = parseInt(document.getElementById("inputBar").value)
    feet = (num * 3.281).toFixed(3)
    meter =(num / 3.281).toFixed(3)
    lengthy = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters `
    lengthEl.innerHTML = lengthy

    gallon = (num *  0.264).toFixed(3)
    litre = (num /  0.264).toFixed(3)
    volumy = `${num} liters = ${gallon} gallons | ${num} gallons = ${litre} liters`
    volumeEl.innerHTML = volumy

    pound = (num / 2.204).toFixed(3)
    kilo = (num * 2.204).toFixed(3)
    massy = `${num} kilos = ${kilo} pounds | ${num} pounds = ${pound} kilos`
    massEl.innerHTML = massy
    
})

$(document).ready(function(){   
        window.setTimeout('fadeout();', 3000);
        
    });

    function fadeout(){
        $('#loader').delay(2000).fadeOut('slow', function() {
           $('.notLoaded').removeClass('notLoaded');
        });
    }

