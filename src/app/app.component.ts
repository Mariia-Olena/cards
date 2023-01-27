import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      name: 'Avatar: The Way of Water',
      poster: 'assets/avatar.jpg',
      director: 'James Cameron',
      text: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    },
    {
      name: 'Babylon',
      poster: 'assets/babylon.jpg',
      director: 'Damien Chazelle',
      text: 'A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.',
    },
    {
      name: 'The Menu',
      poster: 'assets/the_menu.jpg',
      director: 'Mark Mylod',
      text: 'A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.',
    },
  ];
}
