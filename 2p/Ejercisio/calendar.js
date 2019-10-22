class Calendar{
    PrintCalendar(m,y){
        let diasMes = 0, inicioMes = 0, contador = 1, asignadorDias = 1;
        let calendar = new Array(6);
        
        for(let i = 0;i <=5; i++){
            calendar[i]=new Array(7);
        }

        let primerDiaAno = this.FirstDay(y), visiesto = this.IsLeapYear(y);
        
        switch(m){
            case 1:
                diasMes = 31;
                inicioMes = primerDiaAno;
                break;
            case 2:
                diasMes = 28;
                inicioMes = this.TodayPlus(primerDiaAno, 31);
                break;
            case 3:
                if(visiesto){
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 60);
                }
                else{
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 59);
                }
                
            case 4:
                if(visiesto){
                    diasMes = 30;
                    inicioMes = this.TodayPlus(primerDiaAno,91);    
                }
                else{
                    diasMes = 30;
                    inicioMes = this.TodayPlus(primerDiaAno,90);    
                }
                break;
            case 5:
                if(visiesto){
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 121);
                }
                else{
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 120);
                }
                break;
            case 6: 
                if(visiesto){
                    diasMes = 30;
                    inicioMes = this.TodayPlus(primerDiaAno, 152);
                }else{
                    diasMes = 30;
                    inicioMes = this.TodayPlus(primerDiaAno, 151);
                }
                
                break;
            case 7:
                if(visiesto){
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 182);
                }
                else{
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 181);
                }
                break;
            case 8:
                if(visiesto){
                    diasMes =   31;
                    inicioMes = this.TodayPlus(primerDiaAno, 213);
                }else{
                    diasMes =   31;
                    inicioMes = this.TodayPlus(primerDiaAno, 212);
                }
                break;
            case 9:
                if(visiesto){
                    diasMes = 30;
                    inicioMes = this.TodayPlus(primerDiaAno, 244);
                }else{
                    diasMes = 30;
                    inicioMes = this.TodayPlus(primerDiaAno, 243);
                }
                break;
            case 10:
                if(visiesto){
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 274);
                }
                else{
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 273);
                }
                break;
            case 11:
                if(visiesto){
                    diasMes = 30;
                    inicioMes = this.TodayPlus(primerDiaAno, 305);
                }
                else{
                    diasMes = 30;
                    inicioMes = this.TodayPlus(primerDiaAno, 304);
                }
                break;
            case 12:
                if(visiesto){
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 335);
                }else{
                    diasMes = 31;
                    inicioMes = this.TodayPlus(primerDiaAno, 334);
                }
                break;
        }

        for(let i = 0; i<6;i++){
            if(i == 0){
                for(let j = 0;j<7; j++){

                    switch(inicioMes) {
                        case 1:
                            calendar[i][j] = 'D';
                            inicioMes++;
                        break;
                        case 2:
                            calendar[i][j] =  'L';
                            inicioMes++;
                        break;
                        case 3:
                            calendar[i][j] = 'M';
                            inicioMes++;
                        break;
                        case 4:
                            calendar[i][j] =  'M';
                            inicioMes++;
                        break;
                        case 5:
                            calendar[i][j] = 'J';
                            inicioMes++;
                        break;
                        case 6:
                            calendar[i][j] = 'V';
                            inicioMes++;
                        break;
                        case 7:
                            calendar[i][j] = 'S';
                            inicioMes++;
                        break;
                        default:
                            inicioMes =1;
                            j--;
                    }
                   
                   /* if(inicioMes == 7){
                        if(inicioMes == 7 && calendar[inicioMes-6] == null && j!=0){
                            inicioMes=1;
                        };
                    }*/

                }
                
            }
            else{
                for(let j = 0; j<7;j++){
                    if(contador<=diasMes){
                        calendar[i][j] = asignadorDias;
                        asignadorDias++;
                        contador++;
                    }
                }
            }
        }


        return calendar
    };

    FirstDay(year)
    {
      
        let y = year, day = ( y + Math.floor((y -1 ) / 4) - Math.floor((y - 1/100)) + Math.floor((y - 1/400)) ) % 7;
      
        switch (day) {
            case 1:
                return 1;
            break;
            case 2:
                return 2;
            break;
            case 3:
                return 3;
            break;
            case 4:
                return 4;
            break;
            case 5:
                return 5;
            break;
            case 6:
                return 6;
            break;
            case 7:
                return 7;
            break;
            default:
                break;
        }
    };
    

    IsLeapYear(year)
    {
        let año = year;

        if((año%4 == 0 && año%100 == 0 && año%400 == 0) || año%4 == 0 && año%100 != 0 ){
           
            return true;   
        }
        else{
            return false;
        }
    };

    TodayPlus(dia,aumento)
    {
        return (dia + aumento) % 7;
    };

};

const calendario = new Calendar();
console.log(calendario.IsLeapYear(2000))
console.log(calendario.TodayPlus(1,3))
console.log(calendario.FirstDay(2018))
console.log(calendario.PrintCalendar(10,2019));




