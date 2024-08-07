import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',
    component: TracksPageComponent,
    outlet: 'child'
  }
];

@NgModule({ exports: [RouterModule], imports: [RouterModule.forChild(routes)], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class TracksRoutingModule { }
