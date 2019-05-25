import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/shared/services/ui.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input()
  users: User[];
  $tabSelected: Observable<boolean>;
  flag = false;

  constructor(private uiServivce: UiService) {}

  ngOnInit(): void {
    this.isTabSelected();
  }

  isTabSelected(): void {
    this.uiServivce.dataTabSelected.subscribe(flag => (this.flag = flag));
  }
}
