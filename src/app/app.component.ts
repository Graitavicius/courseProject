import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import * as fromAuthReducer from './auth/store/auth.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store<fromAuthReducer.State>
  ) {}
  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
