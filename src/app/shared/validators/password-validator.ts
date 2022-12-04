import { FormGroup } from "@angular/forms";

export function passwordValidator(password: string, rePassword: string){
    return (check: FormGroup) => {
        const group = check as FormGroup;
        const valuePass = group.get(password);
        const valueRePass = group.get(rePassword);
        return valuePass?.value === valueRePass?.value ? null : {passwordValidator: true};

    }
}