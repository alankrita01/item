

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent='Hello';
console.log(document.forms);
console.log(document.links);//



console.log(document.images);


//selectors
//getelementbyID

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent= 'Hey';
headerTitle.innerText = 'Goodbye';

headerTitle.innerHTML = '<h3>Hello</h3>'

header.style.borderBottom='solid 3px #000';

//getElementByClassname

var items=document.getElementsByClassName('title');
items[0].style.fontWeight='bold';
items[0].style.color='green';