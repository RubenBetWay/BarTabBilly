import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonConfig, ButtonSize } from './button.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() config: ButtonConfig | undefined;
  @Output() onClick: EventEmitter<ButtonConfig> = new EventEmitter();

  button = document.querySelector('.ripple-button') as HTMLButtonElement;
  customStyling: {[key:string]: string} = {};

  constructor(private router: Router) {}

  ngOnInit() {
    if (!this.config) return;
    switch (this.config.size) {
      case ButtonSize.Large: {
        this.customStyling = { 
          width: '80%', 
          height: '80px', 
          margin: '8px' 
        };
        break
      }
      case ButtonSize.Small: {
        this.customStyling = { 
          width: '120px', 
          height: '16px', 
          margin: '4px' 
        };
        break
      }
    }
    if (this.config.color) {
      this.customStyling['background-color'] = this.config.color
    }
  }

  onButtonClick(event: MouseEvent) {
    this.rippleButton(event);
    if (this.config?.url) this.router.navigate([this.config?.url]);
    else this.onClick.emit(this.config);
  }

  private rippleButton(event: MouseEvent) {
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
