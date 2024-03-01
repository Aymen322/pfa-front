// formation.model.ts
import { Beneficiaire } from './Beneficiaire';
import { Formateur } from './Formateur';

export class Formation {
    id: number;
    description: string;
    price: number;
    startDate: Date;
    endDate: Date;
    beneficiaires: Beneficiaire[];
    formateur: Formateur;

    constructor(id: number, description: string, price: number, startDate: Date, endDate: Date,
                beneficiaires: Beneficiaire[], formateur: Formateur) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.beneficiaires = beneficiaires;
        this.formateur = formateur;
    }
}
