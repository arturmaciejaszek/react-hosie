import * as React from 'react';
import * as styles from './About.css';
import * as photoshoot from '../../assets/photoshoot.gif';
import * as catwalk from '../../assets/catwalk.gif';
import * as fair from '../../assets/fair.gif';

import Card from './Card/Card';
import BreakLine from '../UI/BreakLine/BreakLine';

const About = () => {
  return (
    <section className={styles.About}>
      <h1>About Us</h1>
      <BreakLine />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis
        commodi temporibus molestiae provident dignissimos quidem, adipisci
        deleniti ratione fugiat maiores impedit libero. Dolorum reprehenderit
        aperiam dicta at fugiat corporis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Necessitatibus vero nesciunt minus numquam voluptatum
        repudiandae labore, nostrum enim aliquid maxime dolorem suscipit eius
        aliquam. Eveniet laborum quis vero? Enim, labore? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Tenetur facere totam atque laborum
        consectetur tempora quod autem voluptatum vitae. Eos voluptate doloribus
        exercitationem soluta maxime ipsum tenetur, incidunt eligendi mollitia.
      </p>
      <div className={styles.CardContainer}>
        <Card
          title="Photoshoot"
          image={photoshoot}
          description="Professional photo sessions"
        />
        <Card
          title="Catwalk"
          image={catwalk}
          description="Catwalk like you have not seen"
        />
        <Card
          title="Fair Exhibitions"
          image={fair}
          description="Our bread and butter"
        />
      </div>
    </section>
  );
};

export default About;
