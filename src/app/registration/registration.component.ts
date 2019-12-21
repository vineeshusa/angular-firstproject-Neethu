import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl}from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationForm : FormGroup;
save= function()
{alert("saved");
}

  constructor() { }

  ngOnInit() {
  
this.registrationForm= new FormGroup({
  FullName: new FormControl(),
  email: new FormControl(),
  DOB:new FormControl(),
  PassWord:new FormControl()
 
}
);
  }
  onSubmit():void
  
  {console.log(this.registrationForm.value);

  }
  }