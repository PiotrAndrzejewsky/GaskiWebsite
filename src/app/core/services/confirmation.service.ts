import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from "../components/confirmation-dialog/confirmation-dialog.component";
import {catchError, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private dialog: MatDialog) { }

    openConfirmationDialog(text: string): Observable<string> {
      // tutaj tylko zwracam czcy true czy false
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data: text});

      return dialogRef.afterClosed().pipe(
          take(1),
          catchError((e) => {return 'false'})
      );

    }
}
