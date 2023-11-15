import {Component} from '@angular/core';
import {ReservationService} from "../core/services/reservation.service";
import {Reservation, ReservationWithContactData} from "../core/models/reservedDays.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent {

    public contactForm: FormGroup = this.fb.group({
        fullName: ['', Validators.required],
        telephone: ['', [Validators.required, Validators.pattern("[0-9]{9}")]],
        email: ['', [Validators.required, Validators.email]]
    });


    public reservation?: Reservation ;

    public finalCost: number = 0 ;

    public isTelephoneFormControlFocusedOrDirty: boolean = false;

    constructor(private reservationService: ReservationService, private fb: FormBuilder, private router: Router) {
        this.reservation = reservationService.getReservation();
        this.setFinalCost();
    }

    ngOnInit() {

    }
    setIsTelephoneFormControlFocused(bool: boolean) {
        if(this.contactForm.get('telephone')?.dirty)
            return

        this.isTelephoneFormControlFocusedOrDirty = bool;
    }

    setFinalCost() {
        this.finalCost = this.reservationService.getOverallCost();
    }



    makeReservation() {
        if (this.contactForm?.invalid) {
            return;
        }
        // tutaj router wbija na nowa strone.
        // tutaj wysylac requesta na strone.
        this.reservationService.pushReservationToServer(this.assignContactDataToReservation());
        this.reservationService.setReservationProccesFinished()
        this.router.navigate(['thanks']).then();

    }
    assignContactDataToReservation(): ReservationWithContactData {

        return {
            days: this.reservation!.days,
            perDayCost: this.reservation!.perDayCost,
            serviceCost: this.reservation!.serviceCost,
            roomName: this.reservation!.roomName,
            fullName: this.contactForm.get('firstName')?.value,
            telephone: this.contactForm.get('telephone')?.value,
            email: this.contactForm.get('e-mail')?.value
        };

    }




}
