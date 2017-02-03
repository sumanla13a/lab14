import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StudentServiceService, StudentType } from '../studentpage/student-service.service';

@Component({
  selector: 'app-student-individual',
  templateUrl: './student-individual.component.html',
  styleUrls: ['./student-individual.component.css']
})
export class StudentIndividualComponent implements OnInit {

  constructor(private studentService: StudentServiceService, private route:ActivatedRoute) {}

  ngOnInit() {
/*  this.route.params.subscribe( function(params) {
  		this.student = this.studentService.getCurrent(params.id);
  	}.bind(this));*/
  }

}
