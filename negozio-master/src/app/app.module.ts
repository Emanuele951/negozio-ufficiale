import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { NewOrdineComponent } from './new-ordine/new-ordine.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { ListClientiComponent } from './list-clienti/list-clienti.component';
import { ListOrdiniComponent } from './list-ordini/list-ordini.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NewOrdineComponent,
    NewClienteComponent,
    ListClientiComponent,
    ListOrdiniComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    RouterModule.forRoot([
      {path: 'orderList', component: ListOrdiniComponent},
      {path: 'clientList', component: ListClientiComponent},
      {path: 'newOrder', component: NewOrdineComponent},
      {path: 'newClient', component: NewClienteComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
