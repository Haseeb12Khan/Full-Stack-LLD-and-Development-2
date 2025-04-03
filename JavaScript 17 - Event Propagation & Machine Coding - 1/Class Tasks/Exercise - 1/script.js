// TODO:
// 1. Get the grandparent, parent, and child elements.
// 2. Add a click event listener to each element.
// 3. When an element is clicked, log the current target.

let grandParent = document.getElementById("grandparent");
let Parent = document.getElementById("parent");
let Child = document.getElementById("child");

grandParent.addEventListener("click",function() {
    console.log("grandParent is clicked");
});

Parent.addEventListener("click",function() {
    console.log("Parent is clicked");
});

Child.addEventListener("click",function() {
    console.log("Child is clicked");
});