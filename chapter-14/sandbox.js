//store data in local storage 

/*localStorage.setItem('name', 'James');
localStorage.setItem('age', 55);*/

//get data in local storage


/*let name = localStorage.getItem('name')
let age = localStorage.getItem('age')
console.log(name, 50);
*/

//update date in local storage

/*localStorage.setItem('name', 'hodal');*/

// we can also retrieve item using a dot natation
/*localStorage.age ='40'*/

/*name = localStorage.getItem('name')
age = localStorage.getItem("age")
console.log(name, age);*/

//how to delete an item

/*localStorage.removeItem('name');
name =localStorage.getItem('name') 
console.log(name)
*/


// storing array in local storage
const todos  =[
{text:'play mariokart', autor:'shaun'},
{text:'buy some milk', autor:'mario'},
{text:'buy bread', autor:'steve'}
]
// turning a array into a json string
/*console.log(JSON.stringify(todos));*/
localStorage.setItem('todos', JSON.stringify(todos));
const stored = localStorage.getItem('todos');
/*console.log(stored)*/
//turning back into an array
console.log(JSON.parse(stored))
