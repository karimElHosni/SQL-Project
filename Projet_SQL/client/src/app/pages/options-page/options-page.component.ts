import { Component, OnInit } from '@angular/core';
import { OptionsHandlerService } from 'src/app/services/options-handler.service';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.css']
})
export class OptionsPageComponent implements OnInit {

  constructor(private readonly optionsService : OptionsHandlerService) { }

  ngOnInit(): void {
    this.optionsService.page = 'update'
  }

}
