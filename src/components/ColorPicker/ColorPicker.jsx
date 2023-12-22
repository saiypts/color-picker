import { Button } from 'react-bootstrap';
import ColorBox from '../ColorBox/ColorBox';
import ColorList from '../ColorList/ColorList';
import { useState } from 'react';

const ColorPicker = () => {
  const [text, setText] = useState('');
  const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow']);
  const [selectedColor, setSelectedColor] = useState('red');

  const btnClickHandler = () => {
    setColors([...colors, text]);
    setSelectedColor(text);
    setText('');
  };

  const selectColorHandler = (color) => {
    setSelectedColor(color);
  };

  const enterKeyHandler = (e) => {
    if (e.key === 'Enter') {
      btnClickHandler();
    }
  };

  return (
    <div>
      <div className="mb-3 mt-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={enterKeyHandler}
        />
        <Button
          variant="outline-primary"
          onClick={btnClickHandler}
          disabled={!text.trim().length}
        >
          Add
        </Button>
      </div>
      <div className="mb-4">
        <ColorBox selectedColor={selectedColor} />
      </div>
      <ColorList colors={colors} selectColorHandler={selectColorHandler} />
    </div>
  );
};

export default ColorPicker;
