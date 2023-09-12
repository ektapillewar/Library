document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');

    event.target.reset();
});


const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960,
        availability: true,
        copiesAvailable: 5,
    },
    
    {
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        genre: "Fiction",
        year: 1951,
        availability: true,
        copiesAvailable: 8,
    },

    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Fiction",
        year: 1932,
        availability: true,
        copiesAvailable: 4,
    },

    {
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        genre: "Fiction",
        year: 1947,
        availability: true,
        copiesAvailable: 7,
    },

    {
        title: "Beloved",
        author: "Toni Morrison",
        genre: "Fiction",
        year: 1987,
        availability: true,
        copiesAvailable: 4,
    },

    {
        title: "In Cold Blood",
        author: "Truman Capote",
        genre: "Non-Fiction",
        year: 1966,
        availability: true,
        copiesAvailable: 7,
    },

    {
        title: "Unbroken",
        author: "Laura Hillenbrand",
        genre: "Non-Fiction",
        year: 2010,
        availability: true,
        copiesAvailable: 3,
    },

    {
        title: "The Diary of Young Girl",
        author: "Anne Frank",
        genre: "Non-Fiction",
        year: 1947,
        availability: true,
        copiesAvailable: 6,
    },

    {
        title: "Hiroshima",
        author: "John Hersey",
        genre: "Non-Fiction",
        year: 1946,
        availability: true,
        copiesAvailable: 3,
    },

    {
        title: "Silent Spring",
        author: "Laura Hillenbrand",
        genre: "Non-Fiction",
        year: 1962,
        availability: true,
        copiesAvailable: 5,
    },

        
    {
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "Romance",
        year: 1996,
        availability: true,
        copiesAvailable: 1,
    },

    {
        title: "The Hating Game",
        author: "Sally Thorne",
        genre: "Romance",
        year: 2016,
        availability: true,
        copiesAvailable: 2,
    },

    {
        title: "Me Before You",
        author: "Joo Moyes",
        genre: "Romance",
        year: 2012,
        availability: true,
        copiesAvailable: 8,
    },

    {
        title: "Twilight",
        author: "Stephenie Meyer",
        genre: "Romance",
        year: 2005,
        availability: true,
        copiesAvailable: 5,
    },

    {
        title: "Indigo",
        author: "Beverly Jenkins",
        genre: "Romance",
        year: 2002,
        availability: true,
        copiesAvailable: 6,
    },
   
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "Mystery",
        year: 2012,
        availability: true,
        copiesAvailable: 4,
    },
   
    {
        title: "The Woman in White",
        author: "Wilkie Collins",
        genre: "Mystery",
        year: 1859,
        availability: true,
        copiesAvailable: 7,
    },
  
    {
        title: "The Big Sleep",
        author: "Raymond Chandler",
        genre: "Mystery",
        year: 1939,
        availability: true,
        copiesAvailable: 5,
    },
 
    {
        title: "The Girl on The Train",
        author: "Paula Hawkins",
        genre: "Mystery",
        year: 2015,
        availability: true,
        copiesAvailable: 6,
    },
 
    {
        title: "In the Words",
        author: "Tana French",
        genre: "Mystery",
        year: 2007,
        availability: true,
        copiesAvailable: 3,
    },

    {
        title: "Ramayana",
        author: "Valmiki",
        genre: "Mythology",
        availability: true,
        copiesAvailable: 5,
    },

    {
        title: "Mahabharata",
        author: "Vyasa",
        genre: "Mythology",
        availability: true,
        copiesAvailable: 4,
    },

    {
        title: "The Hidden Hindu",
        author: "Akshat Gupta ",
        genre: "Mythology",
        year: 2017,
        availability: true,
        copiesAvailable: 4,
    },

    {
        title: "The Krishna Key",
        author: "Ashwin Sanghi",
        genre: "Mythology",
        year: 2010,
        availability: true,
        copiesAvailable: 5,
    },

    {
        title: "Bhagavad Gita",
        author: "Vyasa",
        genre: "Mythology",
        availability: true,
        copiesAvailable: 7,
    },

    {
        title: "Dune",
        author: "Frank Herbet",
        genre: "Science Fiction",
        year: 1965,
        availability: true,
        copiesAvailable: 5,
    },

    {
        title: "The Three Body Problem",
        author: "Liu Cixin",
        genre: "Science Fiction",
        year: 2006,
        availability: true,
        copiesAvailable: 8,
    },

    {
        title: "Ender's game",
        author: "Orson Scott Card",
        genre: "Science Fiction",
        year: 1985,
        availability: true,
        copiesAvailable: 2,
    },

    {
        title: "The Time Machine",
        author: "H. G. Wells",
        genre: "Science Fiction",
        year: 1895,
        availability: true,
        copiesAvailable: 7,
    },

    {
        title: "Children Of time ",
        author: "Adrian Tchaikovsky",
        genre: "Science Fiction",
        year: 2015,
        availability: true,
        copiesAvailable: 4,
    }

];

const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');

function filterBooks(query) {
    return books.filter((book) => {
        const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
        const authorMatch = book.author.toLowerCase().includes(query.toLowerCase());
        const genreMatch = book.genre.toLowerCase().includes(query.toLowerCase());
        const yearMatch = book.year.toString().includes(query);
        return titleMatch || authorMatch || genreMatch || yearMatch;
    });
}

function displaySuggestions(query) {
    const filteredBooks = filterBooks(query);

    suggestionsList.innerHTML = '';
    filteredBooks.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        suggestionsList.appendChild(li);
    });
}

searchInput.addEventListener('input', (event) => {
    const query = event.target.value;
    displaySuggestions(query);
});

