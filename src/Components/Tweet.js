import React from 'react';

import './Tweet.css';

const Tweet = (props)=>(        
<nav>
<li className="home"><a>{props.me}</a></li>

</nav>);



export default Tweet;