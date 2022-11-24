import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  restaurantRecords: Restaurant = {
    id: 0,
    name: '',
    owner: '',
    mobile: '',
    email: '',
    location: ''
  }

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'))
      this.getById(id)
    })
  }

  getById(id: number) {
    this.restaurantService.getbyId(id).subscribe((data) => {
      this.restaurantRecords = data;
    })
  }

  updateRecords() {
    this.restaurantService.update(this.restaurantRecords).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
}
