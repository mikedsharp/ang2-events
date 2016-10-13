import { Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'item-preview',
    templateUrl: 'item-preview.component.html'
})
export class ItemPreviewComponent implements OnInit {
    @Input() itemModel = ''; 
    constructor() { }

    ngOnInit() { }
}