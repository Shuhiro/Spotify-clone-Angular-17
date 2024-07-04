import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',
    component: TracksPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [HttpClientModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
