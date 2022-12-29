import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';

const routes: Routes = [
  { path: 'nav', component: NavigationComponent },
  { path: '', component: TopheadlinesComponent },
  { path: 'tech', component: TechComponent },
  { path: 'biz', component: BusinessComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
