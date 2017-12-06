import { MasterPageComponent } from './master-page/master-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { CustomerPagesComponent } from './pages/customer-pages/customer-pages.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';

export const ApplicationRoutes = [
  { path: 'Customer',
loadChildren: './pages/customer-pages/customer-pages.module#CustomerPagesModule' },
  { path: 'Supplier',
loadChildren: './pages/supplier-page/supplier-page.module#SupplierPageModule'},
  { path: '', component: WelcomePageComponent  },
];


export const CustomerRoutes = [
  { path: 'Show', component: CustomerPagesComponent  }
];

export const SupplierRoutes = [
  { path: 'Show', component: SupplierPageComponent  }
];
