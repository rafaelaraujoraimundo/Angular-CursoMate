import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewComponent } from './restaurant-detail/review/review.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},

  {path: 'order-summary', component: OrderSummaryComponent},

  {path: 'restaurantes/:id', component: RestaurantDetailComponent,
  children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewComponent}
  ]},
  {path: 'restaurantes', component: RestaurantsComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: '**', component: NotFoundComponent},
 ]

