import { Component, OnInit, Input } from '@angular/core';
import {FormdataService} from './formdata/formdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multi-step-form-angular';

  @Input() formData

  constructor(private formService: FormdataService){

  }

  ngOnInit(){
    this.formData = this.formService.getFormData()
    console.log(this.title + 'loaded')
  }

}
