var sum = 0;
var count = 0;
var arr = [];

function random() {
    console.log("am here");
    for (var i = 0; i < 10000; i++){
        arr.push(Math.floor(Math.random()*1000)+ 1);
    }   
    
    var filtered_num = arr.filter(function (ran_num) {
        return ran_num > 500; 
    }); 

    console.log(filtered_num);
    var finalSum = 0;
    finalSum = filtered_num.reduce(function(sum, ran_num, index, filtered_num ) {
              return sum += ran_num;

        }, 0);

    console.log(finalSum);
    avg = finalSum/filtered_num.length;
    postMessage(avg);

    
}    
    	
random ();