import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Address} from '../formdata/formData.model'
import {FormdataService} from '../formdata/formdata.service'
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  title = 'Where do you live';
  address: Address;
  form: any;

  constructor(private router: Router, private formService: FormdataService) { }

  ngOnInit(){
    this.address = this.formService.getAddress();
    console.log('Address feature loaded');
  }

  save(form: any): boolean{
    if(!form.valid){
      return false;
    }
    this.formService.setAddress(this.address);
    return true 
  }

  goToPrevious(form: any){
    if(this.save(form)){
      //Navigate to the work page
      this.router.navigate(['/work'])
    }
  }

  goToNext(form: any){
    if(this.save(form)){
      //Navigate to the result page
      this.router.navigate(['/result'])
    }
  }



}
