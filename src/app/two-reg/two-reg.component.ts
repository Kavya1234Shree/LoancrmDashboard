import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-two-reg',
  templateUrl: './two-reg.component.html',
  styleUrls: ['./two-reg.component.scss']
})
export class TwoRegComponent implements OnInit {

  public drivertwo_info:any;
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    let resp = this.httpClient.get("");
    resp.subscribe((data)=>this.drivertwo_info=data);
    
  }
    
}


