import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'men/shoes',component:ShoesComponent},
  {path:'men/sandals',component:SandalsComponent},
  {path:'men/flipflops',component:FlipflopsComponent},
  {path:'men/socks',component:SocksComponent},

  {path:'women/wshoes',component:WshoesComponent},
  {path:'women/wsandals',component:WsandalsComponent},
  {path:'women/wflipflops',component:WflipflopsComponent},
  {path:'women/wsocks',component:WsocksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
