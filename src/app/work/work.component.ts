import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import {FormdataService } from '../formdata/formdata.service'
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  title = 'What do you do?'
  workType: string;
  form: any;
  constructor(private router: Router, private formDataService: FormdataService) { }

  ngOnInit(){
    this.workType = this.formDataService.getWork()
    console.log('Work feature loaded')
  }

  save(form: any): boolean{
    if(!form.valid){
      return false
    }
    this.formDataService.setWork(this.workType);
    return true 
  }

  goToPrevious(form:any){
    if(this.save(form)){
      //Navigate to the personal page
      this.router.navigate(['/personal'])
    }
  }

  goToNext(form: any){
    if(this.save(form)){
      //Navgate to the address page
      this.router.navigate(['/address']);
    }
  }

}


