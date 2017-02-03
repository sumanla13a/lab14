import { RouterModule, Routes, Resolve } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { StudentpageComponent } from './studentpage/studentpage.component';
import { StudentIndividualComponent } from './student-individual/student-individual.component';

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
		path:'**',
		redirectTo:'homepage'
	}
];

export const Lab14Routes = RouterModule.forRoot(lab14Routes);