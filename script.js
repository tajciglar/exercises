const myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read || false;
    }
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}
 
function addToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}


document.addEventListener('DOMContentLoaded', function() {
    function displayLibrary() {
        
        const deleteForm = document.getElementById("books");
        books.innerHTML = "";

        const booksContainer = document.getElementById("books");
        myLibrary.forEach((book, index) => {
            const bookElement = document.createElement("p");
            bookElement.textContent = `Title: ${book.title},  Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read ? 'Yes' : 'No'}`;
            booksContainer.appendChild(bookElement);

            // Add remoove button
            const remove = document.createElement("button");
            remove.textContent="Remove book";
            remove.style.marginLeft="10px";
            bookElement.appendChild(remove);

            remove.addEventListener("click", () => {
                bookElement.remove();

                myLibrary.splice(index, 1);
            });

            const toggleRead = document.createElement("button");
            toggleRead.textContent = book.read ? "Mark as Unread" : "Mark as Read";
            toggleRead.style.marginLeft = "10px";
            bookElement.appendChild(toggleRead);

            toggleRead.addEventListener("click", () => {
                book.toggleReadStatus(); // Toggle the read status
                displayLibrary();
            });
        });
    }


    const addBook = document.getElementById("addBook");
    addBook.style.marginTop="2%";
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
        submit.style.marginLeft="10px";

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
          
             // Clear the form input fields
             titleInput.value = "";
             authorInput.value = "";
             pagesInput.value = "";
           
            // Redisplay the updated library
            displayLibrary();
        });
    });
});



