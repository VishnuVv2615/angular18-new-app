import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
data:any;
  constructor(private api:ApiService) {}

ngOnInit(): void {
  this.fetchData();
}

  fetchData(){
    this.api.fetchData().subscribe((res)=>{
      this.data=res;
    })

  }

}
