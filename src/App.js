import './App.css';

function App() {

  //handle click events
  function handleClickEvent(event){
    //log when a click event is fired up!
    console.log("Am Clicked Bruv")
  }

  //listens to changes on the DOM elements
  function handleOnChangeEvent(event){
    //log data as soon as it changes
    console.log(event.target.value);
  }

  //function to handle form submit
  function handleFormSubmit(event){
    //preventing the page from re-loading
    event.preventDefault();
    //log response, if submitted
    console.log("Data is successfully submitted")
    
  }

  return (
    <div>
      <h1>This Is an Awesome Title</h1><br/>
      <button onClick={handleClickEvent}>Click Me!</button><br/>
      <input placeholder='Something....' onChange={handleOnChangeEvent}></input>
      <select onChange={handleClickEvent}>
        <option value="1">Dying In Code</option>
        <option value="2">Celebrating in Masseratti</option>
      </select>
      <br/> <br/> <br/>

      {/* sample form submit */}
      <form onSubmit={handleFormSubmit}>
          <input type='text' placeholder='Username'/><br/>
          <input type='password' placeholder='*******'/><br/>
          <select>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select><br/>
          <button type='submit'>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
