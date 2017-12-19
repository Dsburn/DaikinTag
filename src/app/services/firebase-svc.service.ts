import { Injectable, EventEmitter, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { DaikinTag } from '../model/daikin-tag';

@Injectable()
export class FirebaseSvcService {

  dbCollection: AngularFirestoreCollection<DaikinTag>;
  dbDocument:   AngularFirestoreDocument<DaikinTag>;

  isOpen = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(private afs: AngularFirestore) {

  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  checkSnapshoot(): any {
    this.dbCollection.ref.get();
  }
  getSnapshot(id: string): Observable<DaikinTag[]> {
    this.dbCollection = this.afs.collection(id);
    this.dbCollection.ref.get().then(querySnapshot => {
      if (querySnapshot.size > 0) {
        console.log(querySnapshot.docs[0].data());
        this.change.emit(true);
      } else {
        this.change.emit(false);
        console.log('No such document!');
      }
    })
    .catch(function(error) {
      console.log('Error getting document: ', error);
    });

    // ['added', 'modified', 'removed']

    return this.dbCollection.snapshotChanges().map((actions) => {
      return actions.map ( (a) => {
        if (!a.payload.doc.exists) { return null; }
        const data = a.payload.doc.data() as DaikinTag;
        return {
                  id: data.id,
                  partNum: data.partNum,
                  workOrderNum: data.workOrderNum,
                  weight: data.weight,
                  customer: data.customer,
                  coilNum: data.coilNum,
                  manufacturer: data.manufacturer,
                  width: data.width,
                  dateCapture: data.dateCapture
                };
      });
    });

  }



  addli() {
    // const tag = {
    //   id: data.id,
    //   partNum: data.partNum,
    //   workOrderNum: data.workOrderNum,
    //   weight: data.weight,
    //   customer: data.customer,
    //   coilNum: data.coilNum,
    //   manufacturer: data.manufacturer,
    //   width: data.width,
    //   dateCapture: data.dateCapture
    // };
    // this.dbCollection.add(tag);
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
      partNum: info.partNum,
      workOrderNum: info.workOrderNum,
      weight: info.weight,
      customer: info.customer,
      coilNum: info.coilNum,
      manufacturer: info.manufacturer,
      width: info.width,
      dateCapture: new Date()
    };
    return this.afs.collection(info.name).add(tag);
  }

  updateNote(id: string, data: Partial<DaikinTag>) {
    return this.getNote(id).update(data);
  }

  deleteNote(id: string) {
    return this.getNote(id).delete();
  }

}
