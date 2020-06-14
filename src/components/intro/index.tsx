import React from 'react';
import Portrait from '../portrait';
import './intro.scss'

interface ContactInfo {
  email?: string;
}

const Intro = ({ email }: ContactInfo) => 
<div className='introWrapper'>
  <Portrait />
  <div className='aboutText'>
    <p>Hello, fellow human.</p>
    <p>My name is Rin.</p>
    <p>I care about UX and developer happiness, but I've also learnt to get something done quickly if needed.</p>
    <p>The last two years, I've worked fully remotely with a team distributed over at least five countries.</p>
<p>Got something I'd wanna check out? E-mail me at <mark>{email}</mark>.</p>
    <img src="/rin-signature.png" width="100px" alt="Rin" />
  </div>
</div>

export default Intro;
