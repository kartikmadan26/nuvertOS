import { Component, OnInit } from '@angular/core';
import { CompoundStruct, baseUrl, cardsPerPage } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';
import { CompoundCardComponent } from '../compound-card/compound-card.component';
import { CompoundDetailsComponent } from '../compound-details/compound-details.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCompoundFormComponent } from '../new-compound-form/new-compound-form.component';
@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [NewCompoundFormComponent,CompoundCardComponent,CompoundDetailsComponent,HeaderComponent,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent implements OnInit{
  compounds: CompoundStruct[]=[]
  // for pagination
  cardsPerPage: number = cardsPerPage;
  currentPage: number = 0;
  totalPages: number = 0; 

  constructor(private http: HttpClient,private router: Router) {}
  // get all compounds api called on screen load
  ngOnInit(): void {
    this.http
      .get<CompoundStruct[]>(`${baseUrl}getAllCompounds`)
      .subscribe((data) => { 
        this.compounds = data;
        this.totalPages = Math.ceil(this.compounds.length / this.cardsPerPage) - 1;  //pagination
      });
  }
// navigate to compound details page with specific id
  navigateToDetail(id: number): void {
    this.router.navigate(['detail', id]);
  }
// navigate to add new compound screen
  navigateToNewCompound():void{
    this.router.navigate(['addNewCompound'])
  }
}
