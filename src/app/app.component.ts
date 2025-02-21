import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = true;

  ngOnInit() {
    // For now to get a feel - this will become a app loading screen
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
