function totalSum1(){
    let flag1 = 1;
    const flag2 = 1;
    const sum = bank.sum.value;
    const time = bank.time.value;
    const percent = bank.percent.value;
    let finishSum = 0;


    if (sum === "" || time === "" || percent === "") {
        flag1 = 0;
        alert("Заполните первые три поля");
    }

    finishSum = sum * (percent/100/12)*time;
    bank.totalSum2.value = finishSum.toFixed(3);
}

function checkButton(){
    const sum = bank.sum.value;
    const time = bank.time.value;
    const percent = bank.percent.value;
    bank.totalSum2.value = "";
    bank.web.disabled = !(sum !== "" & time !== "" & percent !== "");
}



function checking1(){
    if ( isNaN(bank.sum.value) ) {
        alert("Введите числа");
        bank.sum.value = "";
    }

    if ( isNaN(bank.time.value) ){
        alert("Введите числа");
        bank.time.value = "";
    }

    if ( isNaN(bank.percent.value) ){
        alert("Введите числа");
        bank.percent.value = "";
    }
}