import { Component } from '@angular/core';

@Component({
    templateUrl: 'opportunity.component.html'
})

export class OpportunityComponent {
   opportunities: any[] = [
       {
        oppTag: 'Plan',
        oppName: 'Project ozerflex',
        oppCompany: 'ozerflex',
        oppStage: 'Qualified',
        oppValue: 12131,
        oppClose: ' 3/24/2015', 
        oppWin: 0.3,
        oppStatus: 'open',
        oppLossReason: 'None',
        oppPriority: 'High',
        oppSource: 'Advertising',
        oppDescription:	'Some data...'
       },
       {
        oppTag: 'High',
        oppName: 'Upcoming Sells',
        oppCompany: 'Saltace',
        oppStage: 'Follow-up',
        oppValue:  3000 ,
        oppClose: '3/9/2015', 
        oppWin: 0.2,
        oppStatus: 'Lost',
        oppLossReason: 'Competitor',
        oppPriority: 'High',
        oppSource: 'Cold Call',
        oppDescription:	'Some more data...'
       },
   ];
}
