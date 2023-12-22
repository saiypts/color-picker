import styles from './ColorList.module.css';

// eslint-disable-next-line react/prop-types
const ColorList = ({ colors, selectColorHandler }) => {
  // eslint-disable-next-line react/prop-types
  const circleColors = colors.map((color, index) => (
    <button
      key={index}
      className={`${styles.colorItem} m-2`}
      style={{ backgroundColor: color }}
      onClick={() => selectColorHandler(color)}
    ></button>
  ));

  return <div className={styles.colorList}>{circleColors}</div>;
};

export default ColorList;
