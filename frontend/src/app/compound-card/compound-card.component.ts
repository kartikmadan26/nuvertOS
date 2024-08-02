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
  @Input() compound: CompoundStruct = {
    id: 0,
    CompoundName: '',
    CompoundDescription: '',
    strImageSource: '',
    strImageAttribution: '',
    dateModified: '',
  };

  @Output() detailClick = new EventEmitter<number>();

  viewDetails() {
    this.detailClick.emit(this.compound.id);
  }
}
