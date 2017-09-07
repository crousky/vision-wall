import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  totalProjects: number;
  totalPeople: number;
  totalValue: number;
  projects: Project[];
  pagedProjects: Project[];
  currentPage: number;
  prevPageDisabled: boolean;
  nextPageDisabled: boolean;
  readonly numPerPage = 5;

  constructor(
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.projectSubject.subscribe(p => {
      this.projects = p;
      this.currentPage = 0;
      this.totalProjects = this.projects.length;
      this.totalPeople = 0;
      this.totalValue = 0;
      this.projects.forEach(x => {
        this.totalPeople += x.peopleImpacted;
        this.totalValue += x.valueCreated;
      });
      this.updatePagedList();
    });
    this.projectService.getProjects();
  }

  updatePagedList(): void {
    this.pagedProjects = this.projects.slice(this.currentPage * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
    this.prevPageDisabled = this.currentPage === 0;
    this.nextPageDisabled = (this.projects.length / this.numPerPage) - 1 < this.currentPage;
  }

  nextPageClicked() {
    if ((this.projects.length / this.numPerPage) - 1 > this.currentPage) {
      this.currentPage++;
      this.updatePagedList();
    }
  }

  prevPageClicked() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagedList();
    }
  }

  backClicked() {
    this.location.back();
  }
}
