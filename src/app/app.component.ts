import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  FormArray:any;
  

  // name:string="PRASAD"
  // age:number=30  
  // phone:number=9988998888
//  submit(){
//   console.log("submit")
//  }
 students:any[]=[
   {name:"PRASAD",age:30, address: "hyderabad", phone:9090909000, email:"prasad@gmail.com"},
   {name:"RAMESH",age:24, address: "Banglore", phone:9909900090, email:"ramesh@gamil.com"},
   {name:"AADARSH",age:25, address: "Delhi", phone:889998998999, email:"aadarsh@gmail.com"}
  ];

  myForm:FormGroup;
  constructor(private router: Router){
    this.myForm= new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      age: new FormControl('', Validators.required),
      address: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      phone: new FormControl(),     
      details: new FormArray([]),
      email: new FormControl('', [Validators.required, Validators.email]) 
      
    })
  }
  
submit(){
  console.log(this.myForm)
  this.students.push(this.myForm.value)
  
  }
  edit(index:any){
   this.myForm.patchValue(this.students[index])
  }
    delete(index:number){
      this.students.splice(index,1)
      
    }
    addDetails(){      
      (<FormArray>this.myForm.controls.details).push(
        new FormGroup({
          name: new FormControl("", Validators.required),         
          address: new FormControl(),
          college: new FormControl()
          
        })
       
      )
     
    }
      remove(index: number){
        (<FormArray>this.myForm.controls.details).removeAt(index);
  }
  
  getFormArrayGroup(index:number):FormGroup {
    return (<FormGroup>(<FormArray>this.myForm.controls.details).controls[index]);
  }
    
    navigate(path:string){
      this.router.navigateByUrl(path)
    }
        
  }

  

