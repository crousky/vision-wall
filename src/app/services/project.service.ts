import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Project } from '../models/project';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

@Injectable()
export class ProjectService {
    projects: Project[];
    public projectSubject: ReplaySubject<Project[]> = new ReplaySubject();

    constructor(
        private http: Http,
        private tokenService: TokenService
    ) {}

    public getProjects(): ReplaySubject<Project[]> {
        if (this.projects) {
            this.projectSubject.next(this.projects);
        } else {
            const headers = new Headers();
            const requestOptions = new RequestOptions({ headers: headers });

            headers.append('Authorization', 'Bearer ' + this.tokenService.getToken());

            this.http.get(environment.apiPath + 'projects', requestOptions)
                .subscribe(res => {
                    if (res.ok) {
                        this.projects = res.json();
                        this.projectSubject.next(this.projects);
                    }
                });
        }
        return this.projectSubject;
    }
}
