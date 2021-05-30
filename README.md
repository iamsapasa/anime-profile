# anime-profile
this is a simple ui tool to view a persons my-anime-list

# using this api
https://jikan.docs.apiary.io/#reference/0/user

sample GET, https://api.jikan.moe/v3/user/Akiimai/animelist/all


# Coding from scratch:

### Create project
```
npx create-react-app malpro
cd malpro
```

### Install Libraries
```
npm install @material-ui/core
npm install react-router-dom
npm install axios
```

### Run project
```
npm start
```

###  Code
This is React boiler plate code for `App.js`
```
import React from 'react';

const Component = () => {
  useEffect(() => {
   
  }, [])

  return <p>Loading...</p>;
}

function App() {
  return (
   <Component>
  );
}

export default App;

```
This is how you make a REST call using `axios`
```
axios.get(`https://api.jikan.moe/v3/user/${username}/animelist/all`)
    .then(function (response) {
    console.log('response recieved', response)
    });
```
This is how you use `.map()` over an array
```
const names = ["whale", "squid", "turtle", "coral", "starfish"];

const NamesList = () => (
  <div>
    <ul>{names.map(name => 
        <li key={name}> {name} </li>)}
    </ul>
  </div>
);

```

# Useful links
[Transparent HSL color selector ](https://hslpicker.com/#08010f,0.81)

[How to position stuff using position:absolute and position:relative](https://css-tricks.com/absolute-positioning-inside-relative-positioning/)

