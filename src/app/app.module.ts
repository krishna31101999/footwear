import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';

import { ShoesComponent } from './men/shoes/shoes.component';
// menshoes
import { MencasualshoesComponent } from './men/shoes/mencasualshoes/mencasualshoes.component';
import { MenformalshoesComponent } from './men/shoes/menformalshoes/menformalshoes.component';
import { MensportsshoesComponent } from './men/shoes/mensportsshoes/mensportsshoes.component';


import { SandalsComponent } from './men/sandals/sandals.component';


import { FlipflopsComponent } from './men/flipflops/flipflops.component';
import { SocksComponent } from './men/socks/socks.component';

import { WshoesComponent } from './women/wshoes/wshoes.component';
import { WsandalsComponent } from './women/wsandals/wsandals.component';
import { WflipflopsComponent } from './women/wflipflops/wflipflops.component';
import { WsocksComponent } from './women/wsocks/wsocks.component';

import { CouraselComponent } from './courasel/courasel.component';

import { KshoesComponent } from './kids//kshoes/kshoes.component';
import { KsandalsComponent } from './kids/ksandals/ksandals.component';
import { KflipflopsComponent } from './kids/kflipflops/kflipflops.component';
import { KsocksComponent } from './ksocks/ksocks.component';
import { NavComponent } from './nav/nav.component';



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
    WsocksComponent,
    CouraselComponent,
    KshoesComponent,
    KsandalsComponent,
    KflipflopsComponent,
    KsocksComponent,
    NavComponent,
    MencasualshoesComponent,
    MenformalshoesComponent,
    MensportsshoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
