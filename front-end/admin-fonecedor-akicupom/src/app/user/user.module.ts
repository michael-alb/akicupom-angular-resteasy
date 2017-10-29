import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ UserComponent ],
  exports: [ UserComponent ]
})
export class UserModule { }
