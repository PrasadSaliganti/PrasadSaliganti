import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {

  constructor(public myService:ProjectService) {
    this.myService.prasad="7";
   }
  

  ngOnInit(): void {
  }

}
