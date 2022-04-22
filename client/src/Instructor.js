import React from 'react';

export default function Instructor ({name, experience}) {
  return (
    <section id='instructor'>
      <h1>{name} {experience}</h1>
    </section>
  )
}