import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports:  [
              RouterOutlet,
              HeaderComponent,
              HttpClientModule,
              TranslateModule
             ],
})
export class AppComponent {
  title = 'krowFotografia';
  translateService = inject(TranslateService);

  onSelectChange(event: any) {
    console.log(event.target.value);
    this.translateService.use(event.target.value);
  }
}
