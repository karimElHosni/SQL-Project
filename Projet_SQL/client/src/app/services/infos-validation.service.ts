import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PlansRepas } from '../../../../common/tables/PlansRepas';
import { ConfirmationSnackbarComponent } from '../components/confirmation-snackbar/confirmation-snackbar.component';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { CommunicationService } from './communication.service';


@Injectable({
  providedIn: 'root'
})
export class InfosValidationService {
  dataSource : PlansRepas[] = [];

  constructor(private readonly communicationService : CommunicationService, 
    private readonly matDialog: MatDialog, private router: Router,
    private readonly snackBar : MatSnackBar) { 
    this.getRepas()
  }

  public getRepas(){
    this.communicationService.getAllPlans().subscribe((repas) =>{
      if(repas){
        this.dataSource = repas;
      }
    })
  }

  validateAllInfos(isEdit : boolean, planNumber : string, supplierNumber : string, category : string, nbPeople : number, frequency : number, calories : number, price : number){
    if(this.validatePlanNumber(planNumber, isEdit)){
      if(isEdit){
        this.updatePlanRepas(planNumber, supplierNumber, category, nbPeople, frequency, calories, price)
      }
      else {
        this.addPlanRepas(planNumber, supplierNumber, category, nbPeople, frequency, calories, price)
      }
    };
  }

  private addPlanRepas(planNumber : string, supplierNumber : string, category : string, nbPeople : number, frequency : number, calories : number, price : number) {
    const planRepas : PlansRepas = {categorie : category, frequence: frequency, nbrcalorie: calories, nbrpersonnes: nbPeople, numerofournisseur : supplierNumber, numeroplan : planNumber, prix: price};
    this.communicationService.insertPlan(planRepas).subscribe((response: any | null) => {
      if (!response) {
        this.matDialog.open(ErrorDialogComponent, {data : {error : 'Il y a eu une erreur lors de l\'insertion du plan'}});
          return;
      }
    });
    this.router.navigate(['/']);
    this.snackBar.openFromComponent(ConfirmationSnackbarComponent, {duration : 3000})
  }

  private updatePlanRepas(planNumber : string, supplierNumber : string, category : string, nbPeople : number, frequency : number, calories : number, price : number) {
    const planRepas : PlansRepas = {categorie : category, frequence: frequency, nbrcalorie: calories, nbrpersonnes: nbPeople, numerofournisseur : supplierNumber, numeroplan : planNumber, prix: price};
    this.communicationService.updatePlan(planRepas).subscribe((response: any | null) => {
      if (!response) {
        this.matDialog.open(ErrorDialogComponent, {data : {error : 'Il y a eu une erreur lors de la mise à jour du plan du plan'}});
          return;
      }
    });
    this.router.navigate(['/']);
    this.snackBar.openFromComponent(ConfirmationSnackbarComponent)
    
  }

  private validatePlanNumber(planNumber : string, isEdit : boolean){
    if(!planNumber.startsWith('p') ){
      this.matDialog.open(ErrorDialogComponent, {data : {error : 'Le plan doit absoluement commencer par la lettre p.'}});
      return false;
    }

    if(this.planAlreadyExists(planNumber) && !isEdit  ){
        this.matDialog.open(ErrorDialogComponent, {data : {error : 'Ce plan existe déjà. Veuillez inscrire un autre numéro de plan.'}});
        return false;
    }

    return true;
  }

  private planAlreadyExists(planNumber : string) : boolean {
    for(const plan of this.dataSource){
      if(plan.numeroplan === planNumber){
        return true;
      }
    }
    return false;
  }

}
