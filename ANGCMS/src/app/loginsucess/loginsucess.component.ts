import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-loginsucess',
  templateUrl: './loginsucess.component.html',
  styleUrls: ['./loginsucess.component.css']
})
export class LoginsucessComponent implements OnInit {

  title = 'Dynamic form';
  private incp:number = 1;
  private dynahtml:(any);
  
  constructor(private router: Router,private interactionService: InteractionService) { }
  
  ngOnInit(){
    console.log(sessionStorage.getItem('email'));
    console.log(sessionStorage.getItem('password'));
    console.log('insidesucess');
  //   console.log(this.router.getCurrentNavigation().extras.state.example); 
    //this.interactionService.interactionmessage$.subscribe(message =>{console.log('-----new---')});
    console.log('insidesucessendnew');
  }
  addClick()
  {
    //console.log(data);
    
    console.log($('#inputelements').val());
    if($('#inputelements').val()=='text')
    {
 
      this.incp = $('#dyelement').children('tr').length+1;
      console.log($('#dyelement').children('tr').length);
      //alert(this.incp);
      this.dynahtml ='<tr id="tr'+this.incp+'" style="height:50px;"><td style="width:20%; padding:20px;  vertical-align: center;font-size: 17px;">'+$("#labelname").val()+'</td><td style="padding:20px;  vertical-align:center;font-size: 17px;"><input style="width: 50%;padding: 12px 20px;margin: 8px 0;box-sizing: border-box;" type="text" ngModel placeholder="Enter '+$("#labelname").val()+'" name="'+$("#labelname").val()+'" id="'+$("#labelname").val()+'"></td></tr>';
      console.log(this.dynahtml);
     
      
      
      $('#tr'+$("#dyelement").children('tr').length).after(this.dynahtml);
     
    }
    if($('#inputelements').val()=='textarea')
    {
 
      this.incp = $('#dyelement').children('tr').length+1;
      console.log($('#dyelement').children('tr').length);
      //alert(this.incp);
      this.dynahtml ='<tr id="tr'+this.incp+'" style="height:50px;"><td style="width:20%; padding:20px;  vertical-align: center;font-size: 17px;">'+$("#labelname").val()+'</td><td style="padding:20px;  vertical-align:center;font-size: 17px;"><textarea style="width: 50%;padding: 12px 20px;margin: 8px 0;box-sizing: border-box;" ngModel name="'+$("#labelname").val()+'" id="'+$("#labelname").val()+'" rows="2" cols="30"></textarea></td></tr>';
      console.log(this.dynahtml);
     
      
      
      $('#tr'+$("#dyelement").children('tr').length).after(this.dynahtml);
     
    }
  }

}
 