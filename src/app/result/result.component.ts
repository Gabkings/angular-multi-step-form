import { Component, OnInit, Input } from '@angular/core';
import {FormData} from '../formdata/formData.model'
import {FormdataService} from '../formdata/formdata.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  title = 'Thanks for staying tuned';
  @Input() formData: FormData;
  isFormValid: boolean = false 

  constructor(private formDataService: FormdataService) { }


  ngOnInit(){
    this.formData = this.formDataService.getFormData()
    this.isFormValid = this.formDataService.isFormValid();
    console.log('Result feature loaded');
  }

  submit(){
    alert('Excellent Job!');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }

}
