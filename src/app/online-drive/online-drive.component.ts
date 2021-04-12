import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-online-drive',
  templateUrl: './online-drive.component.html',
  styleUrls: ['./online-drive.component.scss']
})
export class OnlineDriveComponent implements OnInit {

  public online_info:any;
  public driver_info:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    let resp = this.httpClient.get("");
    resp.subscribe((data)=>this.online_info=data);
    
  }
    
}