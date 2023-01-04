import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunicationService } from 'src/app/services/communication.service';
import { InfosValidationService } from 'src/app/services/infos-validation.service';
import { OptionsHandlerService } from 'src/app/services/options-handler.service';

@Component({
  selector: 'app-form-repas',
  templateUrl: './form-repas.component.html',
  styleUrls: ['./form-repas.component.css']
})
export class FormRepasComponent implements OnInit{
  planNumber : string = '';
  supplierNumber : string = '';
  category : string = '';
  valueCalories: number = 4000;
  valueNbPeople: number = 2;
  valueFrequency: number = 2;
  price: number;
  form: FormGroup;
  suppliers : any;
  constructor(private readonly infosValidationsService : InfosValidationService, 
    private readonly optionsService : OptionsHandlerService,
    private readonly communicationService : CommunicationService ){}

  ngOnInit(): void {
    this.communicationService.getSuppliers().subscribe((suppliers) =>{
      if(suppliers){
        this.suppliers = suppliers;
      }
    })

    if(this.isEdit()){
      this.planNumber = this.optionsService.infos.numeroplan;
      this.supplierNumber = this.optionsService.infos.numerofournisseur;
      this.category = this.optionsService.infos.categorie;
      this.valueCalories = this.optionsService.infos.nbrcalorie;
      this.valueNbPeople = this.optionsService.infos.nbrpersonnes;
      this.valueFrequency = this.optionsService.infos.frequence;
      this.price = this.optionsService.infos.prix;

    }
    this.form = new FormGroup({
      planNumber : new FormControl(this.planNumber,Validators.pattern('p[0-9][0-9][0-9]')),
      supplierNumber : new FormControl(this.supplierNumber, Validators.required),
      category : new FormControl(this.category, Validators.required),
      price : new FormControl(this.price, [Validators.pattern('[0-9][0-9]\.[0-9][0-9]'), Validators.required])
    });
  }

  isEdit() {
    return this.optionsService.isEditPage()
  }

  isDisabled(){
    return this.form.get('planNumber')?.errors || this.form.get('supplierNumber')?.errors ||   this.form.get('category')?.errors || (this.form.get('price')?.errors); 
  }

  validateInfos(){
    this.isDisabled();
    this.planNumber = this.form.get('planNumber')?.value;
    this.supplierNumber = this.form.get('supplierNumber')?.value;
    this.category = this.form.get('category')?.value;
    this.price = this.form.get('price')?.value;
  
    this.infosValidationsService.validateAllInfos(this.isEdit() ,this.planNumber, this.supplierNumber, this.category, this.valueNbPeople, this.valueFrequency, this.valueCalories, this.price)
  }

  togglePlus(valueType : string): void {
    if(valueType === 'calories'){
      if (this.valueCalories <= 10000) {
          this.valueCalories += 500;
      }
    }

    else if (valueType === 'people'){
      if (this.valueNbPeople <= 12) {
        this.valueNbPeople += 1;
    }
    }

    else if (valueType === 'frequency'){
      if (this.valueFrequency <= 5) {
          this.valueFrequency += 1;
    }
    }
  }

  toggleMinus(valueType : string): void {
      if(valueType === 'calories'){
        if (this.valueCalories <= 10000) {
            this.valueCalories -= 500;
        }
      }

      else if (valueType === 'people'){
        if (this.valueNbPeople <= 12) {
          this.valueNbPeople -= 1;
      }
      }

      else if (valueType === 'frequency'){
        if (this.valueFrequency <= 5) {
            this.valueFrequency -= 1;
      }
      }
  }

  isAtMin(valueType : string): boolean {
    if(valueType === 'calories'){
        return this.valueCalories === 1000;
    }

    else if (valueType === 'people'){
      return this.valueNbPeople === 1
    }

    else if (valueType === 'frequency'){
      return this.valueFrequency === 1
    }
    
    return false;
  }

  isAtMax(valueType : string): boolean {
    if(valueType === 'calories'){
        return this.valueCalories === 10000;
          
    }

    else if (valueType === 'people'){
      return this.valueNbPeople === 12
    }

    else if (valueType === 'frequency'){
      return this.valueFrequency === 5
    }
    
    return false;
  }
  
}