import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonApiService } from '../api.server';

export interface TableData {
  id: string;
  name: string;
  link: string;
  checked: boolean;
}


@Component({
  selector: 'app-course-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.scss'
})
export class CourseTableComponent {

  searchText: string = '';
  trackerName: string = '';
  jsonData: any = {};
  tableData: TableData[] = [];



  // Sort function to move checked rows to bottom
  sortedTableData() {
    return this.tableData
      .filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase())) // Filter based on search
      .sort((a: any, b: any) => Number(a.checked) - Number(b.checked)); // Move checked items to bottom
  }
  

  // Trigger reordering when checkbox is clicked
  reorderRows() {
    this.tableData = [...this.tableData]; // Force Angular to detect changes
  }

  constructor(private route: ActivatedRoute, private jsonApiService: JsonApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.trackerName = params.get('trackerName') || 'default';
      console.log('Current Table:', this.trackerName);
    });
    this.jsonApiService.getData().subscribe(
        (data) => {
          this.jsonData = data;
          this.tableData = this.jsonData['courses'][this.trackerName]['links'];
        },
        (error) => {
          console.error('Error loading JSON data', error);
        }
      );
  }

  get selectedRows() {
    return this.tableData.filter(content => content.checked);
  }

}
