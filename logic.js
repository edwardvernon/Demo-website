let batuDetails = document.getElementById("batuDetails");
let seeDetails = document.getElementById("seeDetails");

const showAndHide = () =>{
    if(seeDetails.innerHTML === 'See details'){
        batuDetails.style.display = 'block';
        seeDetails.style.backgroundColor = 'darkBlue';
        seeDetails.style.color = 'white';
        seeDetails.innerHTML = 'Hide details';
    } else {
        batuDetails.style.display = 'none';
        seeDetails.style.backgroundColor = 'aqua';
        seeDetails.style.color = 'black';
        seeDetails.innerHTML = 'See details';
    }
    
}

seeDetails.onclick = showAndHide;