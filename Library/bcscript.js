
const bookList = document.querySelector(".book-list");
const cartItemsContainer = document.querySelector(".cart-items");
const checkoutBtn = document.querySelector(".checkout-btn");

const exampleBooks = [
  {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    subject: "Fiction",
    publishDate: "1960",
    availableCopies: 5,
    image: "images/1.jpg", 
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    subject: "Fiction",
    publishDate: "1951",
    availableCopies: 2,
    image: "images/2.jpg", 
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    subject: "Fiction",
    publishDate: "1932",
    availableCopies: 2,
    image: "images/3.jpeg", 
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    subject: "Fiction",
    publishDate: "1847",
    availableCopies: 2,
    image: "images/4.jpg", 
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    subject: "Fiction",
    publishDate: "1987",
    availableCopies: 2,
    image: "images/5.jpeg", 
  },
  {
    title: "In Cold Blood",
    author: "Truman Capote",
    subject: "Non-Fiction",
    publishDate: "1966",
    availableCopies: 2,
    image: "images/6.jpg", 
  },
  {
    title: "Unbroken",
    author: "Laura Hillenbrand",
    subject: "Non-Fiction",
    publishDate: "2010",
    availableCopies: 2,
    image: "images/7.jpeg", 
  },
  {
    title: "The Diary of Young Girl",
    author: "Anne Frank",
    subject: "Non-Fiction",
    publishDate: "1947",
    availableCopies: 2,
    image: "images/8.jpg", 
  },
  {
    title: "Hiroshima",
    author: "John Hersey",
    subject: "Non-Fiction",
    publishDate: "1946",
    availableCopies: 2,
    image: "images/9.jpg", 
  },
  {
    title: "Silent Spring",
    author: "Rachel Carson",
    subject: "Non-Fiction",
    publishDate: "1962",
    availableCopies: 2,
    image: "images/10.jpg", 
  },
  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    subject: "Romance",
    publishDate: "1996",
    availableCopies: 2,
    image: "images/11.jpg", 
  },
  {
    title: "The Hating Game",
    author: "Sally Thorne",
    subject: "Romance",
    publishDate: "2016",
    availableCopies: 2,
    image: "images/12.jpg", 
  },
  {
    title: "Me Before You",
    author: "Joo Moyes",
    subject: "Romance",
    publishDate: "2012",
    availableCopies: 2,
    image: "images/13.jpg", 
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    subject: "Romance",
    publishDate: "2005",
    availableCopies: 2,
    image: "images/14.jpg", 
  },
  {
    title: "Indigo",
    author: "Beverly Jenkins",
    subject: "Romance",
    publishDate: "2002",
    availableCopies: 2,
    image: "images/15.jpg", 
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    subject: "Mystery",
    publishDate: "2012",
    availableCopies: 2,
    image: "images/16.jpg", 
  },
  {
    title: "The Woman in White",
    author: "Wilkie Collins",
    subject: "Mystery",
    publishDate: "1859",
    availableCopies: 2,
    image: "images/17.jpg", 
  },
  {
    title: "The Big Sleep",
    author: "Raymond Chandler",
    subject: "Mystery",
    publishDate: "1939",
    availableCopies: 2,
    image: "images/18.jpg", 
  },
  {
    title: "The Girl on The Train",
    author: "Paula Hawkins",
    subject: "Mystery",
    publishDate: "2015",
    availableCopies: 2,
    image: "images/19.png", 
  },
  {
    title: "In the Woods",
    author: "Tana French",
    subject: "Mystery",
    publishDate: "2007",
    availableCopies: 2,
    image: "images/20.jpg", 
  },
  {
    title: "Ramayana",
    author: "Valmiki",
    subject: "Mythology",
    publishDate: "200 BCE",
    availableCopies: 2,
    image: "images/21.jpg", 
  },
  {
    title: "Mahabharata",
    author: "Vyasa",
    subject: "Mythology",
    publishDate: "100 BCE",
    availableCopies: 2,
    image: "images/22.jpg", 
  },
  {
    title: "The Hidden Hindu",
    author: "Akshat Gupta",
    subject: "Mythology",
    publishDate: "2017",
    availableCopies: 2,
    image: "images/23.jpg", 
  },
  {
    title: "The Krishna Key",
    author: "Ashwin Sanghi",
    subject: "Mythology",
    publishDate: "2010",
    availableCopies: 2,
    image: "images/24.jpg", 
  },
  {
    title: "Bhagavad Gita",
    author: "Vyasa",
    subject: "Mythology",
    publishDate: "BCE",
    availableCopies: 2,
    image: "images/25.jpg", 
  },
  {
    title: "Dune",
    author: "Frank Herbet",
    subject: "Science Fiction",
    publishDate: "1965",
    availableCopies: 2,
    image: "images/26.jpg", 
  },
  {
    title: "The Three Body Problem",
    author: "Liu Cixin",
    subject: "Science Fiction",
    publishDate: "2006",
    availableCopies: 2,
    image: "images/27.jpg", 
  },
  {
    title: "Ender's game",
    author: "Orson Scott Card",
    subject: "Science Fiction",
    publishDate: "1985",
    availableCopies: 2,
    image: "images/28.jpeg", 
  },
  {
    title: "The Time Machine",
    author: "H. G. Wells",
    subject: "Science Fiction",
    publishDate: "1895",
    availableCopies: 2,
    image: "images/29.jpg", 
  },
  {
    title: "Children Of time",
    author: "Adrian Tchaikovsky",
    subject: "Science Fiction",
    publishDate: "2015",
    availableCopies: 2,
    image: "images/30.jpeg", 
  },
  
];

function createBookCards(books) {
    bookList.innerHTML = ""; 
  
    books.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      const bookImage = document.createElement("img");
      bookImage.classList.add("book-image");
      bookImage.src = book.image;
      bookImage.alt = book.title;
  
      const title = document.createElement("h2");
      title.textContent = book.title;
  
      const author = document.createElement("p");
      author.textContent = "Author: " + book.author;
  
      const subject = document.createElement("p");
      subject.textContent = "Subject: " + book.subject;
  
      const publishDate = document.createElement("p");
      publishDate.textContent = "Publish Date: " + book.publishDate;

      const availabilityContainer = document.createElement("div");
      availabilityContainer.classList.add("availability-container");
  
      const availableCopies = document.createElement("p");
      availableCopies.textContent = "Available Copies: " + book.availableCopies;
      availableCopies.classList.add("available-copies");
      const addToCartBtn = document.createElement("button");
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.classList.add("add-to-cart-btn");
      addToCartBtn.addEventListener("click", () => addToCart(book));
  
      bookCard.appendChild(bookImage);
      bookCard.appendChild(title);
      bookCard.appendChild(author);
      bookCard.appendChild(subject);
      bookCard.appendChild(publishDate);
      availabilityContainer.appendChild(availableCopies);
      bookCard.appendChild(availabilityContainer);
      bookCard.appendChild(addToCartBtn);
  
      bookList.appendChild(bookCard);
    });
  }

  function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = exampleBooks.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(searchTerm);
      const authorMatch = book.author.toLowerCase().includes(searchTerm);
      const subjectMatch = book.subject.toLowerCase().includes(searchTerm);
      return titleMatch || authorMatch || subjectMatch;
    });
    createBookCards(filteredBooks);
  }
  
  function sortBooks() {
    const sortBy = sortSelect.value;
    let sortedBooks = [...exampleBooks];
    switch (sortBy) {
      case "title":
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "author":
        sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case "subject":
        sortedBooks.sort((a, b) => a.subject.localeCompare(b.subject));
        break;
      case "publish-date":
        sortedBooks.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
        break;
      default:
        break;
    }
    createBookCards(sortedBooks);
  }

  const searchInput = document.querySelector("input[type='text']");
  const sortSelect = document.getElementById("sort");
  
  searchInput.addEventListener("input", filterBooks);
  sortSelect.addEventListener("change", sortBooks);

  createBookCards(exampleBooks);

function addToCart(book) {
  if (book.availableCopies > 0) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const cartItemInfo = document.createElement("span");
    cartItemInfo.textContent = `${book.title} - ${book.author}`;

    const cartItemRemoveBtn = document.createElement("button");
    cartItemRemoveBtn.textContent = "Remove";
    cartItemRemoveBtn.classList.add("remove-from-cart-btn");
    cartItemRemoveBtn.addEventListener("click", () => removeFromCart(cartItem, book));

    cartItem.appendChild(cartItemInfo);
    cartItem.appendChild(cartItemRemoveBtn);
    cartItemsContainer.appendChild(cartItem);

    book.availableCopies -= 1;
    updateBookAvailability(book);
    function removeFromCart(cartItem, book) {
  cartItemsContainer.removeChild(cartItem);

  book.availableCopies += 1;
  updateBookAvailability(book);
}
  } else {
    alert("This book is currently out of stock.");
  }
  function removeFromCart(cartItem, book) {
    cartItemsContainer.removeChild(cartItem);

    book.availableCopies += 1;
    updateBookAvailability(book);
  }
}

  function updateBookAvailability(book) {
    const bookCards = document.querySelectorAll(".book-card");
    bookCards.forEach((card) => {
      const cardTitle = card.querySelector("h2").textContent;
      if (cardTitle === book.title) {
        const availableCopies = card.querySelector(".available-copies");
        availableCopies.textContent = "Available Copies: " + book.availableCopies;
      }
    });
  }
  createBookCards(exampleBooks);