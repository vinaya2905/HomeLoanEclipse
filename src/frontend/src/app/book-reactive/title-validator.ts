import { AbstractControl } from "@angular/forms";

export function forbiddenTitleValidator(control:AbstractControl): {[key:string]:any} | null
{
    let forbidden=/kill/.test(control.value);
    return forbidden?{'forBiddenTitle':{value:control.value}}:null;
}