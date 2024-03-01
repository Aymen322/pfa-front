import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaireComponent } from './components/beneficiaire/beneficiaire.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBeneficiaireComponent } from './components/beneficiaire/add-beneficiaire/add-beneficiaire.component';
import { FormsModule } from '@angular/forms';
import { EditBeneficiaireComponent } from './components/beneficiaire/edit-beneficiaire/edit-beneficiaire.component';


@NgModule({
  declarations: [
    AppComponent,
    BeneficiaireComponent,
    AddBeneficiaireComponent,
    EditBeneficiaireComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
