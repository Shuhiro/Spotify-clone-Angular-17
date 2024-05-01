import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [SharedModule]
})
export class HomePageComponent {

}
