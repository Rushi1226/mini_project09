  
//    create xmlhttprequest object
const http = new XMLHttpRequest();   

function reportStatus() {
    if (http.readyState == 4)               // Request completed.
        showTheList(this.responseText);     // Show the data.
}

http.onreadystatechange = reportStatus;
http.open("GET", "../../mini_project_company-main/db.json", true);   // true = asynchronous request, false = synchronous request.
http.send();

function showTheList(json) {
    let arrItems = [];
    arrItems = JSON.parse(json); 	// Populate array with JSON data.

    let div = document.getElementById('container');  // The container.
    div.innerHTML = '';

    // Loop through data in the JSON array.
    for (let i = 0; i <= arrItems.length - 1; i++) {

      
        // Create an <img> element.
        let img = document.createElement('img');
        img.src = arrItems[i].Image;  // The image source from JSON array.

        let divRight = document.createElement('div');
       
        divRight.appendChild(img);

        // Add the child DIVs to parent DIV.
      
       div.appendChild(divRight);


    }
}





















//suggestion slider

let userCardContainer = document.querySelector('.suggestion-container');
let nxtArrow = document.querySelector('.nxt-arrow');
let preArrow = document.querySelector('.pre-arrow');

let containerDimensions = userCardContainer.getBoundingClientRect();  //this will return the dimensions of usercardcontainer with width height all
let containerWidth = containerDimensions.width;    //we want only width

nxtArrow.addEventListener('click', () => {
    userCardContainer.scrollLeft += containerWidth;
})

preArrow.addEventListener('click', () => {
    userCardContainer.scrollLeft -= containerWidth;
})


