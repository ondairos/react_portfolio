import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

//test for class
class Animal {
  constructor(name,age) {
    this.name =name;
    this.age= age;
  }

  speak(){
    console.log('I am ',this.name,'and, I am ', this.age,' years old');
  }
}

const animal1 = new Animal ('Simba',3);
animal1.speak();
console.log(animal1);

class Lion extends Animal {
  constructor(name, age,furColor, speed){
    super(name, age); //passes from the animal constructor
    this.furColor = furColor;
    this.speed = speed;
  }

  roar(){
    console.log('ROAAAR I have',this.furColor," fur, and i ran at : ",this.speed, 'miles an hour!');
  }
}

const lion1 = new Lion('Mufasa', 20,'golden',25);
  lion1.speak();
  lion1.roar();
  console.log(lion1);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );
