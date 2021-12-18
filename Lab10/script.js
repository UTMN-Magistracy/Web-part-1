const course = [1, 83.39, 73.67, 98.06, 0.65, 11.55, 2.71];
const bank = ["Рубли", "Евро", "Доллар", "Фунт стерлингов", "Японская иена", "Китайский юань", "Украинская гривна"];
let sum = 1;
let a = 0;
let b = 0;

function checking(obj){
    if (isNaN(obj.value) ) {
        obj.value = "";
        alert("Введите числа");
    }
}

function spring(){
    calcul.course.value = 0;
    for (let i = 0; i<7; i++){
        if (calcul.in_value[i].selected){
            a = calcul.in_value[i].value;
            var a_course = course[i];
        }
        if (calcul.out_value[i].selected){
            b = calcul.out_value[i].value;
            var b_course = course[i];
        }
        calcul.course.value = (b_course/a_course).toFixed(3);
    }
}

function total_sum(){
    sum = (calcul.course.value * calcul.your_sum.value).toFixed(2);
    calcul.textPO.value = "Перевод: " + b + "-" + a + " " +  "по курсу" + " " + calcul.course.value + "\n" + "К выдаче: " + sum;
}