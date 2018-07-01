import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // ตัวแปรหรือ properties
  itemCount:number = 4; // 1 way bindding
  btnText:string = 'เพิ่มรายการใหม่'; // 1 way binding
  listText:string; // 2 way binding (model)
  listall = [];

  constructor() { }

  ngOnInit() {
    // นับจำนวนรายการเริ่มต้น
    this.itemCount = this.listall.length;
  }

  addItem()
  {
    // ตรวจค่าว่าง
    if(this.listText != ""){
      // รับค่าจาก form และบันทึกลง array listall
      this.listall.push(this.listText);
      // เคลียร์ค่าฟอร์ม
      this.listText = '';
      // นับนวนล่าสุด
      this.itemCount = this.listall.length;
    }
  }

}
