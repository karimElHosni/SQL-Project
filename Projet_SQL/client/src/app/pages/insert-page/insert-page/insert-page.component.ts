import { Component, OnDestroy } from '@angular/core';
import { OptionsHandlerService } from 'src/app/services/options-handler.service';

@Component({
  selector: 'app-insert-page',
  templateUrl: './insert-page.component.html',
  styleUrls: ['./insert-page.component.css']
})
export class InsertPageComponent implements OnDestroy {

  constructor(private readonly optionsHandlerService : OptionsHandlerService) {
    this.optionsHandlerService.page = 'insert';
   }

  ngOnDestroy() {
    this.optionsHandlerService.resetEdit();
  }

}
