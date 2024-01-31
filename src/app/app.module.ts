import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      provideFirebaseApp(() =>
         initializeApp({
            projectId: 'da-bubble-ba627',
            appId: '1:193029645952:web:eb719d461158bd2bc46865',
            storageBucket: 'da-bubble-ba627.appspot.com',
            apiKey: 'AIzaSyDTVH0Cdu1UDSsxPsfMc1xCH6mEu_YcZCM',
            authDomain: 'da-bubble-ba627.firebaseapp.com',
            messagingSenderId: '193029645952',
         })
      ),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
