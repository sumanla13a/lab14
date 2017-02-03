import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { StudentServiceService, StudentType } from './student-service.service';

@Injectable()
export class StudentResolver implements Resolve<any> {
	constructor(private studentService: StudentServiceService) {

	}
	resolve(route: ActivatedRouteSnapshot):Observable<any> | StudentType[] {
		return this.studentService.getData();
	}
}