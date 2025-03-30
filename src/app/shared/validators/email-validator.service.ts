import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { error } from 'console';
import { subscribe } from 'diagnostics_channel';
import { delay, Observable, of, Subscriber } from 'rxjs';
import { validatorsService } from '../service/validators.service';

@Injectable({providedIn: 'root'})

export class EmailValidator implements AsyncValidator {



   

    // validate(control: AbstractControl):   Observable<ValidationErrors | null> {
    //    const email = control.value;
    //    console.log({ email})


    // return of({
    //     emailTaken:true
    //     }).pipe(
    //         delay( 2000)
    //     )
        
    // }

    validate(control: AbstractControl):   Observable<ValidationErrors | null> {
       const email = control.value;
       
       const httpCallObservable = new Observable < ValidationErrors | null >((subscribe)=> {
           console.log({ email})
        if(email === 'fernando@google.com'){
            subscribe.next({ emailTaken: true});
            subscribe.complete();
        }
        subscribe.next(null);
        subscribe.complete();

       })

       return httpCallObservable;
    }
    
    
}