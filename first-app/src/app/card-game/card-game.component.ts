import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss'],
})
export class CardGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let counter = 0;
    let votes = document.getElementById('votes') as HTMLElement;
    let btnUp = document.getElementById('up') as HTMLButtonElement;
    let btnDown = document.getElementById('down') as HTMLButtonElement;

    function upvote() {
      btnUp?.addEventListener('click', () => {
        counter++;
        votes.innerHTML = counter + ' votes';
      });
    }
    upvote();
    function downvote() {
      btnDown?.addEventListener('click', () => {
        counter--;
        votes.innerHTML = counter + ' votes';
      });
    }
    downvote();
  }
}
