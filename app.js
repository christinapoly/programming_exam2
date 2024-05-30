"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function



// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const posts = await getPosts();
  displayPostsGrid(posts);
}


//Fetch data from Wordpress
async function getPosts() {
  const response = await fetch(
    "https://onlineshop.cpolyzogo.dk/wp-json/wp/v2/posts?acf_format=standard"
  ); 
  const data = await response.json();
  return data;
}


//Display the posts
function displayPostsGrid(posts) {
  const postsGrid = document.querySelector("#posts-grid");

  for (const post of posts) {
    postsGrid.insertAdjacentHTML(
      "beforeend",
      `<article class="grid-item">
        <img src="${post.acf.image}" alt="${post.title.rendered}" />
        <h2>${post.title.rendered}</h2>
        <h3>${post.acf.description}</h3>
      </article>`
    );
  }

}