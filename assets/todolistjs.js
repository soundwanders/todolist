// create close button and append it to each list item
var myNodeList = document.getElementsByTagName("LI");   // get list items
var pie; // var pie is a number here
for (pie = 0; pie < myNodeList.length; pie++) {
    var span = document.createElement("SPAN") // get span
    var txt = document.createTextNode("\u00D7") //what is u00D7 ?
    span.className = "close"; //close button
    span.appendChild(txt);      //add span to txt node \u00D7
    myNodeList[pie].appendChild(span); //add span to myNodeList
}

// click on close button to hide current list item
var close = document.getElementsByClassName("close");
var pie; 
for (pie = 0; pie < close.length; pie++) { 
        close[pie].onclick = function() {  
        var div = this.parentElement;
        div.style.display = "none";
        }
}

// adding check when mouseclick on completed list items
var list = document.querySelector("ul");    // get list
list.addEventListener('click', function(ev) {       // add event listener for click, function ev is the click itself
    if (ev.target.tagName === 'LI') {     // === is used to check datatype and compare variables / values
        ev.target.classList.toggle('checked');      // toggles check on/off after if statement check
    }
}, false);

// If the clicked event is a list item
var item = event.target.closest('#myUL');
if (item) {
    if (item.checked) {
        item.closest('li').className = 'completed';
        item.setAttribute('checked' , 'checked');
    } else {
        item.closest('li').className = '';
        item.removeAttribute('checked');
    }
}


// create a new list item when clicking on Add button
function newElement () {
    var li = document.createElement("li");  // creates list item element
    var inputValue = document.getElementById("myInput").value; //gets myInput for new list item
    var rex = document.createTextNode(inputValue);  // create new text node with data of whatever is typed in input bar
    li.appendChild(rex);if (inputValue === '') {    // checks to see if user attempted to add empty list item
        alert("You didn't type anything.") // if empty, displays alert
    } else {
        document.getElementById("myUL").appendChild(li); // otherwise append list item to the to do list"
    }
    document.getElementById("myInput").value = "";  // gets user input
    var span = document.createElement("SPAN");      // create span element
    var txt = document.createTextNode("\u00D7");   
    span.className = "close";   // designate span classname 'close'
    span.appendChild(txt);  // add txt as Child of span
    li.appendChild(span);   //add span as Child to list
    for (pie = 0; pie < close.length; pie++) {  // when adding list item, clears input bar when pie = 0
        close[pie].onclick = function () { //on click empty input bar
            var div = this.parentElement; 
            div.style.display = "none"; // display empty input bar
        }
    }
}

// clear all list items
function removeAll() {
    var smem = document.getElementsByTagName("ul");
        smem[0].innerHTML = "";       
}
