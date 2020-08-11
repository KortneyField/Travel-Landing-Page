/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.getElementsByTagName("section");
const navigation = document.getElementsByTagName("nav")[0];
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildingNav(){
    for(const section of allSections){
        console.log(section);
        const sectionTitle = section.dataset.nav;
        const node = document.createElement("li"); // Create a <li> node
        const linkNode = document.createElement("a");
        const textnode = document.createTextNode(sectionTitle); // Create a text node
        linkNode.appendChild(textnode);
        linkNode.href = `#${section.id}`;
        node.appendChild(linkNode);
        navList.appendChild(node);
    }
}

buildingNav(); 

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




//SCROLL TO TOP BUTTON. 
backToTopButton = document.getElementById("scrollTopButton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}