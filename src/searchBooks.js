export class searchBooks {
    //   static inject() { return [WebAPI]; }

    // TODO: Replace with real data
    // book = {
    //     title: "Before the fall",
    //     price: 5,
    //     sellers: ["Amazon", "BookReader", "Ebay"],
    //     plot: "This is a classic book about magical things that may or may not impress the reader"
    // }
    books = [
        {
            title: "Before the fall",
            price: 5,
            sellers: ["Amazon", "BookReader", "Ebay"],
            plot: "This is a classic book about magical things that may or may not impress the reader"
        },
        {
            title: "SecondBook",
            price: 4,
            sellers: ["Amazon", "Ebay"],
            plot: "This is a classic book about magical things"
        },
        {
            title: "ThirdBook",
            price: 3,
            sellers: ["Amazon"],
            plot: "This is a classic book"
        }
    ]
    selectedBook;

    constructor() {
        // this.api = api;
        this.selectedBook = this.books[0];
        console.log("selected book:  " + this.selectedBook);
    }

}