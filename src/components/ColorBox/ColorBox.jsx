import styles from './ColorBox.module.css';

// eslint-disable-next-line react/prop-types
const ColorBox = ({ selectedColor }) => {
  return (
    <div
      className={styles.colorBox}
      style={{ backgroundColor: selectedColor }}
    ></div>
  );
};

export default ColorBox;
