import { Component, OnInit } from '@angular/core';
import { UserRepository, User } from './repositories/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular with axios';
  user: User | null = null;

  constructor(private UserRepo: UserRepository) { }

  ngOnInit() {
    this.fetchUser();
  }

  changeUser() {
    this.user = null;
    this.fetchUser();
  }

  private async fetchUser() {
    this.user = await this.UserRepo.random();
  }
}
