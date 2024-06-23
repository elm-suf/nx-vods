import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, JsonPipe, AsyncPipe],
  selector: 'app-root',
  template: ` <main>
    <pre>{{ ping$ | async | json }}</pre>
    <router-outlet></router-outlet>
  </main>`,
})
export class AppComponent {
  ping$ = inject(HttpClient).get('/api');
}
