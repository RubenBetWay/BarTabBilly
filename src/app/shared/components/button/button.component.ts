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
      case ButtonSize.XSmall: {
        this.customStyling = { 
          width: '100px', 
          height: '10px', 
          margin: '2px',
          'font-size': '10px',
          padding: '16px 0px',
        };
        break
      }
      case ButtonSize.Wide: {
        this.customStyling = { 
          'min-width': '80%', 
          margin: '8px',
          padding: '8px 16px',
        };
        break
      }
    }
    if (this.config.color) {
      this.customStyling['background-color'] = this.config.color
    }
  }

  onButtonClick() {
    if (this.config?.url) this.router.navigate([this.config?.url]);
    else this.onClick.emit(this.config);
  }}
