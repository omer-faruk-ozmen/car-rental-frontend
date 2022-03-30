import { environment } from './../../environments/environment';
import { CarImage } from './../models/CarImage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44395/api/images/';

  constructor(private httpClient: HttpClient) {}

  GetCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(
      this.apiUrl + 'getbycarid?carId=' + carId
    );
  }
}
