import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  currentStyles: Record<string, string> = {};

  public display = '';

  ngOnInit(): void {
  }

  public openSidebar() {
    console.log("sidebar");
    if (this.display === '')
      this.display = 'block';
    else
      this.display = '';
  }

}
