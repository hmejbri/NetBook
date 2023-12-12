import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModalComponent } from './details-modal.component';

@NgModule({
  declarations: [DetailsModalComponent],
  imports: [CommonModule],
  exports: [DetailsModalComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DetailsModalModule {}
