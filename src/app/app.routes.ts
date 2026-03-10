import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ServicesComponent } from './pages/services/services';
import { PortfolioComponent } from './pages/portfolio/portfolio';
import { PricingComponent } from './pages/pricing/pricing';
import { BlogComponent } from './pages/blog/blog';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
