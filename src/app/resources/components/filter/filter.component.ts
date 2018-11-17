import { Component, OnInit } from '@angular/core';
import { ResourceType, ResourceLevel } from '@app/resources/models';
import { RootStoreState, ResourceActions } from '@app/root-store';
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

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {}

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
