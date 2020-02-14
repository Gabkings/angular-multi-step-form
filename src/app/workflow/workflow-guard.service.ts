import { WorkflowService } from './workflow.service';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkflowGuard implements CanActivate{
    constructor(private router:Router, private workflowservice: WorkflowService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        let path: string = route.routeConfig.path;
        return this.verifyWorkFlow(path)
    }

    verifyWorkFlow(path) : boolean{
        console.log("'Entered'"+path +"' path.'");
        //If any of the previous steps is invalid, go back to the first invalid step
        let firstPath = this.workflowservice.getFirstInvalidStep(path);
        if(firstPath.length > 0){
            console.log('Redirected to' + firstPath + "' path which it is the first invalid step.")
            let url = `/${firstPath}`;
            this.router.navigate([url]);
            return false;
        }
        return true;
    }
}