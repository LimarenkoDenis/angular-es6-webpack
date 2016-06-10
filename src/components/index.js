import ng from 'angular';

import Header from './header';
import Info from './info';
import AddCard from './addCard';
import CardList from './card-list';
import Card from './card';

export default ng.module('app.components', [Header, Info, AddCard, CardList, Card])
  .name;
