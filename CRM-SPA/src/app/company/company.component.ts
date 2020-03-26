 import { Component} from '@angular/core';

 @Component({
    // tslint:disable-next-line: component-selector
    selector: 'app=company',
    templateUrl: 'company.component.html'
})

export class CompanyComponent  {
    companies: any[] = [
        {
            companyTag: 'Followup',
            CompanyName: 'ozerflex',
            companyEmailDomain:	'@ozerflex.com',
            companyContactType: 'Potential Customer',
            companyWorkPhone:	'562-391-2345',
            companyWorkWebsite: 'www.ozerflex.com',
            companyAddress: '224 Main St	San Francisco',
            companyCity: 'San Francisco',
            companyZip: '90567',
            companyCounty: 'US',
            companyLinkedin: 'www.linkedin.com',
            companyDescription: 'The best in the business'
        }
    ];

}
