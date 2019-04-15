import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isShown: boolean = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }


  onDropdown() {
    this.isShown = !this.isShown;
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

}
