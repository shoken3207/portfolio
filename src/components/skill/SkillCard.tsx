import React from 'react'
import SkillItem from './SkillItem'
import { portfolio_skill } from '@/types/cms-portfolio-types'

const SkillCard = ({title, logoImage, skills}: {title: string, logoImage: string, skills: portfolio_skill[]}) => {
  return (
    <div>
    <h3 className="flex items-center"><img className="w-10" src={logoImage} alt="" /><span className="font-bold text-xl">{title}</span></h3>
    <table>
        <thead>

      <tr>
        <th>技術</th>
        <th>スキルレベル</th>
      </tr>
        </thead>
        <tbody>

      {skills.map(({name, level}) => (

     <SkillItem name={name} level={level} />
      ))}
        </tbody>
    </table>
  </div>
  )
}

export default SkillCard
