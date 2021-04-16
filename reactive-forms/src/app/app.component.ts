import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private fb: FormBuilder){}
  
  registrationForm = this.fb.group({
    userName: ['sha'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })

  })

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Sha'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   })
  // });

  public loadApiData() {
    this.registrationForm.patchValue({
      userName: 'SHA',
      password: 'test',
      confirmPassword: 'test'
    });
  }

}
