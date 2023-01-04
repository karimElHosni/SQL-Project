import { Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';


@Component({
  selector: 'app-confirmation-snackbar',
  templateUrl: './confirmation-snackbar.component.html',
  styleUrls: ['./confirmation-snackbar.component.css']
})
export class ConfirmationSnackbarComponent {

  constructor(public snackBarRef: MatSnackBarRef<ConfirmationSnackbarComponent>) { }

}
