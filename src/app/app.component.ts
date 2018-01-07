import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  person = {
    firstname: {
      label: 'Firstname',
      value: 'Nicholas',
      type: 'text',
      validators: {
        required: true
      }
    },
    age: {
      label: 'Age',
      value: 32,
      type: 'number',
      validators: {
        min: 18
      }
    },
    gender: {
      label: 'Gender',
      value: 'F',
      type: 'radio',
      options: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]
    },
    city: {
      label: 'City',
      value: 'LA',
      type: 'select',
      options: [
        { label: '(choose one)', value: '' },
        { label: 'New York', value: 'NY' },
        { label: 'Los Angeles', value: 'LA' },
        { label: 'Salt Lake City', value: 'SLC' }
      ]
    }
  };
}
