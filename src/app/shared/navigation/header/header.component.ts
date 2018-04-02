import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {  
  
  isAuth = false;
  authSubscription: Subscription;
  userPhoto: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUserAuth(); 
  }

  getUserAuth(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus; 
      if (authStatus) {        
        this.userPhoto = this.authService.getUser().photoURL || "assets/img/user.svg"
      }     
    });
  }

  logout() {
    this.authService.logout();    
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
