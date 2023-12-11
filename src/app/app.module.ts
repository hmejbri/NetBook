import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MyListModule } from './my-list/my-list.module';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteModule } from './quote/quote.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyListModule,
    QuoteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
