const person = {
    name: 'andrew',
    age: 27,
    location: {
        city: 'bang',
        temp:92
    }
};

const {name, age} = person; //rhs=object we are trying to destructure.. this line is similar to below code..
// const name = person.name;
// const age = person.age;
console.log(`${name} is ${age}`);

//example in below case.. so many times we are using person.location.city and person.loaction.temp
// if(person.location.city&&person.location.temp){
// console.log(`its ${person.location.temp} in ${person.location.city}`);
// }
const {city , temp : t} = person.location; // we set temp var to t ,
//we can write the above code in simplified version 
if(city&&t){
console.log(`its ${t} in ${city}`);
}
// if we want to create some default variable , which is not defined in the object we can create it by
const {status="maried"} = person;
console.log(status);

const book = {
    titles:'ego',
    author: 'some',
    publisher : {
        name: 'penguin'
    }
}
const {publisher: publisherName = "anonymous"} = book;
console.log(publisherName);


//array destructuring

const address = ['12 south jutiper','bangalore','jharkhand','123456'];
const [,citi,state,pin,phone = "9108"] = address; // ll skip the first item // default item
console.log(`this is ${city} ${state} and no is ${phone}`);

const obj = [{
    name: 'some',
    pub: 'pubg'
},
{
    name: 'bang',
    ph: 234
}];

const [o1,o2] = obj;
console.log(o1.name);
console.log(o2.name);