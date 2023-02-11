const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {

  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

let searchTerm = ""
const login_btn = document.querySelector("#searchs");
login_btn.addEventListener('keypress', (event) => 
{ if (event.key === "Enter") { 
  event.preventDefault();
   localStorage.setItem('searchVal', searchTerm); 
   console.log(searchTerm); 
   window.location.href = "./mens.html"; 
  } 
   else { 
    searchTerm += event.key; 
  } })

// Make API request to server for logining the new user.
