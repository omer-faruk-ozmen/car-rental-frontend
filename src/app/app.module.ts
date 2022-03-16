import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterPipeCarPipe } from './pipes/filter-pipe-car.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    CarComponent,
    NaviComponent,
    CarDetailComponent,
    FilterPipePipe,
    FilterPipeCarPipe,
    FilterPipeBrandPipe,
    FilterPipeColorPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
