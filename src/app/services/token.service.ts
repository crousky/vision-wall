import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenService {
    private tokenValid: boolean;
    private token: string;

    public setToken(token: string): void {
        this.tokenValid = true;
        this.token = token;
    }

    public getToken(): string {
        if (!environment.production) {
            return '';
        }
        if (!this.tokenValid) {
            window.location.href = window.location.href + '/api/token';
        }
        return this.token;
    }
}
