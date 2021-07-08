import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project-angular';
  user : User;


  constructor () {
    this.user = new User()
  }
  // sampleArray : string[] = ['react' , 'angular', 'Node.js'];
 // addSkill(skill: string){
   // this.sampleArray.push(skill)
 // }


}
