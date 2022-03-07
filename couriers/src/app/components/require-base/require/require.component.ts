import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IRequire } from '../requires-base';

@Component({
  selector: 'app-require',
  templateUrl: './require.component.html',
  styleUrls: ['./require.component.scss']
})
export class RequireComponent {
@Input() reqFromBase!:IRequire
@Output() onCloseRequire = new EventEmitter()
  constructor() { }

  closeRequire(){
this.onCloseRequire.emit();
  }

}
