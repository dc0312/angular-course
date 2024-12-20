import { Component, ContentChild, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges {

  title: string = 'Demo Component'

  @Input() message: string = ''

  @ViewChild('temp') tempPara: ElementRef;

  @ContentChild('tempContent') paraContent: ElementRef;

  constructor() {
    console.log("Demo component constructor called.")
    console.log(this.title)
    console.log(this.message)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called")
    console.log(changes)
  }

  ngOnInit() {
    console.log("ngOnInit called")
  }

  ngDoCheck() {
    console.log("ngDoCheck called")
    console.log("Inside ngDoCheck: ", this.paraContent)
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called")
    console.log("Inside ngAfterContentInit: ", this.paraContent.nativeElement)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called")
    console.log("Inside ngAfterContentChecked :", this.paraContent.nativeElement)
  }


}
