import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Location} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportComponent implements OnInit {

  public chatForm: FormGroup;
  public chatControl: FormControl;

  public message: string;
  public messages: string[] = [];

  constructor(private cdRef: ChangeDetectorRef, private location: Location) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public navigateBack(): void {
    this.location.back();
  }

  public buildForm(): void {
    this.chatControl = new FormControl('', [Validators.required]);
    this.chatForm = new FormGroup({
      chat: this.chatControl
    });
    this.chatForm.valueChanges
      .pipe(
        debounceTime(30)
      )
      .subscribe((data) => {
        this.message = data.chat;
        this.cdRef.markForCheck();
      });
  }

  public sendMessage(): void {
    this.messages.push(this.message);
    this.message = '';
    this.resetForm();
    this.cdRef.markForCheck();
  }

  public resetForm(): void {
    this.chatForm.reset();
    this.chatForm.markAsPristine();
  }

}
