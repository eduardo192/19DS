

const year = (x) => {
    let año = x;

    if((año%4 == 0 && año%100 == 0 && año%400 == 0) || año%4 == 0 && año%100 != 0 ){
        /*if(año%100 == 0){
            if(año%400 == 0){
                console.log("El año: " + año + " es bisisto.");    
            }
            else{
                console.log("El año: "+año+" no es bisietso.");
            }
        }
        else{
            console.log("El año: " + año + " es bisisto.");
        } */
        return "El año: " + año + " es bisisto.";   
    }
    else{
        return "El año: "+año+" no es bisietso.";
    }
}
console.log(year(1200));