import { Component } from '@angular/core';
import { BaseService } from './services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private base: BaseService
  ) { }

  navigate(path: string, id?: any) {
    this.base.navigate(path, id);
  }
}
