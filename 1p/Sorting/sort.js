function sorted(array){
    let flag = true;
    for(let i = 0, t = 1; i < array.length-1; i++, t++){
        if(!(array[i] <= array[t])){
            flag = false;
            break;
        }            
    }
    return flag;
}

console.log(sorted([1,2,3]));