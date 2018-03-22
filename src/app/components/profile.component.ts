import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user: any[];
  repos: any[];
  constructor(private _gitHubService: GithubService){
    this._gitHubService.getUser().subscribe(user => (
      this.user = user
     // console.log(user)
    ));
    this._gitHubService.getRepos().subscribe(repos => (
      this.repos = repos
      // console.log(user)
    ));
  }
}
