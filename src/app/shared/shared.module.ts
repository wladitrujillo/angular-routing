import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MessagesComponent } from './messages/messages.component';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SafeUrlPipe,
    MessagesComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    MessagesComponent,
    LoadingComponent,
    SafeUrlPipe
  ]
})
export class SharedModule { }
