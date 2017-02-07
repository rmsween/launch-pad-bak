import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Launch } from './launch';
@Injectable()
export class LaunchService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private launchesUrl = 'api/launches';  // URL to web api
    constructor(private http: Http) { }
    getLaunches(): Promise<Launch[]> {
        return this.http.get(this.launchesUrl)
            .toPromise()
            .then(response => response.json().data as Launch[])
            .catch(this.handleError);
    }
    getLaunch(id: number): Promise<Launch> {
        const url = `${this.launchesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Launch)
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.launchesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    create(project: string): Promise<Launch> {
        return this.http
            .post(this.launchesUrl, JSON.stringify({project: project}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    update(launch: Launch): Promise<Launch> {
        const url = `${this.launchesUrl}/${launch.id}`;
        return this.http
            .put(url, JSON.stringify(launch), {headers: this.headers})
            .toPromise()
            .then(() => launch)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
