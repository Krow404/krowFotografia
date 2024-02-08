import { Component, Signal, inject, signal } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref,RouterLinkActive,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  //property for hidden translate value
  bandTranslate = signal(true);
  translateService = inject(TranslateService);


  //metod for update band  translate value
  changeBandTranslate(){
    this.bandTranslate.update(state=>!state);
  }

  changeTranslate(lenguje: string) {
    this.translateService.use(lenguje);
    this.changeBandTranslate();
  }

  
}
