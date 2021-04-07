// create close button and append it to each list item
const getListItem = document.getElementsByTagName('LI'); // get list items
var n; // var name 'n' is arbitrary, it acts as a number here

for (n = 0; n < getListItem.length; n++) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close'; // close button
  span.appendChild(txt); // add span to txt node \u00D7
  getListItem[n].appendChild(span); // add span to getListItem
}

// click on close button to hide current list item
const close = document.getElementsByClassName('close');
var n;
for (n = 0; n < close.length; n++) {
  close[n].onclick = function () {
    const div = this.parentElement;
    div.style.display = 'none';
  };
}

// adding check when mouseclick on completed list items
const list = document.querySelector('ul'); // get list
list.addEventListener('click', function (ev) { // add event listener for click, function ev is the click itself
  if (ev.target.tagName === 'LI') { // === is used to check datatype and compare variables / values
    ev.target.classList.toggle('checked'); // toggles check on/off after if statement check
  }
}, false);

// If the clicked event is a list item
const item = e.target.closest('#toDoList');
if (item) {
  if (item.checked) {
    item.closest('li').className = 'completed';
    item.setAttribute('checked', 'checked');
  } else {
    item.closest('li').className = '';
    item.removeAttribute('checked');
  }
}

// create a new list item when clicking on Add button
function newListElement () {
  const li = document.createElement('li'); // creates list item element
  const inputValue = document.getElementById('myInput').value; // gets myInput for new list item
  const rex = document.createTextNode(inputValue); // create new text node with data of whatever is typed in input bar

  li.appendChild(rex); if (inputValue === '') { // checks to see if user attempted to add empty list item
    alert("You didn't type anything."); // if empty, displays alert
  } else {
    document.getElementById('toDoList').appendChild(li); // otherwise append list item to the to do list"
  }
  document.getElementById('myInput').value = ''; // gets user input

  const span = document.createElement('SPAN'); // create span element
  const txt = document.createTextNode('\u00D7');
  span.className = 'close'; // designate span classname 'close'
  span.appendChild(txt); // add txt as Child of span
  li.appendChild(span); // add span as Child to list

  for (n = 0; n < close.length; n++) { // when adding list item, clears input bar when n = 0
    close[n].onclick = function () { // on click empty input bar
      const div = this.parentElement;
      div.style.display = 'none'; // display empty input bar
    };
  }
}

// clear all list items
function removeAll () {
  const grabList = document.getElementsByTagName('ul');
  grabList[0].innerHTML = '';
}
