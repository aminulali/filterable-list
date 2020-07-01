// get input element
let filterInput = document.getElementById('filterInput');
// add event listener. Each key press executes function
filterInput.addEventListener('keyup', filterNames);

// function which filters names based on user input
function filterNames() {
    // get value of user input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // stores ul element
    let ul = document.getElementById('names');
    // Get li elements from ul element. Returns an array.
    let li = ul.querySelectorAll('li.collection-item');

    // loops through li elements from collection-item
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        // If matches
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}