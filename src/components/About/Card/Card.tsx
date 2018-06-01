import * as React from 'react';
import * as styles from './Card.css';
import Button from '../../UI/Button/Button';

type CardProps = {
  title: string;
  image: any;
  description: string;
};

const Card = (props: CardProps) => {
  return (
    <>
      <div className={styles.Card}>
        <h4 className={styles.Title}>{props.title}</h4>
        <div className={styles.ImageContainer}>
          <img className={styles.Image} src={props.image} alt="card image" />
        </div>
        <p className={styles.Description}>{props.description}</p>
        <span />
        <Button
          aria={`${props.title} quote`}
          name="Get a Quote"
          action={window.alert}
        />
      </div>
    </>
  );
};

export default Card;
