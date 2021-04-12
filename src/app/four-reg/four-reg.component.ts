import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-four-reg',
  templateUrl: './four-reg.component.html',
  styleUrls: ['./four-reg.component.scss']
})
export class FourRegComponent implements OnInit {

  public driverfour_info:any;
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    let resp1 = this.httpClient.get("");
    resp1.subscribe((data)=>this.driverfour_info=data);
    
  }

}
