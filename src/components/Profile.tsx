import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/47508990?s=460&u=7e081809e081e6c011a9b8ebd1394edefc61377a&v=4" alt="Cleberson Silva" />
      <div>
        <strong>Cleberson Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}