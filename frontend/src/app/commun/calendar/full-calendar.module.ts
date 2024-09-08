import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; 

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule 
  ],
  exports: [
    FullCalendarModule
  ]
})
export class FullCalendarCustomModule { }
