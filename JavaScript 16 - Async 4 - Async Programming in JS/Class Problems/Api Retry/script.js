// Task
// Implement an API retry mechanism where a request to an invalid API (https://jsonplaceholder.typicode.com/invalid) is attempted up to 3 times before showing an error message.
// Clicking "Retry Fetch" should attempt to fetch the API.
// Show real-time status updates on the page for each attempt.
// If the request fails, retry up to 3 times before displaying a failure message.

document.getElementById("retryFetchBtn").addEventListener("click", () => {
  fetchWithRetry("https://typicode.com/invalid", 3);
});

async function fetchWithRetry(url, retries) {
  const statusElement = document.getElementById("status");

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      statusElement.innerText = `Attempt ${attempt}...`;
      const response = await fetch(url);

      if (!response.ok) {
        if (attempt === retries) {
          statusElement.innerText = `Failed to fetch data after all attempts`;
        } else {
          statusElement.innerText = `Failed to fetch data after ${attempt} attempts. Retrying...`;
        }
      }

      const data = await response.json();
      statusElement.innerText = `Data fetched after ${attempt} attempts`;
      return data;
    } 
    catch (error) {
      console.log(error);
      if (attempt === retries) {
        statusElement.innerText = `Failed to fetch data after all attempts`;
      } else {
        statusElement.innerText = `Failed to fetch data after ${attempt} attempts. Retrying...`;
      }
    }
  }
}
