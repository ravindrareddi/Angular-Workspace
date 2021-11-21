import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'login form';
  @Output() 
  stringOutput: EventEmitter<String> = new EventEmitter<String>();
  constructor(private router: Router,private interactionService: InteractionService) {

  }
  btnClick(data:NgForm)
  {
    sessionStorage.setItem('email','satya.dasari@gmail.com');
    sessionStorage.setItem('password','man@456');
      //this.stringOutput.emit('satya.dasari@gmail.com');
    
    //console.log('777--');
   // console.log(data);
      //this.interactionService.sendMessage(data);
    //console.warn(data);
   // this.interactionService.sendMessage('satya.dasari@gmail.com');
    //this.interactionService.sendMessage('vcfvcv56');
    //this.router.navigate(['/loginsucess/'], navigationExtras);
    this.router.navigateByUrl('/loginsucess');
    //this.router.navigate('LosucessComponent');

  }
  ngOnInit(): void {
  }

}