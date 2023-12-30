///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays.
*/


//////////////////PROBLEM 1////////////////////
/*
    Create an object called `pizza` that has 6
    properties:
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//creation of object called pizza with 6 properties

let pizza = {name: 'cheese', 
    price: 2.99, 
    category: 'quick-eats', 
    popularity: 2,
    rating: 4.6, 
    tags: ['kids','non-vegan', 'finger-foods']}

//console.log(pizza)



//////////////////PROBLEM 2////////////////////
/*
    Let's print a few values from our pizza object.

    First, log the popularity of pizza.
    Use dot notation to access the value.
*/

//printing the popularity of object pizza using dot notation

console.log(pizza.popularity)



/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//printing secong tag for pizza using bracket notation

console.log(pizza.tags[1])



/*
    Third, destructure the price off of the
    pizza object.

    Print the value of your new price variable.
*/

//Retrieving price  of 'pizza'

const {price} = pizza
//console.log(price)



/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable.
*/

//Retrieving the category of 'pizza'

const {category} = pizza 
//console.log(category)

//////////////////PROBLEM 3////////////////////
/*
    Create an array with 4 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//object with 4 new food items

const foodArr = [ 
    {name: 'lasagna', 
    price: 11.99, 
    category: 'dinner', 
    popularity: 1,
    rating: 5.0, 
    tags: ['dinner', 'pasta', 'non-vegan']}, 

    {name: 'chicken parm sandwich', 
    price: 9.99, 
    category: 'sandwich', 
    popularity: 3,
    rating: 4.3, 
    tags: ['dinner', 'sandwich', 'gluten']}, 

    {name: 'burger deluxe', 
    price: 7.99, 
    category: 'sandwich', 
    popularity: 4,
    rating: 4.5, 
    tags: ['kids', 'non-vegan', 'gluten']}, 

    {name: 'mozzarella sticks', 
    price: 5.99, 
    category: 'appetizer', 
    popularity: 5,
    rating: 3.9, 
    tags: ['kids', 'dairy', 'finger-foods']}
]

//console.log(foodArr)

//////////////////PROBLEM 4////////////////////
/*
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag
    of your choice.

    For example, you could return only the food objects
    which have "vegetarian" inside of their tags arrays.

    You can choose any tag that at least 1 of
    your food objects has.
*/

//filtering food that are for kids

const filteredTag = foodArr.filter( item  => {
    return item.tags.includes('gluten')
} )

console.log(filteredTag)



//////////////////PROBLEM 5////////////////////
/*
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for
    food that has above a certain rating,
    or is above a certain price.

    Write a function called `filterByProperty`
    that takes in two arguments: `property` and
    `number`

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against

    For example, calling filterByProperty('rating', 5)
    would return all the menu items with a rating above 5.

    And calling filterByProperty('price', 12)
    would return all the menu items with a price above 12.

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr. Return objects
    whose value for the given property is greater than the
    `number` passed in.

    Return the filtered array from the entire function
*/

//Allow customers to filter by rating or price 

const filterByProperty = ((property, number) => {
        let filteredValues = [];
        foodArr.filter(item => {
            if (item[property] > number) {
            filteredValues.push(item.name)
        }})
        return filteredValues
    } )
    

/*
    Invoke the `filterByProperty` function, passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/

//testing the function above with a property of price and number of 10

console.log(filterByProperty('price', 5))