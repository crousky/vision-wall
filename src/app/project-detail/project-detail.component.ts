import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { ProjectMetric } from './projectMetric';
import { Metric } from '../models/metric';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.less']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  peopleMetrics: ProjectMetric[];
  valueMetrics: ProjectMetric[];
  metricDescription: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.projectService.getProjects().subscribe(projects => {
        this.peopleMetrics = [];
        this.valueMetrics = [];
        const filteredProjects: Project[] = projects.filter(x => x.id === p.get('id'));
        if (filteredProjects.length === 1) {
          this.project = filteredProjects[0];
          if (this.project.externalPeopleImpacted && this.project.externalPeopleImpacted.value > 0) {
            this.peopleMetrics.push(this.createProjectMetric('External', this.project.externalPeopleImpacted));
          }
          if (this.project.internalPeopleImpacted && this.project.internalPeopleImpacted.value > 0) {
            this.peopleMetrics.push(this.createProjectMetric('Internal', this.project.internalPeopleImpacted));
          }
          if (this.project.costReduction && this.project.costReduction.value > 0) {
            this.valueMetrics.push(this.createProjectMetric('Cost Reduction', this.project.costReduction));
          }
          if (this.project.incrementalRevenue && this.project.incrementalRevenue.value > 0) {
            this.valueMetrics.push(this.createProjectMetric('Incremental Revenue', this.project.incrementalRevenue));
          }
          if (this.peopleMetrics.length > 0) {
            this.peopleMetrics[0].selected = true;
            this.metricDescription = this.peopleMetrics[0].description;
          } else if (this.valueMetrics.length > 0) {
            this.valueMetrics[0].selected = true;
            this.metricDescription = this.valueMetrics[0].description;
          }
        } else {
          this.project = null;
        }
      });
    });
  }

  selectMetric(metric: ProjectMetric) {
    this.peopleMetrics.forEach(m => m.selected = false);
    this.valueMetrics.forEach(m => m.selected = false);
    metric.selected = true;
    this.metricDescription = metric.description;
  }

  backClicked() {
    this.location.back();
  }

  createProjectMetric(title: string, metric: Metric) {
    return new ProjectMetric(
      false,
      title,
      metric.value,
      metric.description
    );
  }
}
