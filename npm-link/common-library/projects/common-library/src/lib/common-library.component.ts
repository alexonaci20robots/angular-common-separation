import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-common-library',
  template: `
    <p>
      MY COMMON LIBRARY WORKS
    </p>
  `,
  styles: [
  ]
})
export class CommonLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
