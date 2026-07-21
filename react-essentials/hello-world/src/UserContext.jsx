import React, { createContext } from 'react';

export const UserContext =  createContext({
   name: "Guest",
   role: "visitor",  // Memberikan default value
   theme: "light"
});