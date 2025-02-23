import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalDetails } from './personal-details-form.model';
import { ButtonConfig } from '../../components/button/button.model';
import {
  AddAndCloseButton,
  AddAndMoreButton,
  CloseButton,
  PersonalDetailsFromResponse,
} from './personal-details-form.const';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss'],
})
export class PersonalDetailsFormView {
  @Output() onFormSubmitted: EventEmitter<PersonalDetails> = new EventEmitter();
  @Output() done: EventEmitter<void> = new EventEmitter();

  personalDetailsForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl(''),
    number: new FormControl(''),
  });

  formFields = [
    { name: 'firstName', label: 'First Name: ' },
    { name: 'lastName', label: 'Last Name: ' },
    { name: 'email', label: 'Email: ' },
    { name: 'number', label: 'Contact Number: ' },
  ];

  conditionalOptions: ButtonConfig[] = [AddAndMoreButton, AddAndCloseButton];
  standardOptions: ButtonConfig[] = [CloseButton];

  onButtonClick(buttonName: string) {
    switch (buttonName as PersonalDetailsFromResponse) {
      case PersonalDetailsFromResponse.AddAndClose:{
        this.onFormSubmitted.emit(
          this.personalDetailsForm.value as PersonalDetails
        );
        console.log('Here')
        this.done.emit()
        break;
      }
      case PersonalDetailsFromResponse.AddAndNew: {
        this.onFormSubmitted.emit(
          this.personalDetailsForm.value as PersonalDetails
        );
        break;
      }
      case PersonalDetailsFromResponse.Close: {
        this.done.emit()
        break;
      }
    }
  }

  onSubmit() {
    console.log('onSubmit')

  }
}
