import React from 'react';
import Portrait from '../portrait';
import './intro.scss'

interface IntroProps {
  email?: string;
}

const Intro = ({ email }: IntroProps) => 
<div className='introWrapper'>
  <Portrait />
  <div className='aboutText'>
    <p>
      Hello, fellow human.
    </p>
    <p>
      My name is Rin. I enjoy coding and building things, and 
      I like to use it to contribute to a better world.
    </p>
    <p>
      The last two years, I've worked fully remotely with a team 
      distributed over at least five countries. It’s how I do my best work.
    </p>
    <p>
      Got something I'd wanna check out? E-mail me at <mark>{email}</mark>.
    </p>
    <img src="/rin-signature.png" width="100px" alt="Rin" />
  </div>
</div>

export default Intro;
