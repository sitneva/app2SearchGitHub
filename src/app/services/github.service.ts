import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username: string;
  private client_id = '6702759fd5d126ad8263';
  private client_secret = '848ec7e04c3d3ee1a6c9e834b6f2ea57c555be87';

  constructor(private _http: Http) {
    console.log('Git hub ready');
    this.username = 'sitneva';
  }
  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id' + this.client_id + '?client_secret' + this.client_secret)
      .map(res => res.json());
  }
}
