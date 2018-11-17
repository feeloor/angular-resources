import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Resource } from '@app/resources/models';
import { User } from '@app/core';
import { AddResourceComponent } from '../add-resource/add-resource.component';
import { MatDialog } from '@angular/material';
import {
  transition,
  state,
  trigger,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class ResourcesComponent implements OnInit {
  @Input()
  resources: Resource[];
  @Input()
  loading: boolean;
  @Input()
  user: User;

  displayedColumns: string[] = ['name', 'type', 'level', 'votes', 'vote'];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openAddDialog(): void {
    this.dialog.open(AddResourceComponent, {
      maxHeight: '100%',
      maxWidth: '100%',
      width: '60%',
      data: { user: this.user }
    });
  }
}
