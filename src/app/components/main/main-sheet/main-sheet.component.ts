import { Component, Input } from '@angular/core';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { MainDataContainerComponent } from '../main-data-container/main-data-container.component';

@Component({
  selector: 'app-main-sheet',
  standalone: true,
  imports: [PersonalInfoComponent, MainDataContainerComponent],
  templateUrl: './main-sheet.component.html',
  styleUrl: './main-sheet.component.css'
})
export class MainSheetComponent {
    @Input() folder!:string;

    ngOnInit():void{
        console.log('desde url: '+this.folder);
    }
}
