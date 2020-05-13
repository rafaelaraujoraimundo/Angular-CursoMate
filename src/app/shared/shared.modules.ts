import { NotificationService } from './messages/notification.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { OrderService } from './../order/order.services';
import { RestaurantsService } from './../restaurants/restaurant/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';



@NgModule({
declarations: [RatingComponent,RadioComponent,InputComponent, SnackbarComponent],
imports: [FormsModule, ReactiveFormsModule, CommonModule],
exports: [RatingComponent, SnackbarComponent, RadioComponent,InputComponent, CommonModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService]
    }
  }
}
