import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { RouterService } from './service/router.service';
import { ModuleService } from './service/module.service';
import { tap } from 'rxjs/operators';
import { ModuleData } from './model/module.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  existingRoutes$: any;

  constructor(private moduleService: ModuleService,
    private routerService: RouterService) {
      this.existingRoutes$ = this.moduleService.loadModules().pipe(tap(res =>
      res.forEach(x => {
        this.registerRoute(x);
      }))
    );
  }
  private registerRoute(moduleToEnable: ModuleData) {
    this.moduleService.loadModuleSystemJS(moduleToEnable).then((exports) => {
      this.routerService.createAndRegisterRoute(moduleToEnable, exports);
    });
  }
}
