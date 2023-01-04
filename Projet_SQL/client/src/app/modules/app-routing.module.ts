import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../pages/homepage/app.component";
import { InsertPageComponent } from "../pages/insert-page/insert-page/insert-page.component";
import { OptionsPageComponent } from "../pages/options-page/options-page.component";
import { PlansrepasPageComponent } from "../pages/plansrepas-page/plansrepas-page.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  {path: 'plansrepas', component: PlansrepasPageComponent},
  {path: 'insert', component: InsertPageComponent},
  {path: 'options', component: OptionsPageComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
