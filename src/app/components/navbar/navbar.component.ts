import { Component, inject } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { Folder } from '../../classes/types/folder';
import { FirestoreService } from '../../services/firebase/firestore.service';
import { environment as env } from '../../../environments/environment';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    private _firestore: FirestoreService = inject(FirestoreService);
    private folders: Folder[] = [];
    private _router: Router = inject(Router);
    private currentRoute: string="";

    public get getUserFolders(): Folder[] {
        return this.folders;
    }

    public get getCurrentRoute(): string {
        return this.currentRoute;
    }

    public constructor(){
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url.split("/")[1];
            }
        });
    }

    async ngOnInit(){
        const documents = await this._firestore.getAllDocumentsFromCollection(env.firebase.firestore.collections.projectFolders) as any[];
        documents.forEach((doc)=>{
            this.folders.push(doc.data());
        });
    }

}
