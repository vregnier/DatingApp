import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) {
    
   }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe( () => {
      console.log('registration successful');
    }, error => {          // lambda fct with argument error and just log this error
      console.log(error);
    });
    // we must subscribe because register method return an observable
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
