import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyLoginPage } from './faculty-login.page';

const routes: Routes = [
  {
    path: '',
    component: FacultyLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyLoginPageRoutingModule {}
