import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

const firebaseConfig = {
   apiKey: 'AIzaSyDTVH0Cdu1UDSsxPsfMc1xCH6mEu_YcZCM',
   authDomain: 'da-bubble-ba627.firebaseapp.com',
   projectId: 'da-bubble-ba627',
   storageBucket: 'da-bubble-ba627.appspot.com',
   messagingSenderId: '193029645952',
   appId: '1:193029645952:web:bf417500b387dc0cc46865',
};

@NgModule({
   declarations: [
      AppComponent, //
      LoginComponent,
   ],
   imports: [
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      AngularFireStorageModule,
      AngularFireModule.initializeApp(firebaseConfig),
      provideFirebaseApp(() =>
         initializeApp({
            apiKey: 'AIzaSyDTVH0Cdu1UDSsxPsfMc1xCH6mEu_YcZCM',
            authDomain: 'da-bubble-ba627.firebaseapp.com',
            projectId: 'da-bubble-ba627',
            storageBucket: 'da-bubble-ba627.appspot.com',
            messagingSenderId: '193029645952',
            appId: '1:193029645952:web:bf417500b387dc0cc46865',
         })
      ),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideDatabase(() => getDatabase()),
      provideStorage(() => getStorage()),
   ],
   providers: [LoginComponent, { provide: LOCALE_ID, useValue: 'de' }],
   bootstrap: [AppComponent],
})
export class AppModule {}
