import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { ContactComponent } from './components/contact/contact.component';
import { InscrireComponent } from './components/inscrire/inscrire.component';
import { LoginComponent } from './components/login/login.component';
import { AddCircuitComponent } from './components/circuits/addcircuit/add-circuit.component';
import {EditCircuitComponent } from './components/circuits/edit-circuit/edit-circuit.component';
import {CircuitDetailsComponent } from './components/circuits/circuit-details/circuit-details.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'circuits', component: CircuitsComponent },
  { path: 'inscription', component: InscrireComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-circuit', component: AddCircuitComponent },
  {path: 'edit-circuit', component: EditCircuitComponent },
  {path: 'detail-circuit', component: CircuitDetailsComponent },
 
  
  // Ajoutez d'autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

