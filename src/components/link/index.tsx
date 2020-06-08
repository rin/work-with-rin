import React from 'react';
import './link.scss';

interface LinkProps {
  label: string;
  url: string;
  type: string;
}

const Link = ({label, url, type} : LinkProps) => 
  <div className="link">
    <a href={url}>
      {type === 'download' ? (
        <img className="downloadIcon" src="/download-icon.png" alt="Download" />
      ) : (
        <img className="linkIcon" src="/link-icon.png" alt="Link" />
      )}
      {label}
    </a>
  </div>

export default Link;


