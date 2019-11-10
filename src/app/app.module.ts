import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HelloWorldComponent } from './components/hello-world.component';
import { FakeService } from './services/fake.service';
import { HelloComponent } from './components/hello.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, HelloComponent],
  imports: [BrowserModule],
  providers: [FakeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
