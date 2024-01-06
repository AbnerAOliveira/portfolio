import { Component } from '@angular/core';
import { HomeComponent } from '../../modules/home/home.component';
import { StackComponent } from '../../modules/stack/stack.component';
import { ProjectsComponent } from '../../modules/projects/projects.component';
import { ContactsComponent } from '../../modules/contacts/contacts.component';
import { HeaderComponent } from '../layout/components/header/header.component';
import { FooterComponent } from '../layout/components/footer/footer.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    HomeComponent,
    StackComponent,
    ProjectsComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {}
