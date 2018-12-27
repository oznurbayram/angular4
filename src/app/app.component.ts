import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   //index.html de bu isimle çağırılır
  templateUrl: './app.component.html',   //bu componentin html dosyası
  //template: '<div>hello world</div>',    templateUrl yerine kullanabilirsin
  styleUrls: ['./app.component.css']     //bu componentin  css dosyası
})
export class AppComponent {
  title = 'ToDoApp';
}
