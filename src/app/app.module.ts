import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HelloWorldComponent } from './components/hello-world.component';
import { FakeService } from './services/fake.service';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule],
  providers: [FakeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
