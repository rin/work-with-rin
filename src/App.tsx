import React, { useState } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Card from './components/card';
import CardGrid from './components/cardGrid';
import SkillList from './components/skillList';
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
  <div className="darkTheme">
    <Header title="Working with Rin" />
    <Intro email={contact.email} />
    <CardGrid>
      <Card title="Stack" key="stack" loading={loading}>
        <SkillList skills={response.technologies} />
      </Card>
      <Card title="Languages" key="languages" loading={loading}>
        <SkillList skills={response.languages} />
      </Card>
      <Card title="Tools" key="tools" loading={loading}>
        <SkillList skills={response.tools} />
      </Card>
      <Card title="Interests" key="interests" loading={loading}>
        {interests.map(({name}: InterestInterface) => (
          <span key={name}>{name}</span>
        ))}
      </Card>
      <Card type="checkboxes" key="checkboxes" title="Check your boxes">
        <span>100% remote</span>
        <span>LGBTQI*-friendly<a title="Tell me more about it" href="https://www.theguardian.com/business/2019/apr/14/lgbt-friendly-business">[*]</a></span>
        <span>"Bring your whole self to work" culture<a title="Tell me more about it" href="https://www.forbes.com/sites/hennainam/2018/05/10/bring-your-whole-self-to-work/">[*]</a></span>
      </Card>
      <Card type="list" key="links" title="Links" loading={loading}>
        {links.map(({title, type, url}: LinkInterface) => (
           <Link type={type} url={url} key={title} label={title} />
          ))}
       </Card>
    </CardGrid>
  </div>
  )
}

export default App;
