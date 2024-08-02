import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompoundStruct, baseUrl } from '../interfaces/interface';

@Component({
  selector: 'app-compound-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compound-details.component.html',
  styleUrl: './compound-details.component.css'
})
export class CompoundDetailsComponent implements OnInit {
  chem_id: string = '';
  data:CompoundStruct={
    id: 0,
    CompoundName: '',
    CompoundDescription: '',
    strImageSource: '',
    strImageAttribution: '',
    dateModified: '',
  };
  dataNotFound: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {   //routing to the detail page
      this.chem_id = params['id'];
    });
    this.http
      .get(`${baseUrl}getCompoundUsingId/${this.chem_id}`)
      .subscribe((data) => {
        if (data) {
          this.data = data as CompoundStruct;
          this.dataNotFound = false; // Data is found
        } else {
          this.dataNotFound = true; // No data found
        }
      });
  }

  onViewMore() {
      window.open(this.data.strImageAttribution, '_blank');
  }
  onUpdate() {
    this.data.CompoundName=prompt('Enter the name of the chemical')||this.data.CompoundName
    this.data.CompoundDescription=prompt('Enter the description of the chemical')||this.data.CompoundDescription

    this.http
      .put(`${baseUrl}updateCompound/${this.chem_id}`, this.data)
      .subscribe((data) => {
        // window.location.href = '/';
      });
  }

  onDelete() {
    this.http
      .delete(`${baseUrl}deleteCompound/${this.chem_id}`)
      .subscribe((data) => {
        window.location.href = '/';
      });
  }
}
