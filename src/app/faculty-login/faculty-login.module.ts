import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyLoginPageRoutingModule } from './faculty-login-routing.module';

import { FacultyLoginPage } from './faculty-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyLoginPageRoutingModule
  ],
  declarations: [FacultyLoginPage]
})
export class FacultyLoginPageModule {}
