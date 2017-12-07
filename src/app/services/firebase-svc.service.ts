import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { DaikinTag } from '../model/daikin-tag';

@Injectable()
export class FirebaseSvcService {

  dbCollection: AngularFirestoreCollection<DaikinTag>;
  dbDocument:   AngularFirestoreDocument<DaikinTag>;

  constructor(private afs: AngularFirestore) {

  }
  getSnapshot(id: string): Observable<DaikinTag[]> {
    this.dbCollection = this.afs.collection(id);
    console.log('${id}');
    // ['added', 'modified', 'removed']
    return this.dbCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as DaikinTag;
        return { id: a.payload.doc.id,
                 name: data.name,
                 title: data.title,
                 description: data.description,
                 date: data.date };
      });
    });
  }

  addli() {
    const tag = {
      name: 'info.name',
      title: 'info.title',
      description: 'info.description',
      date: new Date(),
    };
    this.dbCollection.add(tag);
  }

  // Get the given document id, and retrieve all the collection
  getTagDocument(id: string) {
    //return this.dbCollection.doc(id).collection('test');
    return this.afs.doc<DaikinTag>(id);
  }

  getNote(id: string) {
    return this.afs.doc<DaikinTag>('notes/${id}');
  }

  create(info ) {
    const tag = {
      name: info.name,
      title: info.title,
      description: info.description,
      date: new Date(),
    };
    return this.dbCollection.add(tag);
  }

  updateNote(id: string, data: Partial<DaikinTag>) {
    return this.getNote(id).update(data);
  }

  deleteNote(id: string) {
    return this.getNote(id).delete();
  }

}
