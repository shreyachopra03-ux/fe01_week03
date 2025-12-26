// WE CANT USE ARRAY METHODS DIRECTLY ON HTML COLLECTION, IT WILL GIVE ERROR !!!!
// CONVERSION OF HTML COLLECTION TO ARRAY IS NEEDED FOR THE ABOVE TO HAPPEN ...
//

// var titles = document.getElementsByClassName('title');
// console.log(Array.isArray('titles'))
// console.log(Array.isArray(Array.from(titles)));  // kisi html collection ko array m convert krna ho toh use this

// Array.from(titles).forEach(function(item){
//     console.log(item);
// })


// +++++++++++++ QUERY SELECTORS  ++++++++++++++++++++
// query slector humesha node list ki form mei dega o/p, hence uspe easily array methods lg skte hai  !!!!!!!!!!!!!!!
// getElementBy Class name, tag name ya id name humesha html collection ek form mei o/p dega use hr baari array mei convert krna pdega pehle to implement all the array methods on it !!!!!!!!!!!

// const wrap = document.querySelector('#book-list')
// console.log(wrap);

// const wmf = document.querySelector('#book-list li:nth-child(2) .name')
// console.log(wmf);


// var books = document.querySelector('#book-list li .name');
// console.log(books);


//  books = document.querySelectorAll('#book-list li .name');
// // console.log(books)

// Array.from(books).forEach(function(book) {
//     console.log(book);
// })



// var books = document.querySelectorAll('#book-list li .name');

// books.forEach(function(book) {
//     book.textContent += ' (book title)';  // Append kra hai yha use 
// })

// const bookList = document.querySelector('#book-list');

// bookList.innerHTML = '<h1>Books & more books....</h1>';
// bookList.innerHTML  += '<p>This is how you add your html tag<p>';


//  ++++++++++++ NODES +++++++++++++++++

// const banner = document.querySelector('#page-banner');

// console.log('#page banner node type is:',banner.nodeType);
// console.log('#page banner name is:',banner.nodeName);
// console.log('#page banner has child nodes:',banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);



// ++++++++++ Traversing the DOM +++++++++++++

// const bookList = document.querySelector('#book-list');

// console.log('the parent node is:',bookList.parentNode);
// console.log('the parent element is:',bookList.parentElement);
// console.log('the parent element is:',bookList.parentElement.parentElement);

// console.log(bookList.childNodes);  // ismei node list aayi hai in o/p
// console.log(bookList.children);    // ismei html collection aayi hai as o/p


 // ++++++++++++ navigating between diff sibling elements ++++++++++++

//  const textbook = document.querySelector('#book-list');
//  console.log('texbook next sibling is:',textbook.nextSibling);
//  console.log('texbook next element sibling is:',textbook.nextElementSibling);

// console.log('textbook previous sibling is:',textbook.previousSibling);
// console.log('textbook previous element sibling is:',textbook.previousElementSibling);

// textbook.previousElementSibling.querySelector('p').innerHTML += '<br/>This is way too cool stufff';


// ++++++++++++ DOM events +++++++++++

// querySelectorAll pr directly kbhi bhi event listener kaam nhi kregaa, pehle use array bnaao tb hi ye sb kr paaoge !!

// const h2 = document.querySelector('#book-list h2');
// console.log(h2);

// h2.addEventListener('click', function(e) {
//     console.log(e);
//     console.log(e.target);
// })

// ++++++++ koi line hi poori del krvaani ho toh isse smjhle bht easy haii +++++++
// const btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
        
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
       
//     })
// })


// ++++++++++  how to prevent a default action from happening ++++++++

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('default action',e.target.textContent,'was prevented'); 
// })


// ++++++++++ Event Bubbling +++++++++++
// upr wali chez ko krne ka more better way 

const list = document.querySelector('#book-list ul');

// // delete books 
// list.addEventListener('click', function(e) {
//     if(e.target.className == 'delete') {
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }

// });


// ++++++++++++++ INTERACTING WITH FORMS ++++++++++

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    


});

// hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked) {
            list.style.display = "none";
        }
        else{
            list.style.display = "initial";
        }
    });

// filter books
const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else{
            book.style.display = 'none';
        }
    })
     
})


// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else{
                panel.classList.remove('active');
            }
        })
    }
})
