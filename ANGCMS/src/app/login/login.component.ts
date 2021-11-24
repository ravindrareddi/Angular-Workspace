import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'login form1';
  @Output() 
  stringOutput: EventEmitter<String> = new EventEmitter<String>();
  constructor(private router: Router) {

  }
  btnClick(data:NgForm)
  {
    //console.log(data.value.username);
  
    sessionStorage.setItem('email',data.value.username);
    sessionStorage.setItem('password',data.value.password);
      
    this.router.navigateByUrl('/loginsucess');
  
  }
  ngOnInit(): void {
  }

}