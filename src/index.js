import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react'
import NewEntryForm from './NewEntryForm'
import EntryList from './EntryList'


  let newTitle = "placeholder"
  let newImage = "tinyurl.com/57ynrjuj"
  let newDescription = "placeholder"



  function template_assigner() {
        newTitle = document.getElementById("title").value;
        newImage = document.getElementById("image").value;
        newDescription = document.getElementById("description").value;

        console.log("template_assigner")
        document.getElementById("list_entry_title_template").innerHTML = newTitle;
        console.log("shane")
        console.log(newImage)
        document.getElementById("list_entry_image_template").src = newImage;
        document.getElementById("list_entry_description_template").innerHTML = newDescription;

        console.log("title " + newTitle);
        console.log("image");
        console.log(newImage);
        console.log("image2")
        console.log(document.getElementById("list_entry_image_template").src)
        console.log("desc " + newDescription);
        }







const Entryform = () => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(title);
    }

    const handleClick = (e) => {
      // setName(document.getElementById("title").innerHTML)
    }

  
  
    return (
      <div >
        Add an entry
            <form className='the_form' handleSubmit>
                <label >Title:</label>
                <input type="text" id="title" value={title} required onChange={(e) => setTitle(e.target.value) }/>
                <label >Image:</label>
                <input type="text" id="image" />
                <label >Description:</label>
                <input type="text" id="description"/>
            </form>
            <button  
            onClick={handleClick}>Update Template</button>
            <table class="list_entry">
      <tr>
        {/* <th><h1 id="list_entry_title_template" class="list_entry_title">{name}</h1></th> */}
        <th></th>
      </tr>
      <tr>
        <td>
          <ul class="list_entry_image">
            <a
              href="https://warhammer40k.fandom.com/wiki/Emperor_of_Mankind">
              <img
              id="list_entry_image_template"
              src="https://avatars.steamstatic.com/f9f9cd4bcb7e93a3ded1c472272d75b7f146da43_full.jpg"
              alt="noImage"
              width="200px"
              height="200px"
            /></a>
          </ul>
        </td>
        <td>
          <div id="list_entry_description_template" class="list_entry_description">
            {newDescription}
          </div>
        </td>
      </tr>
    </table>
      </div>
    );
  }





// class Template extends React.Component {

//   render() {
//     return (
//   <table class="list_entry">
//       <tr>
//         <th><h1 id="list_entry_title_template" class="list_entry_title">Title</h1></th>
//         <th></th>
//       </tr>
//       <tr>
//         <td>
//           <ul class="list_entry_image">
//             <a
//               href="https://warhammer40k.fandom.com/wiki/Emperor_of_Mankind">
//               <img
//               id="list_entry_image_template"
//               src="https://upload.wikimedia.org/wikipedia/commons/4/42/Tanks_and_Afvs_of_the_British_Army_1939-45_KID1265.jpg"
//               alt="noImage"
//               width="200px"
//               height="200px"
//             /></a>
//           </ul>
//         </td>
//         <td>
//           <div id="list_entry_description_template" class="list_entry_description">
//             Description Here
//           </div>
//         </td>
//       </tr>
//     </table>
//     );
//   }
// }

class Tierlist extends React.Component {

  render() {
    return (
      <div>
        <table>
          <tr><th><h1><font color="white">Tier</font></h1></th><th><h1><font color="white">Entries</font></h1></th></tr>
          <tr><td bgcolor="#f04200">
            <h1 class="tier">S</h1></td><td className='the_form'>
              
              <EntryList />
              </td></tr>
          <tr><td bgcolor="#c78900">
            <h1 class="tier">A</h1></td><td className='the_form'>
              <EntryList /></td></tr>
            
          <tr><td bgcolor="#c4c401">
            <h1 class="tier">B</h1></td><td></td></tr>
          <tr><td bgcolor="#4bc401">
            <h1 class="tier">C</h1></td><td></td></tr>
          <tr><td bgcolor="#4bbaea">
            <h1 class="tier">D</h1></td><td></td></tr>
          <tr><td bgcolor="#4b7bff">
            <h1 class="tier">E</h1></td><td></td></tr>
          <tr><td bgcolor="#0022b7">
            <h1 class="tier">F</h1></td><td></td></tr>
        </table>
      </div>
    );
  }
}

class Totaltierlist extends React.Component {
  componentDidMount() {
    document.title = "Tier List"; 
 }
  render() {
    return (
      
      <div >
        <head>
          <title>Tier List</title>
        </head>
        <h1 class="test1">TSI Tier List</h1>
        <div >
          <EntryList />
          <Entryform />
          <Tierlist />
        </div>
      </div>
    );
  }
}

// ========================================


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Totaltierlist />);
