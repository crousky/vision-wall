import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  totalPeople: number;
  totalValue: number;
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.projectSubject.subscribe(p => {
      this.projects = p;
      this.totalPeople = 0;
      this.totalValue = 0;
      this.projects.forEach(x => {
        this.totalPeople += x.peopleImpacted;
        this.totalValue += x.valueCreated;
      });
    });
    this.projectService.getProjects();
  }

}
