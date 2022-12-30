import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const routes: Routes = [
  { path: "", component: DashboardComponent},
  { path: "dash", component: DashboardComponent },
  { path: "side", component: SidemenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
