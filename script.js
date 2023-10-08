/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/
// Fiction, Science Fiction, Fantasy, Adventure, Horror, Mystery, Dystopian
/* Book object
  title: string,
  author: string,
  year: number,
  genre: string,
  rating: float,
  description: string,
  image: string
*/
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer.jpg"
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
];

const genreRadios = document.querySelectorAll('input[name="genre"]');
const sortingRadios = document.querySelectorAll('input[name="sort"]');
const centuryRadios = document.querySelectorAll('input[name="century"]');
const searchBtn = document.getElementById('searchbutton');
const searchBar = document.getElementById('searchbar');
let library = document.getElementById("bookshelf-container");

document.getElementById("reset-filters").addEventListener("click", () => {
  let newBookList = books;
  clearChildElements(library);
  displayBooks(newBookList);
})

// Populate website with books
const displayBooks = (bookList) => {
  console.log(bookList.length);
  if(bookList.length <= 0) {
    let bookElement = document.createElement("div");
    let noResults = document.createElement("p");
    noResults.innerText = "No results"
    noResults.style.textAlign = "center";
    bookElement.appendChild(noResults);
    library.appendChild(bookElement);
  }else {
    bookList.forEach( (book) => {
      let bookElement = document.createElement("div");
      let title = document.createElement("h1");
      let author = document.createElement("h2");
      let year = document.createElement("h3");
      let genre = document.createElement("h3");
      let rating = document.createElement("h3");
      let description = document.createElement("p");
      let image = document.createElement("img")
    
      title.innerText = book.title;
      author.innerText = book.author;
      year.innerText = book.year;
      genre.innerText = book.genre;
      rating.innerText = book.rating;
      description.innerText = book.description;
      image.src = book.image;
    
      bookElement.appendChild(title);
      bookElement.appendChild(author);
      bookElement.appendChild(year);
      bookElement.appendChild(genre);
      bookElement.appendChild(rating);
      bookElement.appendChild(description);
      bookElement.appendChild(image);
    
      bookElement.classList.add("bookshelf-child");
      library.appendChild(bookElement);
    });
  };
};

// Clear all books before creating new book elements
const clearChildElements = (parentNode) => {
  while(parentNode.firstChild) {
    parentNode.removeChild(parentNode.lastChild);
  }
};

// Add functionality to filter by genre
genreRadios.forEach((radio) => {
  let newBookList;
  radio.addEventListener("click", function () {
    newBookList = books.filter((book) => book.genre == this.value);
    clearChildElements(library);
    displayBooks(newBookList);
  });
});

// Add functionality to sort buttons
sortingRadios.forEach((radio) => {
  let newBookList = books;
  radio.addEventListener("change", function () {
    if(this.value === "rating-highest") {
      newBookList.sort((book1, book2) => {return book2.rating - book1.rating});
    }else if(this.value === "rating-lowest") {
      newBookList.sort((book1, book2) => {return book1.rating - book2.rating});
    }else if(this.value === "alphabetical") {
      newBookList.sort((book1, book2) => {
        var title1 = book1.title.toUpperCase();
        var title2 = book2.title.toUpperCase();
        return (title1 < title2) ? -1 : (title1 > title2) ? 1 : 0;
      });
    }else {
      newBookList.sort((book1, book2) => {
        var title1 = book1.title.toUpperCase();
        var title2 = book2.title.toUpperCase();
        return (title2 < title1) ? -1 : (title2 > title1) ? 1 : 0;
      });
    };
    clearChildElements(library);
    displayBooks(newBookList);
  });
});

// Add functionality to filter by century
centuryRadios.forEach((radio) => {
  let newBookList = books;
  radio.addEventListener("change", function () {
    if(this.value == "century-before") {
      newBookList = newBookList.filter((book) => book.year < 2000);
    }else {
      newBookList = newBookList.filter((book) => book.year > 2000);
    }
    clearChildElements(library);
    displayBooks(newBookList);
  });
});

const searchBook = () => {
  clearChildElements(library);
  displayBooks(books);
  let bookElements = document.querySelectorAll('.bookshelf-child');
  bookElements.forEach((book) => {
    if(!book.innerHTML.toLowerCase().includes(searchBar.value.toLowerCase())) {
      book.classList.add("hidden");
    }else {
      if(book.classList.contains("hidden")) {
       book.classList.remove("hidden"); 
      }
    }
  });
};

displayBooks(books);

