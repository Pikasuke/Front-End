import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { storage, db } from './firebase';
import firebase from "firebase";
import './imageUpload.css';

function ImageUpload({ username }) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            console.log("handle change")
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`image/${image.name}`).put(image);
        uploadTask.on("state_changed",
            (snapshot) => {
                //progress fonction ... 
                let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
                console.log("math progerss")
            },
            (error) => {
                console.log("erorororororororo")
                console.log(error);
                alert(error.message);
            },
            () => {
                console.log("storage fonction l 31")
                //complete function... 
                storage
                    .ref("image")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image inside db
                        console.log(url)
                        console.log("dbcolllection l 38")
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        }); 
                        console.log("before le reinit ")

                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }
        );
    };

    return (
        <div className="imageupload">
            <progress className="imageuploadprogress" value={progress} max="100" />
            <input type="text" placeholder="Enter a Caption..." onChange={event => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload} >
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
