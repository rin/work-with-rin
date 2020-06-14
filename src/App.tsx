import React, { useState } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Card from './components/card';
import CardGrid from './components/cardGrid';
import SkillList from './components/skillList';
import CheckboxCard from './components/checkboxCard';
import Link from './components/link';
import { useQuery } from "@apollo/react-hooks";
import { LinkInterface, InterestInterface } from './types';
import { loader } from 'graphql.macro';
import './App.scss';

const App = () => {
  const query = loader('./query.graphql');
  const { loading, error } = useQuery(query, { onCompleted: (data) => {
    setResponse(data);
  }});
  const [response, setResponse] = useState({languages: [], technologies: [], tools: [], links: [], interests: [], contact: { email: ''}});
  if (error) return <p>There's an error: {error.message}</p>;

  const { links, interests, contact } = response; 
  return (
  <div className="atlantaTheme">
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
      <Card title="Interests" loading={loading}>
        {interests.map(({name}: InterestInterface) => (
          <span key={name}>{name}</span>
        ))}
      </Card>
      <CheckboxCard title="Check your boxes" />
      <Card title="Links" loading={loading}>
        {links.map(({title, type, url}: LinkInterface) => (
           <Link type={type} url={url} key={title} label={title} />
          ))}
       </Card>
    </CardGrid>
  </div>
  )
}

export default App;
