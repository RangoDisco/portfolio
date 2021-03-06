import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/home/components/navbar/navbar.component';
import { IntroComponent } from './pages/home/components/intro/intro.component';
import { ProjetsComponent } from './pages/home/components/projets/projets.component';
import { IconsModule } from './icons/icons.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LanguagesToolsComponent } from './pages/home/components/languages-tools/languages-tools.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ProjetsComponent,
    NotFoundComponent,
    LanguagesToolsComponent,
    HomeComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IconsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
