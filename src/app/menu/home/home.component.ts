import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from'@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
clickedsign=function()
{
  alert("sign in")
}
  constructor() {

   }
homeForm: FormGroup;
  ngOnInit() {
  this.homeForm= new FormGroup({
  userName: new FormControl(),
  PassWord: new FormControl()
  
  });
  }
  onSubmit():void
  
  {
    console.log(this.homeForm.value);

  }
}