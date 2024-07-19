import { Component, inject, Input } from '@angular/core';
import { Project } from '../../../classes/types/project';
import { FirestoreService } from '../../../services/firebase/firestore.service';
import { environment as env } from '../../../../environments/environment';
import { Folder } from '../../../classes/types/folder';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-main-data-container',
  standalone: true,
  imports: [],
  templateUrl: './main-data-container.component.html',
  styleUrl: './main-data-container.component.css'
})
export class MainDataContainerComponent {
    @Input() folderInput!: string;
    private _firestore: FirestoreService = inject(FirestoreService);
    private folders: Folder[] = [];
    
    constructor(){
        
    }

}
