import { Injectable } from '@angular/core';
import {FormData, Personal, Address} from './formData.model'


@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  private formData: FormData = new FormData()
  private isPersonalFormValid: boolean = false
  private isWorkFormValid: boolean = false 
  private isAddressFormValid: boolean =false 
  constructor() { }

  getPersoanl(): Personal {
    // Return the personal data 
    var personal : Personal ={
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email
    };
    return personal
  }

  setPersonal(data: Personal){
    // Update the personal data only when the Personal Form had been validated succcessfully
    this.isPersonalFormValid = true ;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.email = data.email 
  }

  getWork(): string{
    //Return the work type
    return this.formData.work 
  }

  setWork(data: string){
    //Update the work type on when validated successfully
    this.isWorkFormValid =true
    this.formData.work = data 
  }

  getAddress(): Address {
    //Return the address data 
    var address : Address={
      street: this.formData.street,
      city: this.formData.city,
      state: this.formData.state,
      zip: this.formData.zip
    }
    return address
  }

  setAddress(data: Address){
    // only when va;idated succefully
    this.isAddressFormValid = true;
    this.formData.street = data.street;
    this.formData.city = data.city;
    this.formData.state = data.state;
    this.formData.zip = data.zip
  }

  getFormData(): FormData{
    //Return the entire form 
    return this.formData;
  }

  resetFormData(): FormData{
    // clear the form data
    this.formData.clear();
    this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false
    return this.formData;
  }

  isFormValid(){
    // Return true if form has been validated successfully 
    return this.isPersonalFormValid && this.isWorkFormValid && this.isAddressFormValid;
  }

}
