import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'SearchOnWiki';
  pages=[];
  constructor(private wiki:WikipediaService){}

  ngOnInit(): void {
  
    
  }

  onTerm(term:any){
    console.log(term);
    this.wiki.search(term).subscribe((response:any)=>{
      this.pages=response.query.search
      
    })
    
    
  }
}
