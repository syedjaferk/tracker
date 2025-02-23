import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  constructor(private router: Router) {}
  @Input() course_data!: any; 


  navigateToDetails(){
    this.router.navigate(['/table/'+this.course_data.id])
  }
}
