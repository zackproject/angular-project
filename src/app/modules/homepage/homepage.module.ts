import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// url path
const homepageRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  declarations: [
    // Use navbar component
    HomepageComponent, NavbarComponent
  ],
  imports: [RouterModule.forChild(homepageRoutes)]
})
export class HomepageModule { }