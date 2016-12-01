let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge'},
  {author: 'Haruki Murakami', title: '1Q84'},
  {author: 'John D MacDonald', title: 'Nightmare in Pink'},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6'}
]
let student= [
{noor: 'Thomas Pynchon'},

]
function titlSearch () {
  let aName = document.getElementById('titleSearch').value
  let name = books.filter((x) => x.title === aName)
  try {
    document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].title
  }
  catch (err) {
    document.getElementById('result').innerHTML = 'sorry no books by ' + aName
  }
}

function addBook () {
  books.push({title:document.getElementById('Book').value,title:document.getElementById('title').value})
  document.getElementById('Book').value=""
  document.getElementById('title').value=""
}

function showAllBooks () {
  let listItem = document.createElement('li')
  let textnode = document.createTextNode('a book')
  listItem.appendChild(textnode)
  document.getElementById('allTheBooks').appendChild(listItem)
}



function useraccount() {
  student.push({title:document.getElementById('name').value,title:document.getElementById('card').value})
  document.getElementById('name').value=""
  document.getElementById('card').value=""
}