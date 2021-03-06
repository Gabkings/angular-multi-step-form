import { RouterModule } from '@angular/router';
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';


/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormdataService }    from './formdata/formdata.service';
import { WorkflowService }    from './workflow/workflow.service';

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    RouterModule
                  ],
    providers:    [{ provide: FormdataService, useClass: FormdataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent ],
    bootstrap:    [AppComponent]
})

export class AppModule {}