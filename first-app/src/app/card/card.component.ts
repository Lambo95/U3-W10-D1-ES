import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let counter = 0;
    let votes = document.getElementById('votes') as HTMLElement;
    let btnUp = document.getElementById('up') as HTMLButtonElement;
    console.log(btnUp);

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
// let counter = 0;
// let votes = document.getElementById('votes') as HTMLElement;
// let btnUp = document.getElementById('up') as HTMLButtonElement;
// let btnDown = document.getElementById('down') as HTMLButtonElement;

// function upvote() {
//   btnUp?.addEventListener('click', () => {
//     counter++;
//     votes.innerHTML = counter + ' votes';
//   });
// }
// upvote();
// function downvote() {
//   btnDown?.addEventListener('click', () => {
//     counter--;
//     votes.innerHTML = counter + ' votes';
//   });
// }
// downvote();
