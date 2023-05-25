import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const firebaseConfig = {
    apiKey: "AIzaSyAQstwbxObmzpirpoE0Xwm-ZybK30g5FRw",
    authDomain: "jabuitroon98.firebaseapp.com",
    projectId: "jabuitroon98",
    storageBucket: "jabuitroon98.appspot.com",
    messagingSenderId: "744063211931",
    appId: "1:744063211931:web:9f8622beb23660abe0a93e",
    measurementId: "G-WZ0T6HE612"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);