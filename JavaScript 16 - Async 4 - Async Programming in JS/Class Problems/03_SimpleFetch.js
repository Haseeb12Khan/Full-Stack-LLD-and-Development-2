// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.

function fetchCatFact() {
  // Write code here...
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.fact);
    })
    .catch((error) => {
      console.error(error);
    })
}

// Usage:
fetchCatFact();