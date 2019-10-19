import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {MetricsComponent} from './components/metrics/metrics.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,

  },
   {
    path: 'metrics',
    component: MetricsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
