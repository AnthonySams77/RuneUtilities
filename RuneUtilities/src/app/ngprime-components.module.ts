//ngprime-components.module.ts
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [ButtonModule, RatingModule, TableModule, BrowserAnimationsModule, DropdownModule],
  exports: [ButtonModule, RatingModule, TableModule, BrowserAnimationsModule, DropdownModule]
})
export class NgPrimeComponentsModule{}