import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { VariableUseComponent } from './components/variable-use/variable-use.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { OutPutchildComponent } from './components/out-putchild/out-putchild.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    VariableUseComponent,
    ParentComponent,
    ChildComponent,
    OutPutchildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
