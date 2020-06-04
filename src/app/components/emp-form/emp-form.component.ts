import { Component, OnInit, HostBinding } from '@angular/core';
import * as formData from '../../../assets/form.json'
import { NgForm } from '@angular/forms';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit {
  formFields: any = (formData as any).default;
  formFieldsCards: any = [this.formFields];
  @HostBinding('class') componentCssClass;
  constructor(public overlayContainer: OverlayContainer) {
    
  }
  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add('default-theme');
    this.componentCssClass = 'default-theme';
  }
  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
  replicateFormArr() {
    var tempArr = [...this.formFields];
    this.formFieldsCards.push(tempArr);
    return false;
  }
  onClear() {
    window.location.reload(true);
  }
  onChange(event, field) {
    if (this[field.onChange]) {
      this[field.onChange](event)
    }
  }
  onChangeEvent(event) {
    if (event) {
      if (event.hasOwnProperty("value"))
        console.log("Change Event Triggered, Value = " + event.value);
      else if (event.hasOwnProperty("checked"))
        console.log("Change Event Triggered, Value = " + event.checked);
      else
        console.log("Change Event Triggered, Value = " + event.target.value);
    }
  }
  onSubmit(f: NgForm) {
    var keys = Object.keys(f.form.controls);
    var result = "";    
    keys.forEach(function(key){
      result += key + " - " + f.form.controls[key].value + "\n";
    });
    alert(result);
    return false;
  }
  delete(){
    this.formFieldsCards = this.formFieldsCards.slice(0, (this.formFieldsCards.length - 1));
    return false;
  }

}
