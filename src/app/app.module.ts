import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardsCreateComponent } from './boards-create/boards-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { BoardService } from './board.service';
import {
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

import { BoardListComponent } from './board-list/board-list.component';



const config = {
  apiKey: "*********",
  authDomain: "*********",
  databaseURL: "*********",
  projectId: "*********",
  storageBucket: "*********",
};



@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardsCreateComponent,
    BoardListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
     BrowserModule,
     FormsModule,
     MatListModule,
     ReactiveFormsModule,
     MatInputModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatProgressSpinnerModule,
     MatIconModule,
     MatButtonModule,
     MatCardModule,
     MatFormFieldModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
