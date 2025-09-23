import { Component, inject, OnInit } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { selectLanguage, selectNotifications, selectTheme } from "./home.selectors";
import { setLanguage, setTheme, toggleNotifications } from "./home.actions";

@Component({
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    selector: 'app-myapp2-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    #store = inject(Store)
    theme$ = this.#store.select(selectTheme);
    language$ = this.#store.select(selectLanguage)
    notifications$ = this.#store.select(selectNotifications);

    ngOnInit(): void {
        this.#store.dispatch(setTheme({ theme: 'light' }));
        this.#store.dispatch(setLanguage({ language: 'en' }));
        this.#store.dispatch(toggleNotifications());
    }
}