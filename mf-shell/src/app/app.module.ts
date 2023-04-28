import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getManifest } from '@angular-architects/module-federation';
import { RouterModule } from '@angular/router';
import { CustomManifest } from '../../utils/config';
import { buildRoutes } from '../../utils/routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const manifest = getManifest<CustomManifest>();
const routes = buildRoutes(manifest);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
