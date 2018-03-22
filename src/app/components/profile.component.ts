import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user: any[];
  constructor(private _gitHubService: GithubService){
    this._gitHubService.getUser().subscribe(user => (
      this.user = user
    ));
  }
}
