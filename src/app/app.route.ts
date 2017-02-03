import { RouterModule, Routes, Resolve } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { StudentpageComponent } from './studentpage/studentpage.component';
import { StudentIndividualComponent } from './student-individual/student-individual.component';
import { ErrorComponent } from './error/error.component';

import { StudentCanActivate } from './studentpage/studentGuard.guard';
import { StudentResolver } from './studentpage/student-resolver.resolver';
import { StudentIndividualCanActivate } from './student-individual/StudentIndividualCanActivate.guard';
const lab14Routes: Routes = [
	{
		path:'homepage',
		component: HomepageComponent
	}, {
		path: 'students',
		component: StudentpageComponent,
		canActivate: [StudentCanActivate],
		resolve: {
			student: StudentResolver
		}
	},{
		path: 'students/:id',
		component: StudentIndividualComponent,
		canActivate: [StudentIndividualCanActivate]
	}, {
		path: '404',
		component: ErrorComponent
	}, {
		path:'**',
		redirectTo:'404'
	}
];

export const Lab14Routes = RouterModule.forRoot(lab14Routes);