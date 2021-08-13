import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.css']
})
export class MiniComponent implements OnInit {

  constructor(public myService:ProjectService) {
    console.log(this.myService.prasad)
   }
   
  ngOnInit(): void {
  }

}
