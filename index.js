// 1. ana to vori

function anaToVori(vori)
{
    if(vori <0)
     {
        console.log('neg number cant be count, give a positive value');
     } 
     else{
        const ana = vori /16;
        console.log(ana);
     }
}
anaToVori(-32);
anaToVori(32);

// 2. cost output

function pandaCost(singara, samucha, jilapi) {
    if (typeof singara != 'number' && typeof samucha != 'number' && typeof jilapi != 'number') {
        return 'Please Enter a Valid Input';
    }
    const singaraPrice = singara * 7;
    const samuchaPrice = samucha * 10;
    const jilapiPrice = jilapi * 15;
    const totalSnacksPrice = singaraPrice + samuchaPrice + jilapiPrice;
    return totalSnacksPrice;
}
const quantityOfSnacks = pandaCost(1, 1, 1);
console.log(quantityOfSnacks);
const quantityOfSnacks2 = pandaCost(1, 10, 1);
console.log(quantityOfSnacks2);

// 3. prinic budget

function picnicBudget(person){
   if(person == 0){
       return 'taka dibo na '
   }
    else if(person <= 100)
    {
    const picnicFair  = person * 5000;
    return picnicFair;
    }
    else if(person > 100 && person <= 200)
    {
        const bill = person - 100;  
    
        return (100 * 5000) + (bill * 4000);
    }
    else 
    {
        const bill2 = person - 200;

        return (100 * 5000) + ( 100 * 4000)+(bill2*3000);
    }
}
console.log(picnicBudget(50));
console.log(picnicBudget(230));
console.log(picnicBudget(180));

//first odd friend name

function oddFriend(array) {
  for (const element of array) {
    if (element.length % 2 == 1) {
      return element;
    }
  }
}
const friendlist = ['rahi','mahi','jodu','modu','rahim','karim'];
console.log(oddFriend(friendlist));