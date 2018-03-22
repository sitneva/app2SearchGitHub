import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html'
  //styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private _gitHubService: GithubService){
    this._gitHubService.getUser().subscribe(user => (
      console.log(user)
    ));
  }
}
