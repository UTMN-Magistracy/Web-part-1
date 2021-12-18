let start_date;
let last_date;
let pr_day;
let pr_month;
let pr_year;
let start_hours;
let end_hours;
let finish;
let flag;
const ty = 4;
const ty1 = 1;

function checking(obj){
  if ((event.keyCode < 45) || (event.keyCode > 57)){
        event.returnValue = false;
        alert("Введите дату"); 
    }    
}
function getDecimal(num){
	return num - Math.floor(num);
}
function allday(){
/*Даты*/	
	start_date = main_date.in_date.value.split(/[./-]/);
	last_date = main_date.jdate.value.split('-');
	last_date.reverse();
    pr_day = last_date[0] - start_date[0];
    pr_month = last_date[1] - start_date[1];
    pr_year = Math.round(getDecimal(last_date[2]*0.01 - start_date[2]*0.01)*100);

    if(pr_month>=0) flag = 1;
    else flag = 0;
    
    if(start_date.length < 3) flag = 2 ;
    if (start_date[1] === 2 && start_date[0] > 28) flag = 2;
    if (last_date[2] - start_date[2] < 0 || pr_year>90 ) flag = 2;
    if(pr_year === 0 && pr_month<0) flag = 2;
    if(pr_year === 0 && pr_month<=0 && (last_date[0] - start_date[0] < 0)) flag =2;
/*Вычисление*/
   switch(flag){
   	case 1:

    if(start_date[1] % 2 === 0){
      if(pr_month === 0){
      	end_hours = Math.abs(pr_day) * 24;
      }
      else if (start_date[1] === 2){
        start_hours = (28 - start_date[0]) * 24;
        end_hours = last_date[0] * 24 + start_hours;  	
      }
      else{
      	start_hours = (30 - start_date[0]) * 24;
        end_hours = last_date[0] * 24 + start_hours;   
      }

      if(pr_month > 1){
      	while(pr_month > 1){     		
      	    end_hours = end_hours + 744;
      		--pr_month;
      	}
      }
      if(pr_year >= 1){
      	if (pr_month !== 0){
      	  while(pr_year >= 1){
      		end_hours = end_hours + 8760;
      		--pr_year;
      	  }
        } 
        else end_hours = pr_year*8760 - end_hours;    	
      }

            	    
      finish = Math.floor(end_hours / 24);
      if(pr_day > 1){
          --finish;
      	}
    }
    else{
      if(pr_month === 0){
      	end_hours = Math.abs(pr_day) * 24;
      }
      else{
        start_hours = (31 - start_date[0]) * 24;
        end_hours = last_date[0] * 24 + start_hours;      	
      }

      if(pr_month > 1){
      	while(pr_month > 1){
      		end_hours = end_hours + 744;
      		--pr_month;
      	}
      }
      if(pr_year >= 1){
      	while(pr_year >= 1){
      		end_hours = end_hours + 8760;
      		--pr_year;
      	}      	
      }

      finish = Math.floor(end_hours / 24);
      if(pr_day > 1){
          --finish;
      	}

    }
    break;
    
    case 0:
    let vs;
    if(Math.abs(pr_month) > 1){
      vs = (start_date[0])*24 + (Math.abs(pr_month)-1) * 744;
    }
    else vs = start_date[0] * 24;

     if (last_date[1] % 2 === 0){
       var rest = (30 - last_date[0])*24
     }
     else if (last_date[1] === 2){
     	rest = (28 - last_date[0]) * 24;
     }
     else{
     	rest = (31 - last_date[0]) * 24;
     }
     end_hours = vs + rest;
     finish = Math.floor((pr_year*8760 - end_hours)/24);
    break;

    case 2:
    alert("Дата задана некорректно");
    main_date.final_value.value = "";
    break;
   }

}

function result(){
    allday();
    if (flag !=2) {
	if (main_date.find_value[0].checked){
	 main_date.final_value.value = finish + " дней";	
	}

	if(main_date.find_value[1].checked){
		finish = Math.floor((finish+ty) / 7)*2;
		main_date.final_value.value = finish + " выходных";
	}

	if(main_date.find_value[2].checked){
		finish = Math.floor(finish / 7)*5 +ty1;
		main_date.final_value.value = finish + " рабочих дней";
	}	

	if(main_date.find_value[3].checked){
		finish = Math.floor(finish / 7);
		main_date.final_value.value = finish + " недель";
	}	

	if(main_date.find_value[4].checked){
		if (finish == 30) finish = (finish / 30);
	    if (finish == 28) finish = (finish / 28);
		else finish = Math.floor(finish / 31);
		main_date.final_value.value = finish + " месяцев";
	}
	
	}		
}