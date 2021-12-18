regSur = false;
regLog = false;
regPas = false;
regDate = false;
regTel = false;
flag = false;

function checkSur(){
    regSur = /^\W[а-я]+$/gi.test(amin.surname.value);
    sizeSur = amin.surname.value.length;
    if (regSur && sizeSur>2 && sizeSur<21) amin.surname.style.border = "1px solid green";
    else amin.surname.style.border = "1px solid red";
}

function checkLog(){
    regLog =/^(\w*)?(\d*)$/gi.test(amin.login.value); 
    sizeLog = amin.login.value.length;
    if (regLog && sizeLog>2 && sizeLog<11) amin.login.style.border = "1px solid green";
    else amin.login.style.border = "1px solid red";
}

function checkPas(){
	regPas = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(amin.code.value);
	sizePas = amin.code.value.length;
	if(regPas && sizePas > 7) amin.code.style.border = "1px solid green";
	else amin.code.style.border = "1px solid red";
}

function checkPas2(){
	if (amin.code.value === amin.code2.value) amin.code2.style.border = "1px solid green";
	else amin.code2.style.border = "1px solid red";
}

function checkDate(){
   regDate = /^[1-3]?[0-9](\/|\.)(\d{2})(\/|\.)(\d{4}|\d{2})$/.test(amin.date.value);
   if(regDate) amin.date.style.border = "1px solid green";
   else amin.date.style.border = "1px solid red";
}

function checkTel(){
   regTel = /^(\(\d{3}\))[\- ]?((\d{2}|\d{3})[\- ](\d{4}|(\d{2}[\- ]\d{2})))$/.test(amin.phone.value);
   if (regTel) amin.phone.style.border = "1px solid green";
   else amin.phone.style.border = "1px solid red";
}

function checkInn(){
	let i;
    n2 = [7,2,4,10,3,5,9,4,6,8];
	n1 = [3,7,2,4,10,3,5,9,4,6,8];
    regInn = /^(\d{10})$|^(\d{12})$/.test(amin.inn.value);

    if(regInn){
    	MyInn = amin.inn.value.split('');
    	sum = 0;
    	if (amin.inn.value.length === 10){
           for(i = 2; i < n1.length; i++){
             pr = MyInn [i-2] * n1[i];
             sum = sum + pr;
           }

           flag = sum % 11 === MyInn[MyInn.length - 1];
    	}
    	else{
    	   for(i = 0; i < MyInn.length - 2; i++){
    	   	pr = n2[i] * MyInn[i];
    	   	sum = sum + pr;
    	   }

    	   if (sum % 11 === MyInn[MyInn.length-2]){
    	   	  sum = 0;
              for (i = 0; i < MyInn.length-1; i++){
    	   	   pr = n1[i] * MyInn[i];
    	   	   sum = sum + pr;             	
              }

              flag = sum % 11 === MyInn[MyInn.length - 1];
    	   }
    	   else flag = false;
    	}
    }
    else flag = false;

    if (flag) amin.inn.style.border = "1px solid green";
    else amin.inn.style.border = "1px solid red";
}

function checkGender(){
	rec = false;
	for (var i = 0; i<amin.gender.length; i++){
		if(amin.gender[i].ckecked){
			rec = true;
		}
	}
}

function buttonpls(){
    amin.final.disabled = !(regSur && regLog && regPas && regDate && regTel && flag);
}