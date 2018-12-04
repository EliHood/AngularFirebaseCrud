import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from '../board.model';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  list:Board[];
  constructor(private service: BoardService,
              private firestore: AngularFirestore){}

  ngOnInit() {
    this.service.getBoards().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Board;
      })
    });

  }

  deleteBoard(event, board) {
    const response = confirm('are you sure you want to delete?');
    if (response ) {
      this.service.deleteBoard(board);
    }
    return;
  }


}
