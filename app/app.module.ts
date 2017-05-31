import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';
import {ProductModule} from './products/product.module';

@NgModule({
  imports: [ BrowserModule,FormsModule, HttpModule, ProductModule, RouterModule.forRoot([
    {path : 'welcome', component : WelcomeComponent},
    {path : '', redirectTo : 'welcome', pathMatch :'full'},
    {path : '**', redirectTo : 'welcome', pathMatch :'full'},

  ]) ],
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ],
  
  
})
export class AppModule { }
