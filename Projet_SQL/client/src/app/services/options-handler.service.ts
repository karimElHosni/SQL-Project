import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { PlansRepas } from "../../../../common/tables/PlansRepas";
import { ConfirmationSnackbarComponent } from "../components/confirmation-snackbar/confirmation-snackbar.component";
import { CommunicationService } from "./communication.service";

@Injectable()
export class OptionsHandlerService {
  page : string; 
  infos : PlansRepas;
  private isEdit : boolean;
  public constructor(private readonly communicationService : CommunicationService, 
    private readonly router : Router,
    private readonly snackBar : MatSnackBar) {}

  isOptionsPage(){
    return this.page === 'update'
  }

  isEditPage(){
    return this.isEdit;
  }

  resetEdit() {
    this.isEdit = false;
  }

  setInfosToEdit(row : PlansRepas) {
    this.infos = row;
    this.isEdit = true;
  }

  getDisplayColums(){
    if(this.isOptionsPage()){
        return ['numeroplan','numerofournisseur','categorie', 'frequence', 'nbrcalories', 'nbrpersonnes', 'prix', 'options'];
    }
    return ['numeroplan','numerofournisseur','categorie', 'frequence', 'nbrcalories', 'nbrpersonnes', 'prix'];
}

  deletePlanRepas(numeroPlan : string){
      this.communicationService.deletePlan(numeroPlan).subscribe(() => {});
      this.router.navigate(['/']);
      this.snackBar.openFromComponent(ConfirmationSnackbarComponent, {duration : 3000})
  }

}
