import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'Bar Tab Billy' },
  { path: 'home', component: HomePageComponent, title: 'BTB | Home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
