import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  user;
  status;
  model: any = {};
  token;
  username;
  firstFormGroup: FormGroup;
  password;
  constructor(private obj: HttpService, private _nav: Router) { }
  personal;
  ngOnInit() {
    this.viewuser();
  }
  viewuser() {


    this.obj.get_user().subscribe(
      data => {
        this.personal = data.json();



      });
  }

  onLogin() {

    console.log(this.model.username)

    this.obj.login(this.model.username, this.model.password).subscribe(
      datasss => {

        // this._nav.navigate(['/dashboard'])
        Swal.fire({
          type: 'success',
          title: 'You have successfully logged ',
          showConfirmButton: false,
          timer: 1500, width: '512px',
        });

      }
    );

  }
}
