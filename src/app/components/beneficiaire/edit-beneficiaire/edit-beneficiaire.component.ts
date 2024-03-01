import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiaire } from 'src/app/models/Beneficiaire';
import { BeneficiaireService } from 'src/app/services/BeneficiaireService';

@Component({
  selector: 'app-edit-beneficiaire',
  templateUrl: './edit-beneficiaire.component.html',
  styleUrls: ['./edit-beneficiaire.component.css']
})
export class EditBeneficiaireComponent implements OnInit {
  beneficiaire!: Beneficiaire; 
  beneficiaireId: number;

  constructor(
    private beneficiaireService: BeneficiaireService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.beneficiaireId = 0;
  }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot) {
      const idParam = routeSnapshot.paramMap.get('id');
      if (idParam) {
        this.beneficiaireId = +idParam;
        this.fetchBeneficiaire(this.beneficiaireId);
      }
    }
  }

  fetchBeneficiaire(beneficiaireId: number): void {
    this.beneficiaireService.getBeneficiaireById(beneficiaireId).subscribe(
      (beneficiaire) => {
        this.beneficiaire = beneficiaire;
      },
      (error) => {
        console.error('Error fetching beneficiaire:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.beneficiaire) {
      this.beneficiaireService.updateBeneficiaire(this.beneficiaire).subscribe(
        () => {
          console.log('Beneficiaire updated successfully');
          this.router.navigate(['/beneficiaire']); 
        },
        (error) => {
          console.error('Error updating beneficiaire:', error);
        }
      );
    }
  }
}
