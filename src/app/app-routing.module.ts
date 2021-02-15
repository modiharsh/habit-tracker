import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHabitComponent } from './add-habit/add-habit.component';
import { ManageHabitComponent} from './manage-habit/manage-habit.component';
import { ShowHabitStatsComponent } from './show-habit-stats/show-habit-stats.component';


const routes: Routes = [
  { path: 'add', component: AddHabitComponent },
  { path: '', redirectTo: '/track', pathMatch: 'full' },
  { path: 'track', component: ManageHabitComponent},
  { path: 'stats', component: ShowHabitStatsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
