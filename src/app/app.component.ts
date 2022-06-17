import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private trigger: Subject<void> = new Subject<void>();
  
  title = 'havacow';
  webcamImage?: WebcamImage;

  triggerSnapshot(): void {
   this.trigger.next();
  }
  
  handleImage(webcamImage: WebcamImage): void {
   console.info('Saved webcam image', webcamImage);
   this.webcamImage = webcamImage;
  }
   
  get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
  }
}
