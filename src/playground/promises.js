const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('this is my resolved data');
    },1500)
});
//promise executes using its time .... it can database querrying or any time taking task
console.log('before');
promise.then((data) => {    // when the promise is complete then run this 
    console.log(data);
});
console.log('after');