import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

// UI components: https://material.angular.io/components
import {MatButtonModule, MatCheckboxModule, MatProgressBar, MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';

// File Drag+Drop: https://github.com/leewinder/ng2-file-drop

// Local Modules
import { AppComponent } from './app.component';
import {FileDropModule} from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    HttpModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


