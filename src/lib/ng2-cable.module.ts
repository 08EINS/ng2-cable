import { ModuleWithProviders, NgModule } from '@angular/core';
import { Ng2Cable } from './ng2-cable.service';
import { Broadcaster } from './broadcaster';

@NgModule({
  providers: [
    Ng2Cable,
    Broadcaster
  ]
})
export class Ng2CableModule {
  static forRoot(): ModuleWithProviders<Ng2CableModule> {
    return {
      ngModule: Ng2CableModule,
      providers: [
        Ng2Cable,
        Broadcaster
      ]
    };
  }
}
