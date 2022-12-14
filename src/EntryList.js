import NewEntryForm from "./NewEntryForm";
import { useState } from "react";


const Entrylist = () => {
    const [entries, setEntries] = useState([
      {},
    //   {title: 'memory gospel', id: 2, image: "https://gamepedia.cursecdn.com/wowpedia/b/b1/Weather-Beaten_Fishing_Hat.jpg", description: 'meme gospel'},
    //   {title: 'this wild darkness', id: 3, image: "https://avatars.steamstatic.com/f9f9cd4bcb7e93a3ded1c472272d75b7f146da43_full.jpg", description: 'spooky dark'}
    ]);
    const addEntry = (title, image, description) => {
      setEntries([...entries, {title: title, id: entries.length+1, image: image, description: description}]);
    }
    return (
      <div className='the_form'>
        <ul>
          {entries.map(entry => {
            return ( <li key={entry.id}>
    <table class="list_entry">
      <tr>
        <th><h1 id="list_entry_title_template" class="list_entry_title">{entry.title}</h1></th>
        <th></th>
      </tr>
      <tr>
        <td>
          <ul class="list_entry_image">
            <a
              href="https://warhammer40k.fandom.com/wiki/Emperor_of_Mankind">
              <img
              id="list_entry_image_template"
              src={entry.image}
            //   src="https://avatars.steamstatic.com/f9f9cd4bcb7e93a3ded1c472272d75b7f146da43_full.jpg"
              alt="noImage"
              width="200px"
              height="200px"
            /></a>
          </ul>
        </td>
        <td>
          <div id="list_entry_description_template" class="list_entry_description">
            {entry.description}
          </div>
        </td>
      </tr>
    </table>
            </li>)
          })}
        </ul>
        <NewEntryForm addEntry={addEntry} addImage={addEntry} addDescription={addEntry} />
      </div>
    );
  }

  export default Entrylist;