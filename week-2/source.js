const hamburger = document.getElementById('hamburger');
const navbarLink = document.getElementById('navbarLink');

hamburger.addEventListener('click', function () {
    if (navbarLink.style.display === 'block') {
        navbarLink.style.display = 'none';
    } else {
        navbarLink.style.display = 'block';
    }
});


function handleWindowResize() {
    const windowWidth = window.innerWidth; 
  
    if (windowWidth > 768) {
      navbarLink.style.display = 'flex';
    } else {
        navbarLink.style.display = 'none';
    }
  }
  
window.addEventListener("resize", handleWindowResize);
  
handleWindowResize();
  


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const username = document.getElementById("username").values;
    const email = document.getElementById("email").values;
    const password = document.getElementById("password").values;
    
    console.log(username);
    console.log(email);
    console.log(password);
});

