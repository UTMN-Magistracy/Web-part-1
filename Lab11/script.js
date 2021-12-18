let n;
let myarray = [];

function checking(obj){
    if ((event.keyCode < 48) || (event.keyCode > 57)){
        event.returnValue = false;
        alert("Введите целое положительное число");
    }
    else massiv.create_array.disabled = false;
}

function checking_onButton(){
    if (massiv.value_array.value === "") alert("Задайте размер массива");
    else{
        for(let i = 0; i<massiv.value_el.length; i++){
            massiv.value_el[i].disabled = false;
        }
        for(let j = 0; j < massiv.sortt.length; j++){
            massiv.sortt[j].disabled = false;
        }
    }
}

function CreateMassiv(min,max){
    n = massiv.value_array.value;
    for(let i = 0; i < n; i++) myarray[i]= +Math.floor(Math.random() * (max - min +1) + min);
    massiv.org_array.value = myarray;
    for (let j = 0; j<massiv.value_el.length; j++){
        massiv.min_value[j].value = "";
        massiv.value_el[j].checked = false;
    }
}

function for_el(){
    let i;
    const m = myarray.length;

    if (massiv.value_el[0].checked){
        let min = myarray[0];
        for (i = 0; i < m; i++){
            if (min > myarray[i]) min = myarray[i];
        }
        massiv.min_value[0].value = min;
    }
    else massiv.min_value.value = "";

    if (massiv.value_el[1].checked){
        let max = myarray[0];
        for (i = 0; i < m; i++){
            if (max < myarray[i]) max = myarray[i];
        }
        massiv.min_value[1].value = max;
    }
    else massiv.min_value[1].value = "";

    if (massiv.value_el[2].checked){
        var col = 0;
        for (i = 0; i < m; i++) {
            col = col + myarray[i];
        }
        massiv.min_value[2].value = col;
    }
    else massiv.min_value[2].value = "";

    if (massiv.value_el[3].checked) {
        let col_minus = 0;
        for (i = 0; i < m; i++) {
            if (myarray[i]<0) col_minus++;
        }
        massiv.min_value[3].value = col_minus;
    }
    else massiv.min_value[3].value = "";

    if (massiv.value_el[4].checked){
        let col_plus = 0;
        for (i = 0; i < m; i++) {
            if (myarray[i]>0) col_plus++;
        }
        massiv.min_value[4].value = col_plus;
    }
    else massiv.min_value[4].value = "";
}

function check_forButton(){
    for(let i=0; i<myarray.length; i++){
        if(massiv.sortt[i].checked){
            massiv.result.disabled = false;
            break;
        }
    }
}

function sorting(){
    let j;
    let i;
    const m = myarray.length;
    let pr = 0;

    if (massiv.sortt[0].checked){
        for(i = 0; i<m-1; i++)
            for(j = 0; j<m-1; j++){
                if (myarray[j+1]<myarray[j]) {
                    pr = myarray[j+1];
                    myarray[j+1] = myarray[j];
                    myarray[j] = pr;
                }
            }
        massiv.sort_array.value = myarray;
    }

    if (massiv.sortt[1].checked) {
        for (i = 0; i<m-1; i++)
            for(j = 0; j<m-1; j++){
                if (myarray[j+1]>myarray[j]) {
                    pr = myarray[j+1];
                    myarray[j+1] = myarray[j];
                    myarray[j] = pr;
                }
            }
        massiv.sort_array.value = myarray;
    }

    if (massiv.sortt[2].checked){
        massiv.sort_array.value = massiv.org_array.value;
    }
}