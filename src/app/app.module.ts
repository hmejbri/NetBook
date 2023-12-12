import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MyListModule } from './my-list/my-list.module';
import { HomePageModule } from './home-page/home-page.module';
import { DetailsModalModule } from './details-modal/details-modal.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyListModule,
    HomePageModule,
    DetailsModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
