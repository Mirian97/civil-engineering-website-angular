import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss',
})
export class TitleSectionComponent implements OnInit {
  @Input() name!: string;
  first: string = '';
  second: string = '';

  ngOnInit(): void {
    const [first, ...second] = this.name.split(' ');
    this.first = first;
    this.second = second.join(' ');
  }
}
