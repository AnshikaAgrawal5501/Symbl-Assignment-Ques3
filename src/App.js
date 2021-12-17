import React from 'react';
import { trackPromise } from 'react-promise-tracker';

function App() {

  const [users,setUsers]=React.useState([]);

  function func(){
    trackPromise(
            fetch('https://externship-example-api.herokuapp.com/data')
                .then(async function(userDetails) {
                    const users=await userDetails.json();
                    console.log('12',users);
                    setUsers(users);
                })
        )
  }

  

  // const data=await fetch('https://externship-example-api.herokuapp.com/data').then((data)=>{return data});
  return (
    <div >

    <input type="button" value="" onClick={func} />
      {
        users.map((item)=>{
          return <p>{item.name}</p>;
        })
      }
    </div>
  );
}

export default App;
