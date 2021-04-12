import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-picked-order',
  templateUrl: './picked-order.component.html',
  styleUrls: ['./picked-order.component.scss']
})
export class PickedOrderComponent implements OnInit {

  public picked_info:any;
  public driver_info:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    let resp = this.httpClient.get("");
    resp.subscribe((data)=>this.picked_info=data);
    
  }

}
