import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TallyComponent } from './tally/tally.component';
import { ClientsComponent } from './clients/clients.component';
import { FlipTagComponent } from './flip-tag/flip-tag.component';
import { VisionStatementComponent } from './vision-statement/vision-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    TallyComponent,
    ClientsComponent,
    FlipTagComponent,
    VisionStatementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
