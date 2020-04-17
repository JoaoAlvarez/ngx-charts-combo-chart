import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './combo-chart';

@NgModule({
  imports:      [ BrowserModule,
  BrowserAnimationsModule,
  NgxChartsModule ],
  declarations: [ AppComponent, HelloComponent,
   ComboChartComponent, ComboSeriesVerticalComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
