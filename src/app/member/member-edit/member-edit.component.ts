import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

}
