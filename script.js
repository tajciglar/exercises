
    const myLibrary = [];

    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    function addToLibrary(){
        myLibrary.push(new Book(title, author, pages));
    }


document.addEventListener('DOMContentLoaded', function() {
    
    function displayLibrary() {
        const booksContainer = dociument.getElementById("books");

        booksContainer.innerHTML="";

        myLibrary.forEach((book) => {
            const bookElement = document.createElement("p");
            bookElement.textContent = `Title: ${book.title},  Author: ${book.author}, Pages: ${book.pages}`;
            document.getElementById("books").appendChild(bookElement);
            console.log(book);
        })
    }
});

function openForm(){
    const form = document.createElement("form");
    form.setAttribute("id", "bookForm");

    const newbook = document.getElementById("newbook");

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
}

// Function to handle form submission
    function getInfoFromForm(event) {
        console.log("submited");
        event.preventDefault(); // Prevent the default form submission behavior

        const form = document.getElementById("bookForm");
        const title = form.querySelector('input[name="title"]').value;
        const author = form.querySelector('input[name="author"]').value;
        const pages = form.querySelector('input[name="pages"]').value;

        // Call the function to add the book to the library
        addToLibrary(title, author, pages);
        
        // Clear the form input fields
        form.reset();

        // Redisplay the updated library
        displayLibrary();
    }

    // Add a submit event listener to the form
    const formElement = document.getElementById("bookForm");
    formElement.addEventListener("submit", getInfoFromForm);