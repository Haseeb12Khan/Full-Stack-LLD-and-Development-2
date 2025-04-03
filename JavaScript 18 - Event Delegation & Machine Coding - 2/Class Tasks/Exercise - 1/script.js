// TODO
// 1. Get the clicked element
// 2. Check if the clicked element is a product
// 3. Get the category and product names from the clicked element
// 4. Log the category and product names to the console

const categoryArray = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product");
const categories = document.querySelector("#categories");

categories.addEventListener('click',(event) => {
    const product = event.target;
    const category = product.parentElement;
    console.log("Product:- ",product.textContent);
    console.log("Category:- ",category.querySelector('h2').textContent);
});