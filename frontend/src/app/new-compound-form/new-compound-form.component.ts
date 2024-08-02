import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from '../interfaces/interface';

@Component({
  selector: 'app-new-compound-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-compound-form.component.html',
  styleUrl: './new-compound-form.component.css'
})


export class NewCompoundFormComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  compoundForm!: FormGroup;

  ngOnInit() {
    this.compoundForm = new FormGroup({
      CompoundName: new FormControl('', Validators.required),
      strImageSource: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
      CompoundDescription: new FormControl('', Validators.required),
      strImageAttribution: new FormControl('',[Validators.pattern('https?://.+')])
    });
  }

  onSubmit() {
    if (this.compoundForm.valid) {
      console.log(this.compoundForm.value);
      // Here you can send the form data to the backend or perform any action
      const formData = this.compoundForm.value;
      this.http.post(`${baseUrl}createCompound`, formData)
      .subscribe({
        next: (response) => {
          console.log('Compound created successfully:', response);
          // Optionally, navigate away or clear the form here
          window.location.href = '/';
        }
      });
    }
  }
}
