import { ResourceType, ResourceLevel, Resource } from './../../models';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootStoreState, ResourceActions } from '@app/root-store';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {
  addForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    link: ['', [Validators.required, Validators.minLength(3)]],
    type: ['', Validators.required],
    level: ['', Validators.required]
  });

  types = Object.keys(ResourceType)
    .filter(key => isNaN(Number(key)) === false && Number(key) !== -1)
    .map(key => ({ id: key, name: ResourceType[key] }));

  levels = Object.keys(ResourceLevel)
    .filter(key => isNaN(Number(key)) === false && Number(key) !== -1)
    .map(key => ({ id: key, name: ResourceLevel[key] }));

  isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<AddResourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private store$: Store<RootStoreState.State>
  ) {}

  ngOnInit() {}

  async onSubmit() {
    this.isLoading = true;

    const newResource = new Resource({
      name: this.addForm.get('name').value,
      description: this.addForm.get('description').value,
      link: this.addForm.get('link').value,
      type: Number(this.addForm.get('type').value),
      level: Number(this.addForm.get('level').value),
      enabled: false
    });

    this.store$.dispatch(
      new ResourceActions.ResourceCollectionActions.AddResourceAction({
        resource: Object.assign({}, newResource, {
          type: ResourceType[newResource.type],
          level: ResourceLevel[newResource.level]
        })
      })
    );

    this.dialogRef.close();
  }
}
