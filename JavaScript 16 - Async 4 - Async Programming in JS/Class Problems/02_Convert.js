// Task:
// Take the fakeDownload function and refactor it to return a Promise instead of using a callback.

function fakeDownload(url) {
  // Write code here...
  console.log(`Downloading from ${url}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download complete!");
    },2000);
  })
}

// Usage:
fakeDownload("https://example.com/file")
  .then((message) => console.log(message)); // Expected Output: "Download complete!" (after 2 sec)