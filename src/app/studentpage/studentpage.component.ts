import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';

@Component({
  selector: 'app-studentpage',
  template: `
    <a *ngFor="let data of this.studentService.data" [routerLink]="[data.id]">
      {{data.name}}
    </a>
  `,
  styles: []
})
export class StudentpageComponent implements OnInit {

  constructor(private studentService:StudentServiceService) { }

  ngOnInit() {
  }

}
