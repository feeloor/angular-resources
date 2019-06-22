import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@app/core';
import { Resource } from '@app/resources/models';
import {
  ResourceActions,
  ResourceSelectors,
  RootStoreState
} from '@app/root-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resources-container',
  templateUrl: './resources-container.component.html',
  styleUrls: ['./resources-container.component.scss']
})
export class ResourcesContainerComponent implements OnInit {
  resources$: Observable<Resource[]>;
  isLoading$: Observable<boolean>;
  user$: Observable<User>;

  constructor(
    private store$: Store<RootStoreState.State>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.resources$ = this.store$.pipe(
      select(ResourceSelectors.ResourceSelectors.selectAllResources)
    );

    this.isLoading$ = this.store$.pipe(
      select(ResourceSelectors.ResourceSelectors.selectResourceIsLoading)
    );

    this.store$.dispatch(
      new ResourceActions.ResourceCollectionActions.LoadResourcesAction()
    );

    this.user$ = this.authService.user;
  }
}
