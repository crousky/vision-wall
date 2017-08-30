import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { TallyComponent } from './tally/tally.component';
import { ClientsComponent } from './clients/clients.component';
import { FlipTagComponent } from './flip-tag/flip-tag.component';
import { VisionStatementComponent } from './vision-statement/vision-statement.component';
import { WallComponent } from './wall/wall.component';

@NgModule({
  declarations: [
    AppComponent,
    TallyComponent,
    ClientsComponent,
    FlipTagComponent,
    VisionStatementComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
