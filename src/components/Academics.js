import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaStar } from 'react-icons/fa';
import { academicsData } from '../data/profile';
import './Academics.css';

const Academics = () => {
  return (
    <section id="academics" className="academics">
      <div className="academics-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Academic Background</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="timeline">
          {academicsData.map((academic, index) => (
            <motion.div 
              key={academic.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="timeline-year">
                    <FaCalendarAlt />
                    <span>{academic.year}</span>
                  </div>
                </div>
                
                <h3 className="timeline-degree">{academic.degree}</h3>
                <div className="timeline-institution">
                  <FaUniversity />
                  <span>{academic.institution}</span>
                </div>
                
                <div className="timeline-grade">
                  <FaStar />
                  <span>{academic.grade}</span>
                </div>
                
                <div className="timeline-marker"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="academics-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>Academic Highlights</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-number">3.8</div>
                <div className="summary-label">GPA</div>
              </div>
              <div className="summary-item">
                <div className="summary-number">4</div>
                <div className="summary-label">Years</div>
              </div>
              <div className="summary-item">
                <div className="summary-number">15+</div>
                <div className="summary-label">Projects</div>
              </div>
              <div className="summary-item">
                <div className="summary-number">A+</div>
                <div className="summary-label">Average</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics; 