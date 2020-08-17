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
        //grabbed the section created's data-nav word. 
        const sectionTitle = section.dataset.nav;
        // adding a list element 
        const node = document.createElement("li"); // Create a <li> node
        //created a link element to the list node.
        const linkNode = document.createElement("a");
        //created a variable with the section title as its value.
        const textnode = document.createTextNode(sectionTitle); // Create a text node
        //combined the section to the link as its child. 
        linkNode.appendChild(textnode);
        //combined the section id value to the link pointer. ***THIS IS WHERE I NEED TO ADD THEE SMOOTH FACTOR****
        linkNode.href = `#${section.id}`;
        //combined the entire linknode to the list node. 
        node.appendChild(linkNode);
        //combined the list node to the navigation bar. 
        navList.appendChild(node);
    }
}
buildingNav(); 

//I want to take the link from the nav list node and scroll smoothly to scetion.id.  
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
