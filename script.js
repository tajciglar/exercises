const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

console.log(myLibrary);

document.addEventListener('DOMContentLoaded', function() {
    function displayLibrary() {
        
        const deleteForm = document.getElementById("books");
        books.innerHTML = "";

        const booksContainer = document.getElementById("books");
        myLibrary.forEach((book) => {
            const bookElement = document.createElement("p");
            bookElement.textContent = `Title: ${book.title},  Author: ${book.author}, Pages: ${book.pages}`;
            booksContainer.appendChild(bookElement);
        });
    }


    const addBook = document.getElementById("addBook");
    addBook.addEventListener("click", () => {

        const form = document.createElement("form");
        form.setAttribute("id", "bookForm");

        const newbook = document.getElementById("books");
        newbook.appendChild(form);

        const formElement = document.getElementById("bookForm");

        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("name", "title");
        title.setAttribute("placeholder", "Title");

        const author = document.createElement("input");
        author.setAttribute("type", "text");
        author.setAttribute("name", "author");
        author.setAttribute("placeholder", "Author Name");

        const pages = document.createElement("input");
        pages.setAttribute("type", "text");
        pages.setAttribute("name", "pages");
        pages.setAttribute("placeholder", "Number of pages");

        formElement.appendChild(title);
        formElement.appendChild(author);
        formElement.appendChild(pages);

        const submit = document.createElement("input");
        submit.setAttribute("type", "submit");

        formElement.appendChild(submit);

        // Add a submit event listener to the form
        formElement.addEventListener("submit", function(event){
            event.preventDefault(); // Prevent the default form submission behavior

            const titleInput = document.querySelector('input[name="title"]');
            const authorInput = document.querySelector('input[name="author"]');
            const pagesInput = document.querySelector('input[name="pages"]');

            const titleValue = titleInput.value;
            const authorValue = authorInput.value;
            const pagesValue = pagesInput.value;

            // Call the function to add the book to the library
            addToLibrary(titleValue, authorValue, pagesValue);
            
            console.log( titleInput.value)
             // Clear the form input fields
             titleInput.value = "";
             authorInput.value = "";
             pagesInput.value = "";
             console.log( titleInput.value)
            // Redisplay the updated library
            displayLibrary();
        });
    });
});



