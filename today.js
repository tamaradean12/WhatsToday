let checkBtn = document.querySelector("#check-btn").addEventListener("click", buttonClicked);
let placeResponse = document.querySelector("#result-placeholder");


function buttonClicked(){
    const day = document.querySelector("#day-of-week").value.toLowerCase()
    
    if(day === "saturday" || day === "sunday"){
        placeResponse.innerHTML = "It's the weekend!"
    } else if(day === "monday" || day === "tuesday"){
        placeResponse.innerHTML = "It's a gym day!"
    } else {
        placeResponse.innerHTML = "It's a weekday."
    }
};


