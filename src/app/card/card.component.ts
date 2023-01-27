import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name = '';
  @Input() poster = '';
  @Input() director = '';
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
