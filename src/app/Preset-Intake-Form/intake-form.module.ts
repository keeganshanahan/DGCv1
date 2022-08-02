import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntakeFormPageRoutingModule } from './intake-form-routing.module';

import { IntakeFormPage } from './intake-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntakeFormPageRoutingModule
  ],
  declarations: [IntakeFormPage]
})
export class IntakeFormPageModule {}
