// importing messages from le Wagon lib
export function fetchMessages(){
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
     .then (response => response.json())
  return{
    type: 'SET_MESSAGES',
    payload: promise
  };
};

// // importing channels from le Wagon lib
// export function fetchChannels(){
//   const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
//      .then (response => response.json())
//   return{
//     type: 'SET_MESSAGES',
//     payload: promise
//   };
// };

// creating new message and fetching it to Le Wagon API
export function createMessage(channel, author, content) {
  // create the json for post
  const body = {"author": author, "content": content};
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return{
    type: 'CREATE_MESSAGE',
    payload: promise
  }
}
