import { Component } from '@angular/core';
import { User } from './user'
import { ShaService } from './sha.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _shaService:ShaService){}

  topics = ['sladoled', 'cokolada', 'chips'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';


  userModel = new User('sha', 'rob@test.com', 5698555692, 'default', 'morning', true)

  validateTopic(value){
    value === 'default' ? this.topicHasError = true : this.topicHasError = false;
  }

  onSubmit(userForm) {
    console.log(userForm);
    // this.submitted = true;
    // this._shaService.enroll(this.userModel).subscribe( 
    //   data => console.log('Success!', data),
    //   error => this.errorMsg = error.statusText
    // )
  }
}