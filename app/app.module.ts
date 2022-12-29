import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsapiService } from './services/newsapi.service';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { TechComponent } from './tech/tech.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessComponent } from './business/business.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopheadlinesComponent,
    TechComponent,
    FooterComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
