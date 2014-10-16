function fibonacci_set(max){
    if(max > 1){
        var fib_list = [1];
        var current_fib = 1;
        while(current_fib<max){
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length-1] + fib_list[fib_list.length-2];
            console.log(current_fib);
        }
        console.log(fib_list);
        return fib_list;
    }else{
        return [1,1];
    }
    
}



function even(n){
    return n% 2 === 0;
}
    
    
    
function sum(list){
    var real_sum = 0;
    for(var counter = 0; counter < list.length; counter++){
        real_sum += list[counter];
    }return real_sum;
}


function filter(funky, list){
    var filter_list = [];
    for(var i = 0; i<list.length; i++){
        if(funky(list[i]) === true){
            filter_list.push(list[i]);
        }
    }return filter_list;        
}

console.log(sum(filter(even,fibonacci_set(200))));
    
    