import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaymentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
