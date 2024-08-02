import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // method defined in homescreen component
  @Output() navigateToNewCompound=new EventEmitter(); 
  // on press of add new compound button
  onAddCompound() {
    this.navigateToNewCompound.emit()
    console.log('Add New Compound button clicked');
  }
}
