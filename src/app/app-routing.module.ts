import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course-list/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student -list/student.component';

const routes: Routes = [
  {path:"student/:id/:name", component:StudentComponent},
  { path:"course", component:CourseComponent},
  { path:"", redirectTo:"course", pathMatch:"full"},
  { path:"**", component:PageNotFoundComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
