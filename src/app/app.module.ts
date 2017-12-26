import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UltimatePipesModule } from './ultimate-pipes/ultimate-pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UltimatePipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
