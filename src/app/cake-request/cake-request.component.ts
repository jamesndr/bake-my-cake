import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { canDeactivateGuard } from '../services/can-deactivate.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CakeOrderComponent } from '../cake-order/cake-order.component';
import { CakeOrder } from '../models/cake-order';
import { CakeOrderService } from '../services/cake-order.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cake-request',
  templateUrl: './cake-request.component.html',
  styleUrls: ['./cake-request.component.css'],
})
export class CakeRequestComponent implements OnInit {
  isCakeCompLoggedIn = true;
  cakeOrder!:MatTableDataSource<CakeOrder>;

  @ViewChild('paginator') paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.cakeOrderService.getCakeOrders().subscribe({
      next: (data) => {
        console.log(data);
        this.cakeOrder = new MatTableDataSource(data);
        console.log(this.cakeOrder);
        this.cakeOrder.paginator = this.paginator;
        this.cakeOrder.paginator.length = data.length;
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  removeDetail(id: number){
    let toRemoveData = confirm("Order data will be removed. Are you sure want to remove?");
    if(toRemoveData){
      this.cakeOrderService.deleteCakeOrder(id).subscribe({
        next: (data) => {
          const currentData = this.cakeOrder.data;
          const newData = currentData.filter(order=> order.id !== id);
          this.cakeOrder.data = newData;
          this._snackBar.open('Order data removed successfully', 'success', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        },
        error: (error) => {
          alert(error);
        },
      });
    }
    
  }

  displayedColumns: string[] = [
    'id',
    'customerName',
    'customerPhoneNum',
    'productName',
    'quantity',
    'unit',
    'totalAmount',
    'deliveryDate',
    'message',
    'state',
    'city',
    'street',
    'pincode',
    'status'
  ];

  constructor(
    private authService: AuthServiceService,
    private cakeOrderService: CakeOrderService,
    private _snackBar: MatSnackBar
  ) {}
}
