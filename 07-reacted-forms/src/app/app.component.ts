import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '07-reacted-forms';
  genderList:string[]=['Male','Female']
  userForm!:FormGroup;
  invalidUserNames=['admin','users']

  ngOnInit():void{
    this.userForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, 
        Validators.minLength(5), Validators.maxLength(15),
        Validators.pattern("^[a-zA-Z ]*$"),
        this.inValidNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'degree': new FormControl(null, Validators.required),
      'gender': new FormControl('Male', Validators.required)
    })
  }

  onSubmit(){
    console.log('hello');
    console.log(this.userForm);
  }

  inValidNames(control:FormControl):{[s:string]:boolean}{
    if(this.invalidUserNames.indexOf(control.value)!=-1){
      return {'invalidName':true};
    }
    return {}
  }

}
