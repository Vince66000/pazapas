import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './cours/cours.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { DansesComponent } from './danses/danses.component';
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cours', component: CoursComponent},
  {path: 'accueil', component: HomeComponent},
  {path: 'danses', component: DansesComponent},
  {path: 'contact', component: ContactComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    HomeComponent,
    DansesComponent,
    ContactComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

