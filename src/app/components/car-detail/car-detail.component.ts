import { CarDetailService } from './../../services/car-detail.service';
import { CarService } from './../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/DTOs/carDetailDto';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetail: CarDetailDto[] = [];
  dataLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carDetailService: CarDetailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['carId']) {
        this.getCarDetailById(param['carId']);
        this.dataLoaded = true;
      }
    });
  }
  getCarDetailById(id: number) {
    this.carDetailService.getCarDetailById(id).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }
}
