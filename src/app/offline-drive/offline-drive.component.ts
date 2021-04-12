import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offline-drive',
  templateUrl: './offline-drive.component.html',
  styleUrls: ['./offline-drive.component.scss']
})
export class OfflineDriveComponent implements OnInit {

  public offline_info:any;
  public driver_info:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    let resp = this.httpClient.get("");
    resp.subscribe((data)=>this.offline_info=data);
    
  }
}
