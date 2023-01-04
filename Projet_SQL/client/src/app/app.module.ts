import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./pages/homepage/app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlansrepasPageComponent } from './pages/plansrepas-page/plansrepas-page.component';
import { TableRepasComponent } from './components/table-repas/table-repas/table-repas.component';
import { InsertPageComponent } from './pages/insert-page/insert-page/insert-page.component';
import { OptionsHandlerService } from "./services/options-handler.service";
import { DialogConfirmationComponent } from './components/dialog-confirmation/dialog-confirmation.component';
import { FormRepasComponent } from './components/form-repas/form-repas.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { OptionsPageComponent } from './pages/options-page/options-page.component';
import { ConfirmationSnackbarComponent } from './components/confirmation-snackbar/confirmation-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlansrepasPageComponent,
    TableRepasComponent,
    InsertPageComponent,
    DialogConfirmationComponent,
    FormRepasComponent,
    ErrorDialogComponent,
    OptionsPageComponent,
    ConfirmationSnackbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [CommunicationService, OptionsHandlerService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
