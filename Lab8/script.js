function result(){
    let sum = 0;
    const col = photo.countPhoto.value;
    let pay = 0;

    checking1();
    if ( col !== "" || col !== 0){

        if (photo.size[0].checked && photo.paper[0].checked){
            pay = 8.5
            sum = col * pay;
            textWrite(sum,col,pay);
        }
        if (photo.size[0].checked && photo.paper[1].checked) {
            pay = 10.0;
            sum = col * pay;
            textWrite(sum,col,pay);
        }
        if (photo.size[1].checked && photo.paper[0].checked) {
            pay = 10.0;
            sum = col * pay;
            textWrite(sum,col,pay);
        }
        if (photo.size[1].checked && photo.paper[1].checked){
            pay = 11.5;
            sum = col * pay;
            textWrite(sum,col,pay);
        }
        if (photo.size[2].checked && photo.paper[0].checked){
            pay = 15.5;
            sum = col * pay;
            textWrite(sum,col,pay);
        }
        if (photo.size[2].checked && photo.paper[1].checked){
            pay = 17.0;
            sum = col * pay;
            textWrite(sum,col,pay);
        }
    }
}

function checking(){
    if ((event.keyCode < 48) || (event.keyCode > 57)){
        event.returnValue = false;
        alert("Введите число");
    }
}

function checking1(){
    if (photo.countPhoto.value === "") alert("Заполните поле Количество");
}

function textWrite(a,b,c){
    document.photo.textPO.value = "Цена фотографий: "+ c + "р." + "\n" + "Количество"+ " " + b + "шт."+ "\n"+ "Сумма заказа" + " " + a + "руб.";
}

function checking2(){
    let col = photo.countPhoto.value;
    if (col === "") {
        photo.web.disabled = true;
        photo.textPO.value = "";
    }
}

function checking3(){
    const col = photo.countPhoto.value;
    if (col !== "") photo.web.disabled = false;
}