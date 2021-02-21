import './App.css';
import React, {useState, useEffect} from 'react';
import Profile from './modules/Profiles.js';
import Button from './modules/Button.js';

const App = () => {
  const [users, setUsers] = useState([]);
  const [load, loadStatus] = useState(true);

  // Height and width of 'display' elem in vh and vw
  const elemHeight = 90;
  const elemWidth = 60;

  /*
   * Keeps track of current profile
   * Defaults to 1, first profile
   * Used to apply correct offset of 'display' elem
   * Given to children button elements to update 
   */
  const [index, iterate] = useState(1);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("fetch error");
        }
      })
      .then(data => {
        setUsers(data);
        loadStatus(false);
      })
      .catch(err => alert(err))
  }, []);

  return (
    load ? <h1>loading...</h1> :
      <div className='outer-frame' style={{height: elemHeight + 'vh', width: elemWidth + 'vw'}}>
        <Button type='prev' update={iterate} curr={index} len={users.length}/>
        <Button type='next' update={iterate} curr={index} len={users.length}/>
        <div className="display" style={{transform: 'translateY(-' + (index-1)*elemHeight + 'vh)'}}>
          {users.map(user =>
            <Profile user={user} key={user.id} height={elemHeight}/>
          )}
        </div>
      </div>
  )
}

export default App;