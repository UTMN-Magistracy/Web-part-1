const food_mas = ["Фаршированная форел", "Телятина под соусом", "Крем-суп из шампиньонов", "Рулет со шпинатом", "Пицца Гавайская", "Ванильный коктейль", "Напиток Грейпфрут"];
let food_for_alert;
const price = [369, 349, 189, 179, 299, 149, 199];
let sum_for = 0;
let n = "";

function sum(){
    for(let i = 0 ; i<7; i++)
        if (document.menu.food[i].checked) sum_for = sum_for + price[i];

    document.menu.textPO.value = sum_for;
    sum_for = 0;
}

function images_view(){
    for(let i = 0 ; i<7; i++){
        document.images[i].hidden = !document.menu.food[i].checked;
    }
}

function checking(){
    for (let i = 0; i < 7; i++) {
        if ( document.menu.food[i].checked) {
            document.menu.web.disabled = false;
            break;
        }
        else document.menu.web.disabled = true;
    }
}

function text_button(){
    for (let i = 0 ; i<7; i++){
        if ( document.menu.food[i].checked){
            n += food_mas[i] + ";";
        }
    }

    alert("Ваш заказ:" + n +"\n"+"Сумма заказа:" + document.menu.textPO.value);
}