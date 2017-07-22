import { Component, OnInit, Input, forwardRef ,   ViewChild, Optional, Inject } from '@angular/core';
import { ControlValueAccessor,NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';



@Component({
  selector: 'app-why-so-serious',
  templateUrl: './why-so-serious.component.html',
  styleUrls: ['./why-so-serious.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WhySoSeriousComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => WhySoSeriousComponent),
      multi: true,
    }        
  ]    
})
export class WhySoSeriousComponent implements OnInit,ControlValueAccessor  {


  private data: string = '';

  private cleanedString: string = '';

  private parseError: boolean;

   @ViewChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

    // the method set in registerOnChange, it is just 
    // a placeholder for a method that takes one parameter, 
    // we use it to emit changes back to the form
    private propagateChange = (_: any) => { };

    // this is the initial value set to the component
    public writeValue(obj: any) {
        if (obj) {
            this.data = obj;
            // this will format it with 4 character spacing
            this.cleanedString = this.data.substr(0,3);//JSON.stringify(this.data, undefined, 4); 
        }
    }


    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }
    // not used, used for touch input
    public registerOnTouched() { }


    // change events from the textarea
    private onChange(event) {

      let newValue = event.target.value;

        if(newValue.length > 4) {

          this.parseError = true;
        }
        else {

          this.parseError = false;
        }
        this.propagateChange(this.data);
        
    }


    // returns null when valid else the validation object 
    // in this case we're checking if the json parsing has 
    // passed or failed from the onChange method
      public validate(c: FormControl) {
        return (!this.parseError) ? null : {
            jsonParseError: {
                valid: false,
            },
        };
    }

}
