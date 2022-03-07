import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { RequireBaseComponent } from './components/require-base/require-base.component';
import { FormComponent } from './components/require-base/form/form.component';
import { RequireComponent } from './components/require-base/require/require.component';


@NgModule({
  declarations: [
    AppComponent,
    RequireBaseComponent,
    FormComponent,
    RequireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
