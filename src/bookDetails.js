export class bookDetails {
    //   static inject() { return [WebAPI]; }

    constructor() {
        // this.api = api;
    }
    activate(params) {
        if (params.id) {
            this.book.title = params.id;
        }
    }
    // TODO: Replace with real data
    book = {
        title: "Before the fall",
        price: 5,
        sellers: ["Amazon", "BookReader", "Ebay"],
        plot: "This is a classic book about magical things that may or may not impress the reader"
    }
    providers = [
        {
            name: "Amazon",
            price: 5
        },
        {
            name: "Ebay",
            price: 6
        }
    ]



}