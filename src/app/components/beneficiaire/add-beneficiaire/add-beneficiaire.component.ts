import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiaire } from 'src/app/models/Beneficiaire'; 
import { BeneficiaireService } from 'src/app/services/BeneficiaireService'; 

@Component({
  selector: 'app-add-beneficiaire',
  templateUrl: './add-beneficiaire.component.html',
  styleUrls: ['./add-beneficiaire.component.css']
})
export class AddBeneficiaireComponent implements OnInit {
  newBeneficiaire: Beneficiaire = {} as Beneficiaire; 

  constructor(private beneficiaireService: BeneficiaireService,private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.beneficiaireService.addBeneficiaire(this.newBeneficiaire).subscribe(
      (response) => {
        // Handle success response
        console.log('Beneficiaire added successfully:', response);
        // Reset the form after successful submission
        this.resetForm();
        this.router.navigate(['/beneficiaire']);
      },
      (error) => {
        // Handle error response
        console.error('Error adding beneficiaire:', error);
      }
    );
  }

  resetForm(): void {
    // Reset the beneficiaire object to clear the form fields
    this.newBeneficiaire = {} as Beneficiaire;
  }
}
