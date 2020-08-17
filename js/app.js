/**
 * Define Global Variables
 * 
*/
const allSections = document.getElementsByTagName("section");
const navigation = document.getElementsByTagName("nav")[0];
const navList = document.getElementById("navbar__list");

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

function myFunction() {
  var elmnt = document.getElementById();
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'end'});
}



//EVENT LISTENERS
const pageClicked = document.querySelector('body');
pageClicked.addEventListener('click', function () {
    console.log('The landing page was clicked!');
  });

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


//SCROLL TO FUNCTION
