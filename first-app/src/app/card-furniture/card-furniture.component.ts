import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-furniture',
  templateUrl: './card-furniture.component.html',
  styleUrls: ['./card-furniture.component.scss'],
})
export class CardFurnitureComponent implements OnInit {
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
