import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Profiles.scss';

function sortByPriority(arr) {
  // Sort the array of objects based on the priority property
  arr.sort((a, b) => a.priority - b.priority);
  return arr;
}

const Profiles = () => {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const profilesQuery = '*[_type == "profiles"]';

    client.fetch(profilesQuery).then((data) => {
      data = sortByPriority(data)
      setProfiles(data);

    });
  }, []);

  return (
    <>
      <h2 className="head-text">Profiles</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {profiles.map((skill) => (
            <motion.a
              href={skill.Url}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex rm_underline"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Profiles, 'app__skills'),
  'profiles',
  'app__whitebg',
);
