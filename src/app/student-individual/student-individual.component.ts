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
  	if(!this.studentService.current)
	  	this.route.params.subscribe( function(params) {
	  		this.studentService.setCurrent(params.id);
	  	}.bind(this));
  }

}
