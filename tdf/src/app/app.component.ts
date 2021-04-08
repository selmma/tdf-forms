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

  userModel = new User('', 'rob@test.com', 5698552, 'default', 'morning', true)

  validateTopic(value){
    value === 'default' ? this.topicHasError = true : this.topicHasError = false;
  }

  onSubmit() {
    this._shaService.enroll(this.userModel).subscribe( data => 
      data => console.log('Success!', data),
      error => console.log('Error!', error)
    )
  }
}