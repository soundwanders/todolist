
// create close button and append it to each list item
var myNodeList = document.getElementsByTagName("LI");

var pie; // var pie is a number here
for (pie = 0; pie < myNodeList.length; pie++) {
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7")
    // u00D7 unicode multiplication sign..creates X?
    span.className = "close";
    span.appendChild(txt);  
    myNodeList[pie].appendChild(span); // append]
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
var list = document.querySelector('ul'); //returns first element 'ul' that is descendant of node?
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'li') {     // === is used to check datatype and compare variables / values
    ev.target.classList.toggle('checked'); // toggles check on/off after if statement check
    }
}, false); 


// create a new list item when clicking on Add button
function newElement () {
    var li = document.createElement("li"); 
    var inputValue = document.getElementById("myInput").value;
    var rex = document.createTextNode(inputValue);
    li.appendChild(rex);if (inputValue === '') {
        alert("You didn't type anything.") // if empty, displays alert
    } else {
        document.getElementById("myUL").appendChild(li); // otherwise append item entry to list
    }
    
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (pie = 0; pie < close.length; pie++) {
        close[pie].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// clear all list items
function removeAll() {
    var smem = document.getElementsByTagName("ul");
        smem[0].innerHTML = "";       
}