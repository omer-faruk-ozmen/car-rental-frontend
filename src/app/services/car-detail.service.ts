import { CarDetailDto } from './../models/DTOs/carDetailDto';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44395/api/cars/getcardetail/';
  constructor(private httpClient: HttpClient) {}

  getCarDetailById(id: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + id;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
