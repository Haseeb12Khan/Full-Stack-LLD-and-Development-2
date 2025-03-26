// Task
// Create a random user generator using the "https://randomuser.me/api/" API. 
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:
//     Full Name
//     Email
//     Country
// Handle API errors and provide appropriate feedback if the fetch fails.

document.getElementById("fetchUserBtn").addEventListener("click", function () {
  fetchRandomUser();
});

async function fetchRandomUser() {
  // Write code here...
  try {
    const response = await fetch("https://randomuser.me/api/");

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    console.log(response);

    const data = await response.json();

    const user = data.results[0];
    console.log(user);

    document.getElementById("userName").innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;
    document.getElementById("userEmail").innerText = `Email: ${user.email}`;
    document.getElementById("userCountry").innerText = `Country: ${user.location.country}`;

    document.getElementById("userCard").style.display = "block";
  } catch (error) {
    console.log(error);
  }
}