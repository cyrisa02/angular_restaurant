import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allRestaurants: Restaurant[] = [];
  displayedColumns: string[] = ['id', 'name', 'owner', 'mobile', 'email', 'location'];

  constructor() { }

  ngOnInit(): void {
  }

}
