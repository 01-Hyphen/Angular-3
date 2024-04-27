import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  term='';
  @Output() submitted:EventEmitter<string>=new EventEmitter<string>();

  onSubmit(event:any){
    event.preventDefault();
    // console.log(this.term);
    this.submitted.emit(this.term)
    
  }

  getTerm(event:any){
    this.term=event.target.value;
  }
}
