import React from 'react';
import { Twemoji } from 'react-emoji-render';

const Header = () => (
  <header className="px4">
    <h1 className="h1">
      {' '}
      <Twemoji text=":fork_and_knife:" />
      MyRecipes
    </h1>
  </header>
);

export default Header;
