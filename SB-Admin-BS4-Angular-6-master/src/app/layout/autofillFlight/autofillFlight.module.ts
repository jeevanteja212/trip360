import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { autofillFlightRoutingModule } from './autofillFlight-routing.module';
import { autofillFlightComponent } from './autofillFlight.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, autofillFlightRoutingModule,FormsModule],
    exports: [FormsModule],
    declarations: [autofillFlightComponent]
})
export class autofillFlightModule {

    options = [
    'One',
    'Two',
    'Three'
   ];

}
