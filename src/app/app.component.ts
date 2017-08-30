import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [TokenService]
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      const token = p['token'];
      if (token) {
        this.tokenService.setToken(token);
        this.router.navigate(['./']);
      }
    });
  }
}
