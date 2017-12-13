import { MasterPageComponent } from './master-page/master-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { CustomerPagesComponent } from './pages/customer-pages/customer-pages.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { QrscanPageComponent } from './pages/qrscan-page/qrscan-page.component';

export const ApplicationRoutes = [
  {
    path: 'Customer',
    loadChildren:
      './pages/customer-pages/customer-pages.module#CustomerPagesModule'
  },
  {
    path: 'Supplier',
    loadChildren:
      './pages/supplier-page/supplier-page.module#SupplierPageModule'
  },
  {
    path: 'QRScan',
    loadChildren: './pages/qrscan-page/qrscan-page.module#QrscanPageModule'
  },
  { path: '', component: WelcomePageComponent },
  { path: 'master-page', component: WelcomePageComponent }
];

export const CustomerRoutes = [
  { path: 'Show', component: CustomerPagesComponent }
];

export const SupplierRoutes = [
  { path: 'Show', component: SupplierPageComponent }
];

export const QRScanRoutes = [{ path: 'Show', component: QrscanPageComponent }];
