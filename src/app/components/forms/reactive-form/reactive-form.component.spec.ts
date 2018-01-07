import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(() => {

    this.person = {
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
        value: 'M',
        type: 'radio',
        options: [
            { label: 'Male', value: 'M' },
            { label: 'Female', value: 'F' },
        ]
      },
      city: {
        label: 'City',
        value: 'SLC',
        type: 'select',
        options: [
            { label: '(choose one)', value: '' },
            { label: 'New York', value: 'NY' },
            { label: 'Los Angeles', value: 'LA' },
            { label: 'Salt Lake City', value: 'SLC' },
        ]
      }
    };

    this.blankPerson = {
      firstname: {
        label: 'Firstname',
        value: '',
        type: 'text',
        validators: {
          required: true
        }
      },
    };

    this.underAgePerson = {
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
        value: 12,
        type: 'number',
        validators: {
          min: 18
        }
      },
    };

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ReactiveFormComponent]
    });

  });

  it('should create', () => {
    // create component and test fixture
    fixture = TestBed.createComponent(ReactiveFormComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.formDataObj = this.person;
    component.ngOnInit();

    expect(component).toBeTruthy();
  });

  it('should validate firstname', () => {
    // create component and test fixture
    fixture = TestBed.createComponent(ReactiveFormComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.formDataObj = this.blankPerson;
    component.ngOnInit();

    const firstnameField = component.form.controls['firstname'];
    expect(firstnameField.valid).toBeFalsy();
  });

  it('should validate age', () => {
    // create component and test fixture
    fixture = TestBed.createComponent(ReactiveFormComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.formDataObj = this.underAgePerson;
    component.ngOnInit();

    const ageField = component.form.controls['age'];
    expect(ageField.valid).toBeFalsy();
  });

});
