import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { autofillFlightComponent } from './autofillFlight.component';

const routes: Routes = [
    {
        path: '', component: autofillFlightComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class autofillFlightRoutingModule {}
