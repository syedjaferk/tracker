import { Routes } from '@angular/router';
import { CourseWindowComponent } from '../app/course-window/course-window.component';
import { CourseTableComponent } from '../app/course-window/course-table/course-table.component';


export const routes: Routes = [
    { path: '', component: CourseWindowComponent },
    { path: 'table/:trackerName', component: CourseTableComponent }
];
