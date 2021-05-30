import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudyListComponent } from './components/study-list/study-list.component';
import { StudyDetailsComponent } from './components/study-details/study-details.component';
import { StudyCreateComponent } from './components/study-create/study-create.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'studies', component: StudyListComponent },
  { path: 'studies/:id', component: StudyDetailsComponent },
  { path: 'create', component: StudyCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }