import App from './App';
import reportWebVitals from './reportWebVitals';


const appointment={
  name:'Satyam Kumar',
  employeeId:'00005152',
  appointment:'9:00 (16-12-2021)',
  email:'abcxyz@gmail.com',
  phone:'+91123456789'

}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App appointment={appointment} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();