import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeServiceService } from '../services/cake-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cakes: Cake[] = [];
  ratings: any = [];
  isHomeComponent: boolean = true;
  searchText: string = '';
  filterText: string = "";//
  constructor(private cakeService: CakeServiceService) {}

  ngOnInit(): void {
    this.cakeService.getAllCakes().subscribe({
      next: (data) => {
        this.cakes = data;
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  onSearchedText(event: string) {
    this.searchText = event;
    this.cakeService.getAllCakes().subscribe({
      next: (data) => {
        if (this.searchText != '') {
          this.cakes = data.filter((cake) =>
            cake.cakeName?.toLowerCase().includes(this.searchText.toLowerCase())
          );
        } else {
          this.cakes = data;
        }
      },
      error: (error) => {
        alert('Failed to retrieve data');
      },
    });
  }

  onFiltered(event:string){
    this.filterText = event; 
    this.cakeService.getAllCakes().subscribe({
      next: (data) => {
        if (this.filterText != '') {
          if(this.filterText==="All"){
            this.cakes = data;
          }
          else{
            this.cakes = data.filter((cake) =>
              cake.cakeType
                ?.toLowerCase()
                .startsWith(this.filterText.toLowerCase())
            );
          }
        } else {
          this.cakes = data;
        }
      },
      error: (error) => {
        alert('Failed to retrieve data');
      },
    });
  }
}
