define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Book Finder';
      config.map([{ route: ['', 'searchGenre'], name: 'searchGenre', moduleId: 'searchGenre', nav: true, title: 'Start your search' }, { route: 'searchBooks', name: 'searchBooks', moduleId: 'searchBooks', nav: true, title: 'Confirm your search' }, { route: 'reviewBook', name: 'reviewBook', moduleId: 'reviewBook', nav: true, title: 'Review Your book' }, { route: 'bookDetails', name: 'bookDetails', moduleId: 'bookDetails', nav: true, title: 'See book details' }]);

      this.router = router;
    };

    return App;
  }();
});
define('bookDetails',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var bookDetails = exports.bookDetails = function () {
        function bookDetails() {
            _classCallCheck(this, bookDetails);

            this.book = {
                title: "Before the fall",
                price: 5,
                sellers: ["Amazon", "BookReader", "Ebay"],
                plot: "This is a classic book about magical things that may or may not impress the reader"
            };
            this.providers = [{
                name: "Amazon",
                price: 5
            }, {
                name: "Ebay",
                price: 6
            }];
        }

        bookDetails.prototype.activate = function activate(params) {
            if (params.id) {
                this.book.title = params.id;
            }
        };

        return bookDetails;
    }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('reviewBook',["exports", "aurelia-router"], function (exports, _aureliaRouter) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ReviewBook = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ReviewBook = exports.ReviewBook = function () {
    ReviewBook.inject = function inject() {
      return [_aureliaRouter.Router];
    };

    function ReviewBook(router) {
      _classCallCheck(this, ReviewBook);

      this.book = {
        title: "Before the fall",
        price: 5,
        sellers: ["Amazon", "BookReader", "Ebay"],
        plot: "This is a classic book about magical things that may or may not impress the reader"
      };

      this.theRouter = router;
    }

    ReviewBook.prototype.activate = function activate(params, routeConfig) {
      this.routeConfig = routeConfig;
      if (params.id) {
        this.id = params.id;
        this.book.title = params.id;
      }
    };

    ReviewBook.prototype.read = function read() {};

    ReviewBook.prototype.purchase = function purchase() {
      this.theRouter.navigateToRoute("bookDetails", { id: this.id });
    };

    return ReviewBook;
  }();
});
define('searchBooks',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var searchBooks = exports.searchBooks = function searchBooks() {
        _classCallCheck(this, searchBooks);

        this.books = [{
            title: "Before the fall",
            price: 5,
            sellers: ["Amazon", "BookReader", "Ebay"],
            plot: "This is a classic book about magical things that may or may not impress the reader"
        }, {
            title: "SecondBook",
            price: 4,
            sellers: ["Amazon", "Ebay"],
            plot: "This is a classic book about magical things"
        }, {
            title: "ThirdBook",
            price: 3,
            sellers: ["Amazon"],
            plot: "This is a classic book"
        }];

        this.selectedBook = this.books[0];
        console.log("selected book:  " + this.selectedBook);
    };
});
define('searchGenre',["exports", "aurelia-router"], function (exports, _aureliaRouter) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.searchGenre = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var searchGenre = exports.searchGenre = function () {
    searchGenre.inject = function inject() {
      return [_aureliaRouter.Router];
    };

    function searchGenre(router) {
      _classCallCheck(this, searchGenre);

      this.theRouter = router;
    }

    searchGenre.prototype.submit = function submit() {
      this.theRouter.navigate("searchBooks");
    };

    return searchGenre;
  }();
});
define('welcome',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Welcome = exports.Welcome = function () {
    function Welcome() {
      _classCallCheck(this, Welcome);

      this.heading = 'Welcome to the Aurelia Navigation App!';
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.previousValue = this.fullName;
    }

    Welcome.prototype.submit = function submit() {
      this.previousValue = this.fullName;
      alert('Welcome, ' + this.fullName + '!');
    };

    Welcome.prototype.canDeactivate = function canDeactivate() {
      if (this.fullName !== this.previousValue) {
        return confirm('Are you sure you want to leave?');
      }
    };

    _createClass(Welcome, [{
      key: 'fullName',
      get: function get() {
        return this.firstName + ' ' + this.lastName;
      }
    }]);

    return Welcome;
  }();

  var UpperValueConverter = exports.UpperValueConverter = function () {
    function UpperValueConverter() {
      _classCallCheck(this, UpperValueConverter);
    }

    UpperValueConverter.prototype.toView = function toView(value) {
      return value && value.toUpperCase();
    };

    return UpperValueConverter;
  }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"navbar.html\"></require>\n  <!--TODO: import bootstrap correctly-->\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <navbar router.bind=\"router\" ></navbar>\n  <br><br>\n  <div class=\"page-host\" >\n  <!--style=\"background:gray;    position:fixed;\n    padding:100;\n    margin:100;\n\n    top:30;\n    left:0;\n\n    width: 100%;\n    height: 100%;\">-->\n    \n    <router-view></router-view>\n  </div>\n</template>"; });
define('text!bookDetails.html', ['module'], function(module) { module.exports = "<!--Slide 10-->\r\n\r\n<template>\r\n  <section class=\"au-animate\" >\r\n    <h2 class=\"text-center\">Book: ${book.title}</h2>\r\n    <!--TODO: Test & fix css-->\r\n    <div class=\"container\">\r\n\r\n    <table class=\"table-bordered col-sm-4\">\r\n        <tr>\r\n            <th>Available on</th>\r\n            <th>Price </th>\r\n        </tr>\r\n        <!-- Inside repeat? class=\"list-group-item ${contact.id === $parent.selectedId ? 'active' : ''}\"-->\r\n      <tr repeat.for=\"provider of providers\" >\r\n        <!--<a route-href=\"route: contacts; params.bind: {id:contact.id}\" click.delegate=\"$parent.select(contact)\">\r\n          <h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}</h4>\r\n          <p class=\"list-group-item-text\">${contact.email}</p>\r\n          </a>-->\r\n          <td>${provider.name}</td>\r\n          <td>${provider.price}</td>\r\n        </a>\r\n      </tr>\r\n    </table>\r\n    <div class=\"col-sm-4\"></div>\r\n\r\n    <table class=\"table-bordered col-sm-4\">\r\n        <tr>\r\n            <th> Best place to buy</th>\r\n            <th> Price</th>\r\n        </tr>\r\n        <tr>\r\n            <td> ${bestProvider}</td>\r\n            <td> ${bestProvider.price}</td>\r\n        </tr>\r\n    </table>\r\n    </div>\r\n  </section>\r\n</template>"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-image: url('http://www.w3schools.com/cssref/paper.gif');\" role=\"navigation\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\r\n        <span class=\"sr-only\">Toggle Navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <i class=\"fa fa-home\"></i>\r\n        <span>${router.title}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n          <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\">${row.title}</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\r\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</template>"; });
define('text!reviewBook.html', ['module'], function(module) { module.exports = "<template>\r\n    <section class=\"au-animate\">\r\n        <h2> Book: ${book.title}</h2>\r\n        <form role=\"form\" submit.delegate=\"submit()\">\r\n            <div class=\"button-bar\">\r\n                <button class=\"btn btn-success\" click.delegate=\"read()\">Read</button>\r\n                <button class=\"btn btn-success\" click.delegate=\"purchase()\">Purchase</button>\r\n            </div>\r\n        </form>\r\n    </section>\r\n</template>"; });
define('text!searchBooks.html', ['module'], function(module) { module.exports = "<template>\r\n    <!--TODO: Estimated hardest controller, get from API/db, dynamically update books from search field, plot when selecting a book-->\r\n    <section class=\"au-animate\">\r\n        <h2> ${book.title} </h2>\r\n        <div class=\"text-left col-sm-4\">\r\n            <h1>Plot</h1>\r\n            <!--TODO: Plot only for the selected book, look at contact-details-->\r\n            <p>${selectedBook.plot}</p>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-4\" style=\"width:auto;\">\r\n            <input value=\"Genre\"></input>\r\n            <ul class=\"list-group\">\r\n\r\n                <!--class=\"list-group-item ${contact.id === $parent.selectedId ? 'active' : ''}\"-->\r\n                <li class=\"list-group-item\" style=\"height:30px;\" repeat.for=\"book of books\">\r\n                    <!--<a route-href=\"route: contacts; params.bind: {id:contact.id}\" click.delegate=\"$parent.select(contact)\">-->\r\n                    <!--<h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}</h4>-->\r\n                    <!--<p class=\"list-group-item-text\">${contact.email}</p>\r\n          </a>-->\r\n                    <a route-href=\"route: reviewBook; params.bind: {id:book.title}\">${book.title}</a>\r\n                    <!--<p class=\"list-group-item-text;\">${book.title}</p>-->\r\n                        <!--TODO: Look at above code, add a href when book is selected, change book.plot accordingly-->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n</template>"; });
define('text!searchGenre.html', ['module'], function(module) { module.exports = "<template>\r\n  <section class=\"au-animate\">\r\n    <h2> Lets get started!</h2>\r\n    <form role=\"form\" submit.delegate=\"submit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"fn\">What do you want to read?</label>\r\n        <input type=\"text\" value.bind=\"desiredGenre\" class=\"form-control\" id=\"fn\" placeholder=\"desired Reading\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n    </form>\r\n  </section>\r\n</template>"; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template>\r\n  <section class=\"au-animate\">\r\n    <h2>${heading}</h2>\r\n    <form role=\"form\" submit.delegate=\"submit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"fn\">First Name</label>\r\n        <input type=\"text\" value.bind=\"firstName\" class=\"form-control\" id=\"fn\" placeholder=\"first name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"ln\">Last Name</label>\r\n        <input type=\"text\" value.bind=\"lastName\" class=\"form-control\" id=\"ln\" placeholder=\"last name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Full Name</label>\r\n        <p class=\"help-block\">${fullName | upper}</p>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n    </form>\r\n  </section>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map