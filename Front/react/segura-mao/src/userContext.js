import React from 'react';

export const user = {
  "name": "alfonso",
  "sobrenome": "berg",
  "posts": 14,
  "email": "fulano@gmail.com"
}

export const userContext = React.createContext({
  user: user
})

export default userContext;
