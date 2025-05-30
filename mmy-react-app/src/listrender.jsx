function List(){
    /*Rendering of Array of strings into array of lists*/
    const fruits = ["Mango", "Apple", "Bananna", "Papaya"];
    const fruitList = fruits.map(fruit => <li>{fruit}</li>)

    /*Rendering of Array of strings into array of objects*/
    const Fruits = ["Mango", "Apple", "Bananna", "Papaya"];


    return( 
        <>
        <p> list of fruits is: {fruits}</p>
        <p><ol>{fruitList}</ol></p>
        
        </>
        

    );
}

export default List

    /*
    When you use .map() like this in React: 
    const fruitList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

    👇 So what is fruitList?
fruitList is an array of React elements, not strings and not plain HTML.

🔍 Explanation:
Each item like <li>{fruit}</li> is JSX.

JSX gets compiled by Babel into a call to React.createElement(...).

So under the hood, fruitList becomes something like:

[
  React.createElement('li', { key: 0 }, 'Mango'),
  React.createElement('li', { key: 1 }, 'Apple'),
  ...
]

🔧 Type:
If you check the type of fruitList in the browser:

console.log(typeof fruitList); // 'object' (it's an array)
console.log(Array.isArray(fruitList)); // true

Each element in the array is a React element, which is a JavaScript object representing what should appear on the screen—not actual HTML or string.

💡 Summary:
Item	Type
fruits	Array of strings
fruitList	Array of React elements (JSX converted)
Rendered output	HTML (after React processes it)

Let me know if you want to see how JSX gets compiled under the hood!

    
    */