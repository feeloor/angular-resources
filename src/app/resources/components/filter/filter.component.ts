import { Component, OnInit } from '@angular/core';
import { ResourceLevel, ResourceType } from '@app/resources/models';
import { ResourceActions, RootStoreState } from '@app/root-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  typeFilters = Object.keys(ResourceType)
    .filter(key => isNaN(Number(key)) === false)
    .sort()
    .map(key => ({ id: key, name: ResourceType[key] }));
  levelFilters = Object.keys(ResourceLevel)
    .filter(key => isNaN(Number(key)) === false)
    .sort()
    .map(key => ({ id: key, name: ResourceLevel[key] }));

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() { }

  filterByType(type: ResourceType): void {
    this.store$.dispatch(
      new ResourceActions.FilterActions.UpdateFilterTypeAction(+type)
    );
  }

  filterByLevel(level: ResourceLevel): void {
    this.store$.dispatch(
      new ResourceActions.FilterActions.UpdateFilterLevelAction(+level)
    );
  }
}
