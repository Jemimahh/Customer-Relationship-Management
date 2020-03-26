import { Component } from '@angular/core';

@Component({
    templateUrl: './people.component.html'
})

export class PeopleComponent {
    persons: any[] = [
        {
           peopleTag: 'Followup',
           peopleName: 'Thomas Liao',
           peopleCompany: 'ozerflex',
           peopleWorkEmail:	'thomas@ozerflex.com',
           peopleTitle: 'Marketing Manager',
           peopleContactType: 'Potential Customer',
           peopleWorkPhone:	'562-391-2345',
           peopleWorkWebsite: 'www.ozerflex.com',
           peopleAddress: '224 Main St	San Francisco',
           peopleCity: 'San Francisco',
           peopleZip: '90567',
           peopleLindin: 'www.linkedin.com',
           peopleDescription: 'please join our team'
        }
    ];

}
