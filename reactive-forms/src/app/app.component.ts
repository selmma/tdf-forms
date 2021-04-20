import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator'
import { passwordValidator } from './shared/password.validator'
import { RegistrationService } from './registration.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  registrationForm: FormGroup;

  constructor( private fb: FormBuilder,
               private reistrationService: RegistrationService ){}

  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required,Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([]) 
    }, {validator: passwordValidator});

    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if(checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }
  
  public loadApiData() {
    this.registrationForm.patchValue({
      userName: 'SHA',
      password: 'test',
      confirmPassword: 'test'
    });
  }

  public onSubmit(){
    console.log(this.registrationForm.value);
    this.reistrationService.register(this.registrationForm.value).subscribe(
      response => console.log('Success', response),
      error => console.log('Error', error)
    );
  }
}
