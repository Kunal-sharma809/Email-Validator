let resultStatus = document.querySelector("#resultStatus");
let submitBtn = document.querySelector("#submit");


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    resultStatus.innerHTML = `<img width="150" src="./assets/loading.svg" alt="" >`;
    let key = "ema_live_K17HhB16sITc0vMRLDY4EaRtvRNX9qGtt4a2URRS";
    let email = document.querySelector("#email").value;

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();
    let str = ``;
    for(let key of Object.keys(result)) {
        if(result[key] !== "" || result[key] !== " ") {
            str += `<div>${key} : ${result[key]}</div>`;
        }
    }

    console.log(str);
    resultStatus.innerHTML = str;
});



