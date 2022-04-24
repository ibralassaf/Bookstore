/*
┌─────────┬───┬──────────────────────┬───────────────────────┬──────┬────┐
│ (index) │ 0 │          1         │           2          │  3  │ 4  │
├─────────┼───┼──────────────────────┼───────────────────────┼──────┼────┤
│    0    │ 1 │   'Start with why'  │     'Simon Sinek'    │  80  │ 13 │
│    1    │ 2 │ 'But how do it know'│   'J. Clark Scott'   │ 59.9 │ 22 │
│    2    │ 3 │     'Clean Code'    │ 'Robert Cecil Martin'│  50  │ 5  │
│    3    │ 4 │    'Zero to One'    │     'Peter Thiel'    │  45  │ 12 │
│    4    │ 5 │ "You don't know JS" │    'Kyle Simpson'    │ 39.9 │ 9  │
└─────────┴───┴──────────────────────┴───────────────────────┴──────┴────┘
console.table(books);
*/

//Books information
let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9],
];

//Get book information
function getBookInfo(id, title, author) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] == id) {
            for (let j = 1; j < books[i].length; j++) {
                console.log(books[i][j]);
            }
        } else {
            console.log("Book not found");
            break;
        }
    }
}

getBookInfo(7);