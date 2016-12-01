export class App {
  configureRouter(config, router) {
    config.title = 'Book Finder';
    config.map([
      { route: ['', 'searchGenre'], name: 'searchGenre',      moduleId: 'searchGenre',      nav: true, title: 'Start your search' },
      { route: 'searchBooks',         name: 'searchBooks',        moduleId: 'searchBooks',        nav: true, title: 'Confirm your search' },
      { route: 'reviewBook',         name: 'reviewBook',        moduleId: 'reviewBook',        nav: true, title: 'Review Your book' },
      { route: 'bookDetails',         name: 'bookDetails',        moduleId: 'bookDetails',        nav: true, title: 'See book details' }
    ]);

    this.router = router;
  }
}