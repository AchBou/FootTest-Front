import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {map, Observable, startWith} from "rxjs";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatOption,
    MatSuffix,
    ReactiveFormsModule,
    MatIconButton
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnChanges, OnInit {
  myControl = new FormControl('');
  @Input() options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  @Output() valueSelected = new EventEmitter<string>();


  ngOnInit(){
    this.myControl.valueChanges.subscribe(value => {
      if (value) this.valueSelected.emit(value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      console.log('Data changed:', this.options);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  clear() {
    this.myControl.setValue('');
    this.valueSelected.emit('');
  }
}
