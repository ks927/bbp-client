import React from 'react';
import '../assets/App.css';
import { useState } from 'react/cjs/react.development';

interface Props {
  
}

const About: React.FC<Props> = () => {
  const [name, setName] = useState('');

  return (
    <div>
        <p>
          About page
        </p>
    </div>
  );
}

export default About;
