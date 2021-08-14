import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TimerModule} from "./timer/timer.module";
import { HomeComponent } from './home/home.component';
import { HomeButtonComponent } from './timer/home-button/home-button.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TimerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
