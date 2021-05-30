import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ProjetsComponent } from './projets/projets.component';
import { IconsModule } from './icons/icons.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { LanguagesToolsComponent } from './languages-tools/languages-tools.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ProjetsComponent,
    NotFoundComponent,
    ScrollToTopComponent,
    LanguagesToolsComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
