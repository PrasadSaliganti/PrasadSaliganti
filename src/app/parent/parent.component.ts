import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {  
  mytask:number=0;
  name:string="";
  mpin:number=0;
  
  constructor() { }  

  ngOnInit(): void {
  }
  enter(pin:number){
    this.mpin=pin;
  }
  pin(value:any){
    this.name=value;
  }
 
}
