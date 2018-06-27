import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
