var clicks = 0;

async function load() {
    
    var circleId = "c";
    var resultBox = document.getElementById("result-text");
    var loading = document.getElementById("loading");
    resultBox.classList.remove("active");
    loading.classList.add("active");
    //resultBox.style.display = "hidden";
    //loading.style.display = "block";
    for (let i = 1; i <= 3; i++) {
        var circle = document.getElementById(circleId + i);
        circle.style.color = "#9cb8b8";
        await sleep(1000); 
        circle.style.color = "#fafdfd";
    }
    await sleep(1000);
    //loading.style.display = "hidden";
    loading.classList.remove("active");
    displayResult();
    clicks++;
}

function displayResult(){
    var result;
    var resultBox = document.getElementById("result-text");
    resultBox.classList.add("active");
    switch (clicks) {
        case 1:
            result = "Your cushions are very close. Most likely in the same building."
            break;
        case 2:
            result = "Your cushions are extreamly close and are probably stolen by a neighbor of yours. Move closer to the suspected cushion theif and try again.";
            break;
        case 3: 
            result = "WOW. It is definitely your neighbor who stole your cushions. CALL THE POLICE IMMEDIATLY. Location of theif is saved and can be provided as evidence in court.";
            clicks = 0;
            break;
        default:
            result = "Might be that your cushions are close by. Move in any direction to trigger the sensors even more.";     
    }
    resultBox.innerHTML = result;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }