import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name:string="";
  @Input() task:number=123;
  @Output() pin:EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void { 
    
  }
 generate(){
  this.pin.emit(this.name);
 }
}
