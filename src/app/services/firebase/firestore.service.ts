import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { 
    Firestore,
    collection,
    collectionData,
    DocumentData,    
    DocumentReference,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    setDoc,
    where,    
 } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
    private _firestore: Firestore = inject(Firestore);

    constructor() { }

    public save(pth_collection: string, data: object): Promise<DocumentReference>{
        let ref_collection = collection(this._firestore, pth_collection);
        return addDoc(ref_collection, data);
    };

    public saveWithCustomDOC_ID(pth_collection: string,data: object, doc_id: string): Promise<void>{
        let ref_collection = collection(this._firestore, pth_collection);
        return setDoc(doc(this._firestore, ref_collection.path+'/'+doc_id),data);
    }

    public getCollectionObservable(pth_collection: string): Observable<DocumentData>{
        let ref_collection = collection(this._firestore, pth_collection);
        return collectionData(ref_collection);
    };

    public async getUniqueDocument(doc_full_path: string):Promise<any>{
        let ref_document = doc(this._firestore, doc_full_path);
        return getDoc(ref_document);
    }

    public async getAllDocumentsFromCollection(collection_name: string):Promise<DocumentData>{
        return getDocs(collection(this._firestore, collection_name));
    }

    public update(pth_collection: string, id_document: string, data:{}):Promise<void> | void{
        let ref_collection = collection(this._firestore, pth_collection);
        let ref_document: DocumentReference;        
        
        try {
            ref_document = doc(ref_collection, id_document);
            return updateDoc(ref_document, data);
        } catch (e: any) {
            console.error('Error al obtener la referencia del document: '+e.message);            
        }
    }

    public delete(pth_collection: string, id_document: string):Promise<void> | void{
        let ref_collection = collection(this._firestore, pth_collection);
        let ref_document: DocumentReference;
        try {
            ref_document = doc(ref_collection, id_document);
            return deleteDoc(ref_document);
        } catch (e: any) {
            console.error('Error al obtener la referencia del document: '+e.message);            
        }
    }
}