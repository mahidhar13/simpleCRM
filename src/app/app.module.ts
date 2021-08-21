import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './acomp/bcomp/bcomp.component';
import { DemoDirective } from './demo.directive';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent, LoginComponent, AcompComponent, BcompComponent, DemoDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'login', component:LoginComponent},
      {path: 'acomp', component: AcompComponent},
      {path: 'bcomp', component: BcompComponent},
      {path:'**', redirectTo:'welcome', pathMatch:'full'},
      {path:'', redirectTo: 'welcome', pathMatch:'full'}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
