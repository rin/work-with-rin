import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Card from './components/card';
import CardGrid from './components/cardGrid';
import Rating from './components/rating';
import Link from './components/link';

import './App.scss';

const App = () =>
  <div>
    <Header title="Working with Rin" />
    <Intro />
    <CardGrid>
      <Card title="Stack">
        <span><mark>React</mark><Rating percentage={82} /></span>
        <span>Express<Rating percentage={65} /></span>
        <span>Next.js<Rating percentage={30} /></span>
      </Card>
      <Card title="Languages">
        <span><mark>Javascript</mark><Rating percentage={85} /></span>
        <span>Ruby<Rating percentage={92} /></span>
        <span>Lang Belta<Rating percentage={67} /></span>
      </Card>
      <Card title="Tools">
        <span>git<Rating percentage={93} /></span>
        <span>foo<Rating percentage={33} /></span>
        <span>Rin's Brain<Rating percentage={78} /></span>
      </Card>
      <Card title="Interests">
        <span>Toasties<Rating percentage={100} /></span>
        <span>Hyenas<Rating percentage={70} /></span>
        <span>Indie Games<Rating percentage={20} /></span>
      </Card>
      <Card type="checkboxes" title="Check your boxes">
        <span>100% remote</span>
        <span>LGBTIQ*-friendly<a title="Tell me more about it" href="https://www.theguardian.com/business/2019/apr/14/lgbt-friendly-business">[*]</a></span>
        <span>"Bring your whole self to work" culture<a title="Tell me more about it" href="https://www.forbes.com/sites/hennainam/2018/05/10/bring-your-whole-self-to-work/">[*]</a></span>
      </Card>
      <Card type="list" title="Links">
        <Link type="download" url="foo" label="Rin's CV" />
        <Link type="download" url="foo" label="Rin's Cover Letter" />
        <Link type="external" url="https://github.com/rin" label="github" />
        <Link type="external" url="https://www.linkedin.com/in/rinraeuber/" label="LinkedIn" />
       </Card>
    </CardGrid>
  </div>

export default App;
