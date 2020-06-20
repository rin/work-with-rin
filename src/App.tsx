import React, { useState } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Card from './components/card';
import CardGrid from './components/cardGrid';
import SkillList from './components/skillList';
import CheckboxCard from './components/checkboxCard';
import Link from './components/link';
import Timezones from './components/timezones';
import { useQuery } from "@apollo/react-hooks";
import { LinkInterface, InterestInterface } from './types';
import { loader } from 'graphql.macro';
import ThemeSelector from './components/themeSelector';
import ThemeContext from './themes/themeContext';
import './App.scss';

const DEFAULT_THEME = 'atlanta';

const App = () => {
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);
  const value = { theme: theme, setTheme: setTheme};
  const query = loader('./query.graphql');
  const { loading, error } = useQuery(query, { onCompleted: (data) => {
    setResponse(data);
  }});
  const [response, setResponse] = useState({languages: [], technologies: [], tools: [], links: [], interests: [], contact: { email: ''}});
  if (error) return <p>There's an error: {error.message}</p>;

  const hours = [{
    label: "November to May",
    start: 1,
    end: 10,
  },
  {
    label: "April to October",
    start: 6,
    end: 15,
  }];

  const { links, interests, contact } = response; 
  return (
    <ThemeContext.Provider value={value}>
      <div className={`${theme}Theme`}>
        <div className="wrapper">
      <ThemeSelector />
      <Header title="Working with Rin" />
      <Intro email={contact.email} />
      <CardGrid>
        <Card title="Stack" loading={loading}>
          <SkillList skills={response.technologies} />
        </Card>
        <Card title="Languages" loading={loading}>
          <SkillList skills={response.languages} />
        </Card>
        <Card title="Tools" loading={loading}>
          <SkillList skills={response.tools} />
        </Card>
        <Card title="Interests" className='interestsCard' loading={loading}>
          <ul>
            {interests.map(({name}: InterestInterface) => (
              <li><span key={name}>{name}</span></li>
            ))}
          </ul>
        </Card>
        <CheckboxCard title="Wishlist" />
        <Card title="Experience" fill>
          Here goes my experience.
        </Card>
        <Card title="Links" loading={loading}>
          <ul>
            {links.map(({title, type, url}: LinkInterface) => (
              <li><Link type={type} url={url} key={title} label={title} /></li>
              ))}
          </ul>
        </Card>
      </CardGrid>
      <Card title="My favorite working hours" fullWidth>
        <Timezones hours={[hours[0], hours[1]]} />
      </Card>
    </div>
    </div>
  </ThemeContext.Provider>
  )
}

export default App;
