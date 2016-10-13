import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'save-options',
    templateUrl: 'save-options.component.html'
})
export class SaveOptionsComponent implements OnInit {
    constructor() { }
    @Input() listModel = []; 
    @Output() listUpdated = new EventEmitter(); 
    savedList = ['some', 'saved', 'list']; 

    saveList(){
        this.savedList = this.listModel.slice(0); 
    }
    loadList(){
       this.listModel = this.savedList.slice(0);
       this.listUpdated.emit(this.listModel.slice(0)); 
    }
    clearList(){
        this.listModel = this.listModel.splice(0, this.listModel.length); 
        this.listUpdated.emit([]); 
    }
    ngOnInit() { }
}