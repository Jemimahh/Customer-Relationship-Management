import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { CompanyComponent } from './company/company.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { DashBoardComponent } from './dashBoard/dashBoard.component'

import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    PeopleComponent,
    CompanyComponent,
    OpportunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
