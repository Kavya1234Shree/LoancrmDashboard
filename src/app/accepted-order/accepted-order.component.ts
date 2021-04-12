import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accepted-order',
  templateUrl: './accepted-order.component.html',
  styleUrls: ['./accepted-order.component.scss']
})
export class AcceptedOrderComponent implements OnInit {

  
  public picking_info:any;
  public driver_info:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    let resp = this.httpClient.get("");
    resp.subscribe((data)=>this.picking_info=data);
    
  }

}
