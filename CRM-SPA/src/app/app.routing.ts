import { Routes, RouterModule } from '@angular/router';

import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { PeopleComponent } from './people/people.component';
import { CompanyComponent } from './company/company.component';
import { OpportunityComponent } from './opportunity/opportunity.component';

export const appRoutes: Routes = [
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'opportunity', component: OpportunityComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
];

