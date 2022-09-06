import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewAddressComponent } from './address/add-new-address/add-new-address.component';
import { AddressDetailsComponent } from './address/address-details/address-details.component';
import { AllAddressComponent } from './address/all-address/all-address.component';
import { UpdateDetailsComponent } from './address/update-details/update-details.component';

const routes: Routes = [
  {path:"" , component: AllAddressComponent},
  {path:"addnewaddress" , component: AddNewAddressComponent },
  {path:"addressdetails/:addressId" , component: AddressDetailsComponent },
  {path:"updatedetails/:addressId" , component: UpdateDetailsComponent }



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
