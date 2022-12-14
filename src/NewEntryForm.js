import react, {useState} from 'react';
import addEntry from './EntryList'

const NewEntryForm = ({ addEntry }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e,i,o) => {
        console.log("click1")
        console.log("title: "+ title)
        console.log("image: "+ image)
        console.log("description: " + description)
        e.preventDefault();
        // i.preventDefault();
        // o.preventDefault();
        addEntry(title,image,description);
        console.log("image 2: "+ image)
        setTitle('');
        setImage('');
        setDescription('');
        console.log("click2");
    }
    return (
        <form className='the_form' onSubmit={handleSubmit}>
                <label >Title:</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value) }/>
                <label >Image:</label>
                <input type="text" value={image} required onChange={(i) => setImage(i.target.value.toString()) }/>
                <label >Description:</label>
                <input type="text" value={description} required onChange={(o) => setDescription(o.target.value) }/>
                <input type="submit" value="add entry" />
            </form>
    )
}

export default NewEntryForm