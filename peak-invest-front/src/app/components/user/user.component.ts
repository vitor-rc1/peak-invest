import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  user: User | undefined;

  getUser(id: string): void {
    this.userService.getUser(Number(id))
      .subscribe(user => this.user = user);
  } 

  ngOnInit(): void {
  }

}
