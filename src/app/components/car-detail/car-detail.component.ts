import { Car } from 'src/app/models/car';
import { CarDetailService } from './../../services/car-detail.service';
import { CarService } from './../../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetailDto: CarDetailDto[] = [];
  apiUrl = 'https://localhost:44370/uploads/images/';
  currentCarDetail: CarDetailDto;
  dataLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.dataLoaded = true;
      }
    });
  }

  setCurrentCarDetail(carDetailDto: CarDetailDto) {
    this.currentCarDetail = carDetailDto;
  }

  getCarDetails() {
    this.carService.GetCarDetail().subscribe((response) => {
      this.carDetailDto = response.data;
      console.log(this.carDetailDto);
    });
  }

  getCarDetailsById(id: number) {
    this.carService.GetCarById(id).subscribe((response) => {
      this.carDetailDto = response.data;
      console.log(this.carDetailDto);
    });
  }
}
