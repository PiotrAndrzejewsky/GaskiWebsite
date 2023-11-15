import {Component, OnDestroy, OnInit} from '@angular/core';
import {Facilitie} from "../../../core/models/facilitie.model";
import {catchError, filter, of, Subject, take, takeUntil} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";
import {ConfirmationService} from "../../../core/services/confirmation.service";
import {FacilitiesService} from "../../../core/services/facilities.service";

@Component({
  selector: 'app-list-facilites-dialog',
  templateUrl: './list-facilites-dialog.component.html',
  styleUrls: ['./list-facilites-dialog.component.scss']
})
export class ListFacilitesDialogComponent implements OnInit, OnDestroy{
    public facilities?: Facilitie[];
    private unSubscribe$ = new Subject<void>();

    constructor(
        public dialogRef: MatDialogRef<ListFacilitesDialogComponent>,
        private confirmation: ConfirmationService,
        private facilitiesService: FacilitiesService
    ) {}

    ngOnInit() {
         this.fetchFacilities();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onDeleteClick(facilityTitle: string): void {
        // if (this.confirmation.openConfirmationDialog('Czy chcesz usunąć ' + facilityTitle + ' ?')) {
        //     this.deleteFacility(facilityTitle);
        //     this.fetchFacilities();
        // }

        // dobra jak res jest false no return else
        this.confirmation.openConfirmationDialog('Czy chcesz usunąć ' + + facilityTitle + ' ?').pipe(
            take(1),
            filter((res) => res !== 'false')
        ).subscribe(() => {
            this.deleteFacility(facilityTitle);
            this.fetchFacilities();
        })

    }

    fetchFacilities() {
       this.facilitiesService.getFacilities().pipe(
           takeUntil(this.unSubscribe$)
       ).subscribe((res) => {this.facilities = res}, (error) => {console.error(error)})
    }

    deleteFacility(facilityTitle: string) {
        this.facilitiesService.deleteFacilite(facilityTitle).pipe(
          takeUntil(this.unSubscribe$),
          catchError((e) => {
            console.log('Błąd podczas usuwania udogodnienia!');
            return of('Nie udało się usunąć udogodnienia!');
          })
        ).subscribe((res) => {
          console.log('Usunięto udogodnienie');
        }, (error) => {
          console.error(error);
        });
    }

    ngOnDestroy() {
        this.unSubscribe$.next();
        this.unSubscribe$.unsubscribe();
    }
}
