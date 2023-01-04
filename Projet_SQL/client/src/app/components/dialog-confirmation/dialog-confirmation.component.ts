import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionsHandlerService } from 'src/app/services/options-handler.service';
import { PlansRepas } from '../../../../../common/tables/PlansRepas';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.css']
})
export class DialogConfirmationComponent {
  numeroPlan : string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {planRepas : PlansRepas}, private readonly optionsService : OptionsHandlerService) {
    this.numeroPlan = data.planRepas.numeroplan;
   }

   deletePlan(){
    this.optionsService.deletePlanRepas(this.numeroPlan);
   }

  

}
