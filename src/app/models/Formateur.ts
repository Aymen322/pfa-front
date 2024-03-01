// formateur.model.ts

export class Formateur {
    id: number;
    firstName: string;
    lastName: string;
    cin: string;
    phoneNumber: string;
    email: string;
    address: string;
    domain: string;

    constructor(id: number, firstName: string, lastName: string, cin: string,
                phoneNumber: string, email: string, address: string, domain: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cin = cin;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.domain = domain;
    }
}
