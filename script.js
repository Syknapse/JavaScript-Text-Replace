var ourHeadline = document.getElementById('our-headline');
var listItems = document.getElementById('our-list').getElementsByTagName('li');
var ourButton = document.getElementById('our-button');
var ourList = document.getElementById('our-list');
var newItemCounter = 1;

// add click event listener to each item in the ul then run activateItem function
// for (i = 0; i < listItems.length; i++) {
// 	listItems[i].addEventListener('click', activateItem);
// } this does not account for new items created instead:

//listen to a click event on the parent of list items
ourList.addEventListener('click', activateItem);

// when an item is clicked run this: it selects headline and changes its inner html
function activateItem(e){
	// add if statement to make sure this function runs only if an li is clicked
	if (e.target.nodeName == 'LI') {
		ourHeadline.innerHTML = e.target.innerHTML;
		//remove class active. This ensures that only the clicked item gets the class
		for (i = 0; i < e.target.parentNode.children.length; i++) {
			e.target.parentNode.children[i].classList.remove('active');
		}
		// add a class to clicked item to give it special styling
		e.target.classList.add('active');
	}
}

// new item button add click event listener, run createNewItem function
ourButton.addEventListener('click', createNewItem);

// select the inner html of the list, add(+=)[= will substitute] the new li 
function createNewItem(){
	ourList.innerHTML += '<li>Jelly Valley ' + newItemCounter + '</li>';
	// add 1 to the newitemcounter var every time the code runs
	newItemCounter++;
}