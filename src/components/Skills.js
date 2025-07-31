import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaTools, FaDatabase } from 'react-icons/fa';
import { skillsData } from '../data/profile';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { icon: FaCode, title: 'Frontend', skills: skillsData.slice(0, 4) },
    { icon: FaLaptopCode, title: 'Backend', skills: skillsData.slice(4, 7) },
    { icon: FaTools, title: 'Tools', skills: skillsData.slice(7, 9) },
    { icon: FaDatabase, title: 'Others', skills: skillsData.slice(9) }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-number">{skillsData.length}</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {Math.round(skillsData.reduce((acc, skill) => acc + skill.level, 0) / skillsData.length)}
              </div>
              <div className="stat-label">Average Proficiency</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {skillsData.filter(skill => skill.level >= 80).length}
              </div>
              <div className="stat-label">Expert Level</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 