import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeServiceService } from '../services/cake-service.service';
import { ActivatedRoute } from '@angular/router';
import { CakeOrder } from '../models/cake-order';
import { CakeOrderService } from '../services/cake-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteServiceService } from '../services/route-service.service';

@Component({
  selector: 'app-cake-order',
  templateUrl: './cake-order.component.html',
  styleUrls: ['./cake-order.component.css'],
})
export class CakeOrderComponent implements OnInit {
  cake: Cake = {};
  count:number= 0;
  cakeOrder: CakeOrder = {};
  stars: Array<number> = [];
  minDate: Date = new Date();
  submitStatus: boolean = false;
  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id') ?? '';
      this.cakeService.getCake(id).subscribe((data) => {
        this.cake = data;
        this.stars = new Array(this.cake.cakeRating);
        this.cakeOrder.productName = data.cakeName;
        this.cakeOrder.quantity = 1;
      });
    });
  }


  constructor(
    private cakeService: CakeServiceService,
    private activatedRoute: ActivatedRoute,
    private cakeOrderService: CakeOrderService,
    private snackBar: MatSnackBar,
    private router: RouteServiceService
  ) {}

  saveCakeOrder(orderForm: any) {
    this.cakeOrder.totalAmount = this.cake.cakePrice! * this.cakeOrder.quantity!
    this.cakeOrder.unit = this.cake.cakeType=='Cake'? "kg" : "pieces"
    this.cakeOrderService.saveCakeOrder(this.cakeOrder).subscribe({
      next: (data) => {
        this.submitStatus = true;
        this.snackBar.open('Order Placed successfully!', 'success', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-primary'],
        });
        this.router.navigateToHome();
      },
      error: (error) => {
        alert('Failure while connecting to server, try again!!');
      },
    });
  }

  canDeactivate() {
    if (!this.submitStatus) {
      this.submitStatus = confirm(
        'You have not placed any order. Are you sure, you want to leave?'
      );
      return this.submitStatus;
    }
    return this.submitStatus;
  }
}
