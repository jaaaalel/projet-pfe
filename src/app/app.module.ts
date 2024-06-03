import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { LoginComponent } from './components/login/login.component';
import { InscrireComponent } from './components/inscrire/inscrire.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddCircuitComponent } from './components/circuits/addcircuit/add-circuit.component';
import { EditCircuitComponent } from './components/circuits/edit-circuit/edit-circuit.component';
import { CircuitDetailsComponent } from './components/circuits/circuit-details/circuit-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CircuitsComponent,
    LoginComponent,
    InscrireComponent,
    ContactComponent,
    AddCircuitComponent,
    EditCircuitComponent,
    CircuitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
