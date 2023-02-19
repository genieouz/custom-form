import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[edacyDropdown]'
})
export class DropdownDirective implements AfterViewInit {
  @Input() dropdownContent: TemplateRef<any>;
  showDropdown = false;

  constructor(
    private renderer: Renderer2,
    private vcRef: ViewContainerRef,
    private elemRef: ElementRef
  ) {}

  @HostListener('click')
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    if (this.showDropdown) {
      this.vcRef.createEmbeddedView(this.dropdownContent);
    } else {
      this.vcRef.clear();
    }
  }
  closeDropdown(event: Event) {
    if (
      !this.elemRef.nativeElement.contains(event.target) &&
      !(event.target as any).classList.contains('dropdown-search')
    ) {
      this.showDropdown = false;
      this.vcRef.clear();
    }
  }
  ngAfterViewInit() {
    this.renderer.listen('document', 'click', event => {
      this.closeDropdown(event);
    });
  }
}
