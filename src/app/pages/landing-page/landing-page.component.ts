import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private router: Router){
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 3000); // Wait for 3 seconds (3000 milliseconds)
  }
}
