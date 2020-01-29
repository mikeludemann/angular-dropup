import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'dropup',
	templateUrl: './dropup.component.html',
	styleUrls: ['./dropup.component.css']
})
export class DropupComponent implements OnInit {

	@Input() textbutton: string;

	@ViewChild('dropup') el: ElementRef;
	@ViewChild('second') snd: ElementRef;
	@ViewChild('third') thd: ElementRef;

	dropbtn: {
        'color': 'white',
        'padding': '5px',
        'width': '100px',
        'border': 'none'
    };

    dropup: {
        'position': 'relative',
        'display': 'block'
    };

    dropup_content: {
        'position': 'absolute',
        'background-color': '#f1f1f1',
        'width': '100px',
        'bottom': '25px',
        'z-index': '1'
    };

    dropup_content_sub: {
        'position': 'absolute',
        'background-color': '#f1f1f1',
        'width': '100px',
        'bottom': '0px',
        'left': '100px',
        'z-index': '1'
    };

    dropup_content_sub_next: {
        'position': 'absolute',
        'background-color': '#f1f1f1',
        'width': '100px',
        'bottom': '0px',
        'left': '100px',
        'z-index': '1'
    };

    link: {
        'color': 'black',
        'padding': '5px',
        'text-decoration': 'none',
        'display': 'block'
    };

	constructor() { }

	ngOnInit() {
	}

    isVisible(visible: boolean) {
        if(visible == true){
            this.el.nativeElement.children[0].style.backgroundColor = '#2980B9';
            this.el.nativeElement.children[1].style.display = 'block';
        } else {
            this.el.nativeElement.children[0].style.backgroundColor = '#3498DB';
            this.el.nativeElement.children[1].style.display = 'none';
        }
    }

    isVisibleTwo(visible: boolean) {
        if(visible == true){
            this.el.nativeElement.children[1].style.display = 'block';
        } else {
            this.el.nativeElement.children[1].style.display = 'none';
        }
    }

    isVisibleThree(visible: boolean) {
        if(visible == true){
            this.el.nativeElement.children[1].style.display = 'block';
        } else {
            this.el.nativeElement.children[1].style.display = 'none';
        }
    }
}
