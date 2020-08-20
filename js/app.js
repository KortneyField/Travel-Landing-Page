//GLOBAL VARIABLES
const allSections = document.getElementsByTagName("section");
const navigation = document.getElementsByTagName("nav")[0];
const navList = document.getElementById("navbar__list");
const list = document.getElementsByTagName("li");

console.log(list);

// BUILDING THE NAVIGATION FUNCTION
function buildingNav(){
    for(const section of allSections){
        //console.log(section);
        //grabbed the section created's data-nav word. 
        const sectionTitle = section.dataset.nav;
        // adding a list element/node
        const node = document.createElement("li"); 
        const linkNode = document.createElement("a");
        //created a variable with the section title as its value.
        const textnode = document.createTextNode(sectionTitle); // Create a text node
        //combined the section to the link as its child and gives text to the li. 
        linkNode.appendChild(textnode);
        //added the id and named it
        node.id = sectionTitle; 
        //node.className = "activeState"
        //linkNode.href = "#"; 
        //combined the list node to the navigation bar.
        node.appendChild(linkNode)
        navList.appendChild(node);
        //section.className ="your-active-class-hvr"

        //SCROLL SMOOTHLY FUNCTION INSIDE THE buildNav(). 
        linkNode.addEventListener("click", function() {
          console.log(`the ${sectionTitle} button was clicked`);
          document.getElementById(section.id).scrollIntoView({behavior: "smooth"});
          
          //GRABBING THE PRESENT ACTIVE STATE CLASS
          //var element = document.getElementsByClassName("activeState");
          //console.log(element); 
          
          //**NEED TO SWITCH IT OFF WITH NOT ACTIVE.
          //element.classList.remove("activeState");
          //console.log(element);
          
          //SWITCHING CURRENT CLASS TO ACTIVE. 
          //node.className = "activeState"
          //section.className ="your-active-class"
          }
        );
    }
}
buildingNav(); 



//EVENT LISTENERS
const pageClicked = document.querySelector('body');
pageClicked.addEventListener('click', function () {
    console.log('The landing page was clicked!');
    }
);

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

// ACTIVE VIEW STATE 
let isInView = function (section) {
  let distance = section.getBoundingClientRect();
  //console.log(section);
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
);
};

function activeSection (currentSection){
  currentSection.classList.add('active');
}



window.addEventListener('scroll', function (event) {
  for(const section of allSections){
      //console.log(element);
      if (isInView(section)) {
        //deactivateSections();
        activeSection(section);
        console.log('In viewport!');
      } else if(window.scrollY==0) {
        //deactivateSections();
        //deactivateNavLinks();
        console.log('Not in Viewport');
      } //false);
  }
});