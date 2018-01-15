# Changes

Because I was working outside of github for most of the development, I completely forgot to commit anything outside of the final build. Here you'll find everything I changed from the original fork.

## [App.js](App.js)

1. Added initial state of books to render nothing on the page while componentDidMount did it's dirty work
2. Added the componentDidMount to call the [BooksAPI](BooksAPI.js) and retrieve all books that are currently on a shelf
3. Added the handleChange method that updates the state and [BooksAPI](BooksAPI.js) when a book is moved on the main page
4. Added the updateBooks method that updates the state and [BooksAPI](BooksAPI.js) when a book is moved on the search page to the main page
5. Deleted the bulk of JSX and replaced with components
6. Added React Router to be able to switch between the main page and the search page without relying on state

## [Book.js](Book.js)

1. Depending on the shelf, returns either a placeholder JSX or the JSX that renders the books under the specific shelf being iterated
2. Added Link from React Router to dynamically link to the search page

## [List.js](List.js)

1. Started a render of each book that matches the shelf it's being called with.

## [Results.js](Results.js)

1. This is the parent component that either renders the list of searched books, or renders a placeholder h tag

## [Search.js](Search.js)

1. Added an initial state of query and term to set the page as blank before the user inputs any search terms
2. Added the handleSearch method to run the [BooksAPI](BooksAPI.js)'s query method
3. Noticed there was a POST error being returned in the console, so added a ternary operator to reset the state to nothing in order to account for that (just in case it caused any unseen issues)
4. Added the handleChange method which pushes the selected book to the main page
5. Updated the handleChange method so it takes the selected book out of the search query entirely
6. Went back to the handleSearch method to update whether it shows books already on the main page or not (of course I chose the "don't you dare show me books I already have" option)

## [Select.js](Select.js)

1. Added the changeBook method, which passes the index and value selected in the drop down to one of the two handleChange methods (either in [App.js](App.js) or [Search.js](Search.js))
2. Fixed a bug that was initially showing the current shelf (or null if no shelf) selected, but after change broke the select button.
3. Updated the color of the Remove option to show that its dangerous!

## [Shelf.js](Shelf.js)

1. Provided a view window for the list of books to be displayed for each 'shelf'
