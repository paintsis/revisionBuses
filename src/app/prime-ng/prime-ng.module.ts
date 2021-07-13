import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CardModule,
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    MenubarModule,
    DropdownModule,
    DataViewModule,
    TableModule,
    DialogModule,
    DividerModule,
    MessagesModule,
    MessageModule,
    RippleModule,ToastModule
  ]
})
export class PrimeNgModule { }
