import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../_services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  movies:any;

  constructor(private apiMovie:MovieService){}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(){
    this.apiMovie.fetchMovies().subscribe((res)=>{
      this.movies=res;
    })
  }

}
