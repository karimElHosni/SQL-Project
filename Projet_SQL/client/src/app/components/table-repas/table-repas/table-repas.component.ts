import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';
import { OptionsHandlerService } from 'src/app/services/options-handler.service';
import { PlansRepas } from '../../../../../../common/tables/PlansRepas';
import { DialogConfirmationComponent } from '../../dialog-confirmation/dialog-confirmation.component';


@Component({
  selector: 'app-table-repas',
  templateUrl: './table-repas.component.html',
  styleUrls: ['./table-repas.component.css']
})
export class TableRepasComponent implements OnInit {
  dataSource : PlansRepas[] = [];
  displayedColumns: string[];

  constructor(
    private readonly communicationService : CommunicationService, 
    private readonly optionsHandlerService : OptionsHandlerService, 
    private readonly matDialog: MatDialog, 
    private readonly router : Router) 
    {}

  ngOnInit(): void {
    this.displayedColumns = this.optionsHandlerService.getDisplayColums();
    this.getRepas();
  }

  public getRepas(){
    this.communicationService.getAllPlans().subscribe((repas) =>{
      if(repas){
        this.dataSource = repas;
      }
    })
  }

  public isOptionsPage(){
    return this.optionsHandlerService.isOptionsPage();
  }

 
  public onClickDelete(row : PlansRepas){
    this.matDialog.open(DialogConfirmationComponent, {data : {planRepas : row}});

  }

  public onClickEdit(row : PlansRepas) {
    this.optionsHandlerService.setInfosToEdit(row);
    this.router.navigate(['/insert'])
  }

}
