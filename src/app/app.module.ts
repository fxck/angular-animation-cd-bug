import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: 'hello',
          component: HelloComponent,
          data: {
            key: 'hello'
          }
        },
        {
          path: '**',
          redirectTo: '/hello'
        }
      ]
    )
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
