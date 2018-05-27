import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SucessalertComponent } from './sucessalert/sucessalert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningalertComponent,
    SucessalertComponent
  ],
  imports: [
    BrowserModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
