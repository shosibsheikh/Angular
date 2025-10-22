import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Services } from './services/services';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: Home }, // default route
  { path: 'about', component: About },
  { path: 'gallery', component: Gallery },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } // fallbac
];

