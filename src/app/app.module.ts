import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing , appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { GameComponent }  from './components/game.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing],
 providers: [appRoutingProviders],
  declarations: [ AppComponent ,
  GameComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
