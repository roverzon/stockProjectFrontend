import { Component, OnInit } from '@angular/core';
import { Overview } from 'src/app/models/overview.model';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-overviews-list',
  templateUrl: './overviews-list.component.html',
  styleUrls: ['./overviews-list.component.css']
})
export class OverviewsListComponent implements OnInit {
  overviews?: Overview[];

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.retrieveOverviews();
  }

  retrieveOverviews(): void{
    this.overviewService.getAll().subscribe(
      data => {
        this.overviews = data;
        console.log(data)
      },
      error => {
        console.log(error)
      })
  }

}
