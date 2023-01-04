import { Component, OnInit } from '@angular/core';
import { OptionsHandlerService } from 'src/app/services/options-handler.service';

@Component({
  selector: 'app-plansrepas-page',
  templateUrl: './plansrepas-page.component.html',
  styleUrls: ['./plansrepas-page.component.css']
})
export class PlansrepasPageComponent implements OnInit {

  constructor(private readonly optionsHandlerService : OptionsHandlerService) {
    this.optionsHandlerService.page = 'display';
   }

  ngOnInit(): void {
  }

}
