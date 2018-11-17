import { Component, OnInit } from '@angular/core';
import { Resource } from '@app/resources/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  RootStoreState,
  ResourceSelectors,
  ResourceActions
} from '@app/root-store';
import { User, AuthService } from '@app/core';

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
  ) {}

  ngOnInit() {
    this.resources$ = this.store$.select(
      ResourceSelectors.ResourceSelectors.selectAllResources
    );

    this.isLoading$ = this.store$.select(
      ResourceSelectors.ResourceSelectors.selectResourceIsLoading
    );

    this.store$.dispatch(
      new ResourceActions.ResourceCollectionActions.LoadResourcesAction()
    );

    this.user$ = this.authService.user;
  }
}
