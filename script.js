// Unsplash API\
const count=10;
const apiKey='6uFcHkj18w34AcQEqAMWTWvoxi3f_U4psPKRhh20dEY'
const apiUrl= `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from unsplash api

async function getPhotos() {
   try{
       const response= await fetch(apiUrl);
       const data = await response.json();
       
   }
}