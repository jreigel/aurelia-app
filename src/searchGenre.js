import {Router} from 'aurelia-router';
export class searchGenre {
//   static inject() { return [WebAPI]; }
 static inject() { return [Router]; }


  constructor(router){
    // this.api = api;
    this.theRouter = router;
  }
  submit(){
    //add logic
    this.theRouter.navigate("searchBooks");
  }
}