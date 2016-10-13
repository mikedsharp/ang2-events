import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
    
    items = []; 
    
    constructor() { 

    }

    addItem(item:string){
        if(item.length <= 0){
            return;
        }
        this.items.push(item); 
        console.log('item "' + item + '" has been added to the list'); 
    }

    listUpdated(newList){
        this.items = newList; 
    }

    ngOnInit() { }
}