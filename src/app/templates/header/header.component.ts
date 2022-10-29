import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
