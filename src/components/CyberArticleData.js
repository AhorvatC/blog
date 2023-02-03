import React, { useState, useLayoutEffect, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import '../index.css';
import anonfiles from 'C:/Users/Andrei/blogreact/src/components/img/anonfiles.jpg';
import axios from 'axios';

export const CyberArticle = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:1234/intro/63dd486f92e99bcb7467d53b')
      .then(res => {
        console.log(res.data);
        setData(res.data);
        return data;
      });
  }, []);
  console.log(data && data.intro && data ? data.intro : '');

  const [isHovering, setHover] = useState(false);
  const hoverOn = () => {
    setHover(true);
  };
  const hoverOut = () => {
    setHover(false);
  };
  const animationMitre = {
    animate: { opacity: 1, display: 'block' },
    transition: { duration: 0.3, type: 'easeIn', damping: 10, mass: 0.6 },
    exit: { opacity: 0 },
  };
  return (
    <div className="cyber-art-data">
      <motion.h2 className="intro-cyber">Introduction</motion.h2>
      <div className="pragf-intro">
        {data && data.intro
          ? data.intro.map((arr, i) => {
              return (
                <p className="intro-p1-cyber" key={i}>
                  {arr}
                </p>
              );
            })
          : 'error'}
      </div>
      <div className="content-cyber">
        <motion.h4 className="cyber-cti-helping">
          But how is this CTI helping?
        </motion.h4>
        {data &&
          data.description &&
          data.description.map((arr, i) => {
            return (
              <p className="content-p1-cyber" key={i}>
                {arr}
              </p>
            );
          })}
        <img
          className="intelligence-img"
          src="https://www.kaseware.com/wp-content/uploads/2019/07/intelligence_cycle.png"
          alt=""
        ></img>

        <div className="how-done">
          <motion.h4 className="title-done">How is it done?</motion.h4>
          {data &&
            data.afterImg1 &&
            data.afterImg1.map((arr, i) => {
              return (
                <p className="done-1" key={i}>
                  {arr}
                </p>
              );
            })}

          <motion.h3 className="kill-chain-title">Cyber Kill Chain</motion.h3>
          <img
            className="cyber-kill-chain"
            src="https://www.oreilly.com/api/v2/epubs/9781788625562/files/assets/3a55cfa8-ecc3-431a-a208-265255797a65.png"
            alt=""
          ></img>
          <div className="chain-stages">
            <li>
              <strong>Reconnaissance</strong>
              <p>
                Information gathering about victim and it’s weakness. In this
                process the attacker may collect data about email, location,
                user IDs and the list goes on.
              </p>
            </li>
            <li>
              <strong>Weaponization</strong>
              <p>
                After the first stage the attacker knows the vulnerabilities
                that will be exploited, so after he sets up a backdoor, he
                choose the attack more convenient such as worm, remote access
                malware, ransomware or what will fit the vulnerability better.
              </p>
            </li>
            <li>
              <strong>Delivery</strong>
              <p>
                In this stage the attacker figures a way to launch the attack.
                It can be in various form, like phishing or social engineering.
              </p>
            </li>
            <li>
              <strong> Exploitation</strong>{' '}
            </li>
            <p>In this stage the malicious code is executed </p>
            <li>
              <strong> Installation</strong>
            </li>
            <p>
              Malware gets installed in the victim system in order to take
              control of the system
            </p>
            <li>
              <strong>Command and Control</strong>
            </li>
            <p>
              {' '}
              The malware is ready to use, the attacker can remote control the
              system and even navigate through.
            </p>
            <li>
              {' '}
              <strong>Actions and Objectives</strong> (can be referred as
              exfiltration)
            </li>
            <p>
              {' '}
              The attacker carry out the objective of the attack, this may be
              data exfiltration, destruction or encryption.
            </p>
          </div>
          <motion.div
            className="mitre"
            onMouseOver={hoverOn}
            onMouseOut={hoverOut}
          >
            <motion.h3 className="title-mitre">MITRE ATT&CK</motion.h3>
            <p>
              Mitre developed a framework build on the means of Cyber Kill
              Chain, but with focus on the indicators or tactics used by
              adversaries. ATT&CK is cut into stages:
            </p>
            <motion.div className="reconnaissance">
              1. Reconnaissance
              {isHovering && (
                <motion.div className="recon-content">
                  is the stage where the attacker collects information about the
                  victim
                </motion.div>
              )}
            </motion.div>
            <motion.div className="resource-dev">
              2. Resource Development
              {isHovering && (
                <motion.div className="resource-content">
                  attacker may acquire the infrastructure needed in the attack.
                </motion.div>
              )}
            </motion.div>
            <motion.div className="initial-acces">
              3. Initial Access
              {isHovering && (
                <motion.div className="initial-content">
                  refers to the victim accessing a phishing mail or a
                  compromised website
                </motion.div>
              )}
            </motion.div>
            <motion.div className="execution">
              4. Execution
              {isHovering && (
                <motion.div className="execution-content">
                  Is the stage where the attacker's code gest executed in
                  victim's local system.
                </motion.div>
              )}
            </motion.div>
            <motion.div className="persistence">
              5. Persistence
              {isHovering && (
                <motion.div className="persitence-content">
                  The attacker use techniques in order to prevend interruptions
                  that could cut off their access
                </motion.div>
              )}
            </motion.div>
            <motion.div className="privilege-esc">
              6. Privilege escaladation
              {isHovering && (
                <motion.div className="privilege-esc-content">
                  Attacker gains higher Pprivilege in victim's system
                </motion.div>
              )}
            </motion.div>
            <motion.div className="defense">
              7. Defense Evasion
              {isHovering && (
                <motion.div className="defense-content">
                  Attacker uses techniques in order to trick the security
                  software and pass undetected through victim's system
                </motion.div>
              )}
            </motion.div>
            <motion.div className="credential">
              8. Credential acces
              {isHovering && (
                <motion.div className="credential-content">
                  Attacker gains acces to victim's credential
                </motion.div>
              )}
            </motion.div>
            <motion.div className="discovery">
              9. Discovery{' '}
              {isHovering && (
                <motion.div className="discovery-content">
                  Attacker is navigateing through victim's network to fiind any
                  other data or vulnerabilities
                </motion.div>
              )}
            </motion.div>
            <motion.div className="lateral-movement">
              10 .Lateral movement{' '}
              {isHovering && (
                <motion.div className="lateral-content">
                  Attackers use certain techniques to gain access to other
                  system in the network.
                </motion.div>
              )}
            </motion.div>
            <motion.div className="collection">
              11. Collection{' '}
              {isHovering && (
                <motion.div className="collection-content">
                  Attacker uses certain techniques in order to collect data
                </motion.div>
              )}
            </motion.div>
            <motion.div className="command-control">
              12. Command and control{' '}
              {isHovering && (
                <motion.div className="command-content">
                  Attacker may communicate with other systems under he's control
                  within victim's network.
                </motion.div>
              )}
            </motion.div>
            <motion.div className="exfiltration">
              13. Exfiltration{' '}
              {isHovering && (
                <motion.div className="exfiltration-content">
                  {' '}
                  This is the stage we don't want attackers to achive, the
                  objective of the attack is complete
                </motion.div>
              )}
            </motion.div>
            <motion.div className="impact">
              14. Impact{' '}
              {isHovering && (
                <div className="impact-content">
                  {' '}
                  Attackers may use this stage to cover tracks or compromise
                  integrity by manipulating business and operational processes
                </div>
              )}
            </motion.div>
          </motion.div>
          <div className="ending">
            <motion.h3 className="disc-conc">
              Discussion and Conclusion
            </motion.h3>
            <p className="d-c1">
              CTI is a complex an efficient tool used in a company to keep up
              with the TTPs trends and cyber actors used to prevent a following
              attack and keep data within <strong>C</strong>onfidenciality
              <strong>I</strong>ntegrity<strong>A</strong>utenticity triad
              principle in order to grow bussiness safe, outside of the scope of
              the threats we face today.
            </p>
            {data &&
              data.paragraph &&
              data.paragraph.map((arr, i) => {
                return (
                  <p className="d-c2" key={i}>
                    {arr}
                  </p>
                );
              })}

            <img className="dumb-img" src={anonfiles} alt=""></img>
            {data &&
              data.ending &&
              data.ending.map((arr, i) => {
                return (
                  <p className="d-c7" key={i}>
                    {arr}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
