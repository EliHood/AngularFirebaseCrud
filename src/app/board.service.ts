import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Board } from './board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  formData: Board;
  boardDoc: AngularFirestoreDocument<Board>;

  constructor(private firestore: AngularFirestore){}

  getBoards(){
    return this.firestore.collection('boards').snapshotChanges();
  }


  deleteBoard(board: Board) {
    this.boardDoc = this.firestore.doc(`boards/${board.id}`);
    this.boardDoc.delete();
  }




}
