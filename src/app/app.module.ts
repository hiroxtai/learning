import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 自作したコンポーネントを使用するためにインポートする
import { HeroesComponent } from './heroes/heroes.component';

// [(ngModel)] の双方向データバインディング構文を使用するためにインポートする
import { FormsModule } from '@angular/forms';

@NgModule({
  // モジュールに属するコンポーネントを登録する
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  // アプリケーションに必要な外部モジュールのリストを記述する
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
