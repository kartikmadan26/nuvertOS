import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() navigateToNewCompound=new EventEmitter(); 

  onAddCompound() {
    this.navigateToNewCompound.emit()
    console.log('Add New Compound button clicked');
  }
}
