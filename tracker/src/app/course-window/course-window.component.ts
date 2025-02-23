import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import Localbase from 'localbase';
import { JsonApiService } from './api.server';

@Component({
  selector: 'app-course-window',
  imports: [CommonModule, CourseComponent, FormsModule],
  templateUrl: './course-window.component.html',
  styleUrl: './course-window.component.scss'
})
export class CourseWindowComponent {
  constructor(private jsonApiService: JsonApiService) {}

  db = new Localbase('parottasalna_tracker_db');
  jsonData: any = {};
  courses = [];

  ngOnInit(): void {
    this.jsonApiService.getData().subscribe(
      (data) => {
        this.jsonData = data;
        this.courses = this.jsonData['courses'];
      },
      (error) => {
        console.error('Error loading JSON data', error);
      }
    );
  }
}
