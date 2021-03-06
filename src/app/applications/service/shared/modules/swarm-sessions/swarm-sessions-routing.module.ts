import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionCreateComponent } from './components/question-create/question-create.component';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';

const routes: Routes = [
  { path: '', component: QuestionsListComponent },
  { path: ':pkSession/create', component: QuestionCreateComponent },
  { path: ':pkSession/:pk', children: [
    { path: '', component: QuestionDetailComponent },
    { path: 'edit', component: QuestionEditComponent }
  ]},
  { path: ':pkSession', component: QuestionsListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwarmSessionsRoutingModule {}
