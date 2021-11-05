import React from "react";
import JulesVerne from './icons/JulesVerne.jpeg'
import { useState } from "react";

function Quotes() {

    const [inspiration, setInspiration] = useState({
        quote: '',
        author: '',
    });

    const inspirationalQuote = (e) => {
        e.preventDefault();
        fetch('http://quotes.rest/qod.json')
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setInspiration({
							quote: data.contents.quotes[0].quote,
							author: data.contents.quotes[0].author,
						});
						console.log(inspiration);
					});

    }

    return (
        <div className="QuoteBox">
            <div className="FaveQuote">
                <img src={JulesVerne} alt="Jules Verne Portrait" id="Jules"/>
                <h1 className="FaQuote">
                    The sea is everything. It covers seven tenths of the terrestrial globe. Its breath is pure and healthy. It is an immense desert, where man is never lonely, for he feels life stirring on all sides.
                </h1>
                <h1 className="FaAuthorName"> Jules Verne </h1>

            </div>
            <div className="getQuote">
                <div className="clicker">
                    <button id='quoteBtn' onClick={inspirationalQuote} className='btn btn-primary'>
                    Get Quote
                    </button>
                </div>
                <div className="inspiration">
                    <h1 className="quote"> {inspiration.quote} </h1>
                    <br />
                    <h2 className="authorName"> {inspiration.author} </h2>
                </div>
            </div>
        </div>
    )

}

export default Quotes;