import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';

import { ShoesComponent } from './men/shoes/shoes.component';
import { SandalsComponent } from './men/sandals/sandals.component';
import { FlipflopsComponent } from './men/flipflops/flipflops.component';
import { SocksComponent } from './men/socks/socks.component';

import { WshoesComponent } from './women/wshoes/wshoes.component';
import { WsandalsComponent } from './women/wsandals/wsandals.component';
import { WflipflopsComponent } from './women/wflipflops/wflipflops.component';
import { WsocksComponent } from './women/wsocks/wsocks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ShoesComponent,
    SandalsComponent,
    FlipflopsComponent,
    SocksComponent,
    WshoesComponent,
    WsandalsComponent,
    WflipflopsComponent,
    WsocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
