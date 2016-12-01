// import {WebAPI} from './web-api';
// import {areEqual} from './utility';
import { Router } from 'aurelia-router';

export class ReviewBook {
  //   static inject() { return [WebAPI]; }
  static inject() { return [Router]; }

  //if using api, put in constructor
  constructor(router) {
    // this.api = api;
    this.theRouter = router;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    if(params.id){
      this.id = params.id;
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


  // return this.api.getContactDetails(params.id).then(contact => {
  //   this.contact = contact;
  //   this.routeConfig.navModel.setTitle(contact.firstName);
  //   this.originalContact = JSON.parse(JSON.stringify(contact));
  // });


read(){
  //TODO: Pass book in params to readBook controller
}
purchase(){
  //TODO: Pass book in params to bookdetails controller (Rename?)
  //add logic
  this.theRouter.navigateToRoute("bookDetails", {id: this.id});
}

}