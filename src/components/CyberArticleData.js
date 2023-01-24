import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import '../index.css';
import anonfiles from 'C:/Users/Andrei/blogreact/src/components/img/anonfiles.jpg';

export const CyberArticle = () => {
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
        <p className="intro-p1-cyber">
          Cyber threat intelligence(CTI) is a cyber security domain that focuses
          on analysis of threats, vulnerabilities and risk towards the
          enterprise. In order to bring threat intelligence analysis, cyber
          threat intelligence analysts does research on open sources of the
          internet(OSINT) and corroborates the data gathered with DarkNet data.
          With all that data, the cyber threat intelligence analyst will build a
          report which will be used by the decision-makers to ensure security
          policies and /or action paths in order to secure sensitive data and
          information.
        </p>
        <p className="intro-p2-cyber">
          CTI plays a crucial role in securing the enterprise, we can view CTI
          like a prevention tool, it’s well know that the best security is
          prevention. Cyber security industry face big challenges, threats can
          pop from anywhere and vulnerabilities are in growth. Tactics,
          Techniques, And Procedures (TTPs) used by adversaries are more and
          more complex. CTI focuses on finding the vulnerabilities and threats
          in time to deliver an intelligence analysis that will aware the
          company of these risks in order to secure them.
        </p>
        <p>
          Cyber security faces a numerous number of threats, threats which can
          variate from inside (rouge employ), group of cyber criminals or
          hackers, even nation state actors. Cyber security industry faces
          thousands of alerts and data that need to be analysed and categorised
          in order to create an secure IoT environment, this will help secure
          sensitive data. As the internet gets more bigger and complex, the data
          and alerts incoming to security operation teams gets harder to
          process, often most of the data and alerts aren’t investigated because
          of the lack of skilled professionals and the growth of the incoming
          data day by day, which can, in most cases, be false or not relevant.
          Time wasted in analysing irrelevant data and false alerts could be
          invested in the more relevant ones for processing intelligence product
          useful to decision makers.
        </p>
      </div>
      <div className="content-cyber">
        <motion.h4 className="cyber-cti-helping">
          But how is this CTI helping?
        </motion.h4>
        <p className="content-p1-cyber">
          Cyber threat intelligence supports security operations teams with
          intelligence analysis that can help filter the relevant alerts and
          sort them into categories as well as integrate them with the security
          solutions they already use, helping them automatically prioritize
          threats.
        </p>
        <p className="content-p2-cyber">
          Vulnerabilities management teams as well as Fraud prevention and risk
          analysis benefits from threat intelligence reports in providing a
          threat landscape in order to help teams prioritize and differentiate
          immediate threats to their specific enterprise from merely potential
          threats and/of TTPs currently in trend.
        </p>
        <p className="content-p3-cyber">
          We can look at CTI analyst like as a radar, scanning for data in the
          wild, and best way to succeed in collecting data from open sources
          (OSINT) is to have multiple sources and most of them with credibility
          and validity, like blogs or any other professional sources. This
          doesn't mean that social media isn't a valuable source, it is, but
          collecting data is just the first part. Filter and transform data into
          information is the final step of collecting data, where all data is
          processed and compared. In order words, build a trusted information
          that we can rely on, using tools, other intelligence reports within
          the company or intelligence reports from a third-party, and trusted
          sources. From there we analyse the information to build a intelligence
          report and once this steps are done, we disseminate it to decision
          makers or to teams in need.
        </p>
        <img
          className="intelligence-img"
          src="https://www.kaseware.com/wp-content/uploads/2019/07/intelligence_cycle.png"
          alt=""
        ></img>
        <p className="content-p4-cyber">
          All this intelligence circle goes on and on into finding new threats,
          new vulnerabilities, IPs related to a threat actor, malware used in
          other cyber attacks against similar companies like the one we need to
          protect, TTPs and the list goes one.
        </p>
        <div className="how-done">
          <motion.h4 className="title-done">How is it done?</motion.h4>
          <p className="done-1">
            First, we need sources to develop a solid OSINT which will ensure
            the data collection. Sources can be professional blogs (ex The
            hacker news or Huntress ) or tools (ex Kaspersky Threat
            Intelligence, DeCYFIR). To turn the collected data in information,
            we compare it to other information already processed, to data
            collected in forums of Darknet if possible, or forums used by
            attackers. We need sources to develop a solid OSINT which will
            ensure the data collection. Sources can be professional blogs (ex
            The hacker news or Huntress ) or tools (ex Kaspersky Threat
            Intelligence, DeCYFIR). To turn the collected data in information,
            we compare it to other information already processed, to data
            collected in forums of Darknet if possible, or forums used by
            attackers.
          </p>
          <p className="done-2">
            For threat analysis we use frameworks like Cyber kill Chain and
            MITRE ATT&CK. These frameworks provides a structure for adversaries
            and attacks, as well as guidance that we should focus on in the
            investigation part.
          </p>
          {/* <motion.h3 className="kill-chain-title">Cyber Kill Chain</motion.h3> */}
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
            <motion.div
              className="reconnaissance"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              1. Reconnaissance
              {isHovering && (
                <motion.div className="recon-content">
                  is the stage where the attacker collects information about the
                  victim
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="resource-dev"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              2. Resource Development
              {isHovering && (
                <motion.div className="resource-content">
                  attacker may acquire the infrastructure needed in the attack.
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="initial-acces"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              3. Initial Access
              {isHovering && (
                <motion.div className="initial-content">
                  refers to the victim accessing a phishing mail or a
                  compromised website
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="execution"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              4. Execution
              {isHovering && (
                <motion.div className="execution-content">
                  Is the stage where the attacker's code gest executed in
                  victim's local system.
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="persistence"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              5. Persistence
              {isHovering && (
                <motion.div className="persitence-content">
                  The attacker use techniques in order to prevend interruptions
                  that could cut off their access
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="privilege-esc"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              6. Privilege escaladation
              {isHovering && (
                <motion.div className="privilege-esc-content">
                  Attacker gains higher Pprivilege in victim's system
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="defense"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              7. Defense Evasion
              {isHovering && (
                <motion.div className="defense-content">
                  Attacker uses techniques in order to trick the security
                  software and pass undetected through victim's system
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="credential"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              8. Credential acces
              {isHovering && (
                <motion.div className="credential-content">
                  Attacker gains acces to victim's credential
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="discovery"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              9. Discovery{' '}
              {isHovering && (
                <motion.div className="discovery-content">
                  Attacker is navigateing through victim's network to fiind any
                  other data or vulnerabilities
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="lateral-movement"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              10 .Lateral movement{' '}
              {isHovering && (
                <motion.div className="lateral-content">
                  Attackers use certain techniques to gain access to other
                  system in the network.
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="collection"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              11. Collection{' '}
              {isHovering && (
                <motion.div className="collection-content">
                  Attacker uses certain techniques in order to collect data
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="command-control"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              12. Command and control{' '}
              {isHovering && (
                <motion.div className="command-content">
                  Attacker may communicate with other systems under he's control
                  within victim's network.
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="exfiltration"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
              13. Exfiltration{' '}
              {isHovering && (
                <motion.div className="exfiltration-content">
                  {' '}
                  This is the stage we don't want attackers to achive, the
                  objective of the attack is complete
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="impact"
              // onMouseOver={hoverOn}
              // onMouseOut={hoverOut}
            >
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
            <p className="d-c2">
              CTI will remain vital to any enterprise since every business has a
              network with vital data in order to succeed. Also threats variate
              depending on the business that your company develops. Some
              attackers prefer to go for banks for example, reader then oil
              companies or IT companies. Geopolitics also plays a role too in
              this equation, we can give lots of arguments here, from
              ideological cyber criminals to nation states cyber actors in a
              specific area.
            </p>
            <p className="d-c3">
              We can mention here the Middle East, it’s a complex geopolitical
              area where conflicts have a deep root. The two main powers
              fighting are Israel and Iran. In 2010 Iran invested lots of
              resources in it’s nuclear program, USA and Israel struggled to
              find a solution without going in a ugly war. In this case they
              developed a malware, today goes by the name of Stuxnet, a worm.
              The worm was capable of tricking the nuclear centrifuges in order
              to sabotage the production of resources needed for the nuclear
              bomb. Employs of the nuclear facilities weren’t aware of the issue
              and the plan work. But what this worm does? Worm is a malware
              capable of having he’s own behavior, unlike viruses, worm doesn’t
              need to be activated by the system, the worm spreads as it is
              build to do. Worm spreads from system to system traveling through
              network, so Stuxnet got out of the nuclear facility and spread
              over Europe. This is how we found out about this complex malware
              that probably saved the world from a possible war. Indeed this was
              an example of cyber state actor acting, one of my favorite cyber
              attack.
            </p>
            <p className="d-c4">
              Attackers navigate on the internet looking for specific targets
              with specific reasons, most of the time money is top rated
              reasons. Stealing data has turn into a black market business,
              every piece of data has a price, depending on the veracity of the
              information sold. For example banking account information can
              variate from 100$ to even 1500$ per piece. The price is given by
              the veracity of information sold, it goes from 60% to 99%.
            </p>
            <p className="d-c5">
              CTI analyst hunts every possible threat against the company,
              looking on the black market for stolen data in order to collect
              data about an entity selling data from a company with similar
              business. We can build intelligence reports on a specific attacker
              in some cases. Some days a go I found out about a breach in a
              company in my town, I started to dig out of passion and curiosity,
              navigated from social media to forums, later I found this:
            </p>
            <img className="dumb-img" src={anonfiles} alt=""></img>
            <p className="d-c7">
              On a forum it was a dumb related to the attack, and it will be a
              second one, from the information I gathered. With all the research
              done I found a part of compromised files and some possible
              usernames related to the attack. This would have been a great
              intelligence report, but for me it’s passion.
            </p>
            <p className="d-c8">
              DDefenders of the company needs to think critical and outside the
              box, CTI being one of the cheaper ways to prevent incidents in
              their networks, in order to protect client data or any sensitive
              data of company's business, because in the wild attackers get more
              and more complex and exploit every vulnerabilities they can get,
              from social engineering to vulnerabilities in the system, covering
              tracks to avoid been caught and get way with stealing.
            </p>
            <p className="d-c9">
              If you come this far, I hope this was fun to read, and I promise
              you, some day I will join the online hunt for these threats to
              keep my company safe. It will be my honor to be yours!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
