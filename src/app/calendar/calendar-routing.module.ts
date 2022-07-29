import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage,
    children: [
      {
        path: 'week',
        children: [
          {
            path: '',
            loadChildren: () => import('../week/week.module').then(m => m.WeekPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: './calendar.page',
        pathMatch: 'full'
      },
      {
        path: 'month',
        children: [
          {
            path: '',
            loadChildren: () => import('../month/month.module').then(m => m.MonthPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: './calendar.page',
        pathMatch: 'full'
      },
        {
          path: 'day',
          children: [
            {
              path: '',
              loadChildren: () => import('../day/day.module').then(m => m.DayPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: './calendar.page',
          pathMatch: 'full'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPageRoutingModule {}
