import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CompoundStruct } from '../interfaces/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compound-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compound-card.component.html',
  styleUrl: './compound-card.component.css'
})
export class CompoundCardComponent {

  // input detials required 
  @Input() compound: CompoundStruct = {
    id: 0,
    CompoundName: '',
    CompoundDescription: '',
    strImageSource: '',
    strImageAttribution: '',
    dateModified: '',
  };

  @Output() detailClick = new EventEmitter<number>();

  // method to navigate to compound details screen
  viewDetails() {
    this.detailClick.emit(this.compound.id);
  }
}
