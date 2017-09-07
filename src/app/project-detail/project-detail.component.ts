import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.less']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.projectService.getProjects().subscribe(projects => {
        const filteredProjects: Project[] = projects.filter(x => x.id === p.get('id'));
        if (filteredProjects.length === 1) {
          this.project = filteredProjects[0];
        } else {
          this.project = null;
        }
      });
    });
  }

  backClicked() {
    this.location.back();
  }
}
