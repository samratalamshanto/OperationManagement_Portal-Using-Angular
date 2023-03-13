import { Component } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent {
  actionPerformerEmailList = ['sassdfsad@gmail.com', ''];
  loggedInUserEmail = localStorage.getItem('email');
  lenList: any = this.actionPerformerEmailList.length;

  actionPerformEligible = false;

  ngOnInit() {
    for (let i = 0; i < this.lenList; i++) {
      if (this.loggedInUserEmail === this.actionPerformerEmailList[i]) {
        this.actionPerformEligible = true;
      }
    }
  }
}
