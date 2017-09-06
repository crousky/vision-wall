import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WallComponent } from '../wall/wall.component';
import { ProjectsComponent } from '../projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: WallComponent
  },
  {
    path: 'app/projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
