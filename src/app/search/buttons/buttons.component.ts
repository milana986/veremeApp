import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { City } from '../../model/city';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
@Input() citybtn: City;
@Output() emitBtn = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  deleteBtn(name: string) {
    this.emitBtn.emit(name);
  }

}
