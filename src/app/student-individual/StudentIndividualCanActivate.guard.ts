import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { StudentServiceService } from '../studentpage/student-service.service';
@Injectable()
export class StudentIndividualCanActivate implements CanActivate {
	constructor(private studentService:StudentServiceService, private router: Router) {}
	
	canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | boolean {
		if(route.params['id']) {
			let current = this.studentService.setCurrent(route.params['id']);
			if(current) {
				return true;
			}
		} 
		this.router.navigate(['404']);
	}
}