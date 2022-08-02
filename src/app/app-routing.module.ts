import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'faculty-login',
    loadChildren: () => import('./faculty-login/faculty-login.module').then( m => m.FacultyLoginPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.page').then( m => m.CalendarPage)
  },
  {
    path: 'week',
    loadChildren: () => import('./week/week.module').then( m => m.WeekPageModule)
  },
  {
   path: 'make-appointment',
  loadChildren: () => import('./make-appointment/make-appointment.module').then (m => m.MakeAppointmentPageModule)
  },
  {
    path: 'intake-form',
    loadChildren: () => import('./intake-form/intake-form.module').then( m => m.IntakeFormPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'month',
    loadChildren: () => import('./month/month.module').then( m => m.MonthPageModule)
  },
  {
    path: 'day',
    loadChildren: () => import('./day/day.module').then( m => m.DayPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'make-appointment',
    loadChildren: () => import('./make-appointment/make-appointment.module').then( m => m.MakeAppointmentPageModule)
  },
  {
    path: 'edit-appointment/:id',
    loadChildren: () => import('./edit-appointment/edit-appointment.module').then( m => m.EditAppointmentPageModule)
  },
  {
    path: 'edit-appointment',
    loadChildren: () => import('./edit-appointment/edit-appointment.module').then( m => m.EditAppointmentPageModule)
  },
  {
    path: 'intake-form copy',
    loadChildren: () => import('./intake-form copy/intake-form.module').then( m => m.IntakeFormPageModule)
  },
{
  path: 'Preset-Intake-Form',
  loadChildren: () => import('./Preset-Intake-Form/intake-form.module').then( m => m.IntakeFormPageModule)
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
