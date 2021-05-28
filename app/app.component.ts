import { Component } from '@angular/core';
export class Person{
  id:number | undefined;
  UserName:string | undefined;
  Email:string | undefined;
  MobileNumber:number | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bindings';
  //Object Creation of Person class
  person:Person=new Person();
  personArr:Person[]=[];
  isHideTable:boolean=false;

  constructor(){
    this.person=new Person();
    this.personArr.push(this.person);
  }

  onAdd(){
    this.person=new Person();
    this.personArr.push(this.person);
  }
  onSave(){
    this.person=new Person();
    console.log(this.personArr);
    this.isHideTable=true;
  }
  
  // table:Table=new Table();
 



 
  
 
}
