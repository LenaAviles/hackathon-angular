import { NgModule } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  imports: [
    FieldsetModule,
    CheckboxModule,
    InputTextareaModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    FileUploadModule,
    SidebarModule,
    MenubarModule,
    PanelModule, 
    CalendarModule,   
  ],
  exports: [
    FieldsetModule,
    CheckboxModule,
    InputTextareaModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    FileUploadModule,
    SidebarModule,
    MenubarModule,
    PanelModule,
    CalendarModule,
  ],
  declarations: []
})
export class PrimengModule { }
