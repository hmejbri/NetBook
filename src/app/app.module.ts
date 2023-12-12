import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

4;
import { HttpClientModule } from '@angular/common/http';
import { MyListModule } from './my-list/my-list.module';
import { HomePageModule } from './home-page/home-page.module';
import { DetailsModalModule } from './details-modal/details-modal.module';

@NgModule({
  declarations: [AppComponent],
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
  //schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
