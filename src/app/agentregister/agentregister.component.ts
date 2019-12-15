import { Component, OnInit } from '@angular/core';
 declare var $:any;
 declare const M;
@Component({
  selector: 'app-agentregister',
  templateUrl: './agentregister.component.html',
  styleUrls: ['./agentregister.component.css']
})
export class AgentregisterComponent implements OnInit {

  



  constructor() {
  
  }

  ngOnInit() {
    this.jquery_code();
  }
  jquery_code(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, Option);
    });
   
  }
 
}
