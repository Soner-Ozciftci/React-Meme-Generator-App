import React, { useState, useEffect } from "react";
import "./Meme.css";

export default function MemeGenerator() {
  const [topText, setToptext] = useState("");
  const [bottomText, setBottomtext] = useState("");
  const [randomImg, setRandomImg] = useState("");
  const [allMemeImg, setAllMemeImg] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes);
        setAllMemeImg(memes);
      });
  });

  return (
    <div className="meme-from">
      <div className="inputlar">
        <input
          type="text"
          className="input"
          name="topText"
          placeholder="enter top text"
          value={topText}
          // onChange={e =>handleTopChange(e.target.value)}
        />
           <input
          type="text"
          className="input"
          name="topText"
          placeholder="enter top text"
          value={topText}
          // onChange={e =>handleTopChange(e.target.value)}
        />
        <button>
          <div>
            <span>
              <p>Generate Meme <p> :) </p></p>
            </span>
          </div>
          <div>
            <span>
              <p>Thanks <p>:D</p></p>
            </span>
          </div>
        </button>
        <div className="image">
               <img src={randomImg.url}/>
                <h2 className='top'>{topText}</h2>
                <h2 className='bottom'>{bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
