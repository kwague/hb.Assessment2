///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//calculates the sum of groceries using the reduce method

cartTotal = cart.reduce((accum, currvalue) => {
    const price = currvalue.price;
    return accum + price ;
},0)

console.log(cartTotal)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//calculates item cost plus tax

const calcFinalPrice = ((cartTotal, couponValue, tax) => {
    totalWithTax = cartTotal + (cartTotal * tax); 
    return totalWithTax - couponValue
})


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    My cutomer object would have: 
    1. The customers full name because we need to be able to associate 
    their cart with part of their identity. This will be a string
    2. The items in their cart, with the associated prices so that we can calculate their total. These
    will be an array 
    3. Their shipping option so that they can select how soon they want to recieve 
    their items. This will also be a string
    4. Customer email address to send them their cart info in detail. This will be a string

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//customer object with name, cart info, shipping option, and email

const customerOne = {
    name: 'firstName lastName', 
    cartInfo: [{tShirt: 34.99}, {sweats: 54.99}, {beanie: 23.99}],
    shipOption: '2-Day Express',
    email: 'customerOne@email.com'

}
