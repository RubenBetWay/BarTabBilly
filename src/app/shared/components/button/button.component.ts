import { Component, Input } from '@angular/core';
import { ButtonConfig, ButtonSize } from './button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() config: ButtonConfig | undefined;

  button = document.querySelector('.ripple-button') as HTMLButtonElement;
  customStyling: object = {}

  ngOnInit(){
    if (!this.config) return
    switch (this.config.size) {
      case (ButtonSize.Large): {
        this.customStyling = {width: '80%', height: '80px'}
      }
    }
  }

  onButtonClick(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add('ripple');
    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
}
