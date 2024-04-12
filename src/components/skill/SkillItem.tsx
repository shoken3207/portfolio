"use client"
import React from 'react';

const SkillItem = ({ name, level }: {name: string, level: number}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {level}
      </td>
    </tr>
  );
};

export default SkillItem;