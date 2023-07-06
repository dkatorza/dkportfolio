import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

const BiosMenu = ({ data }) => {
  //   console.log('data', data);
  const itemElement = useRef<HTMLLIElement>(null);
  const [menuItem, setMenuItem] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [itemData, setItemData] = useState(data[0]);
  const [showItem, setShowItem] = useState<boolean>(false);

  useEffect(() => {
    itemElement.current?.focus();
  }, [menuItem]);

  useEffect(() => {
    window.addEventListener('keydown', getKeyStrokes);
    // window.addEventListener('mousedown', getKeyStrokes);

    return () => {
      window.removeEventListener('keydown', getKeyStrokes);
      // window.removeEventListener('mousedown', getKeyStrokes);
    };
  }, [menuItem, showItem]);

  const getKeyStrokes = (e: KeyboardEvent, itemId) => {
    if (e.key === 'ArrowDown' && !showItem) {
      setMenuItem((currentItem) => currentItem + 1);
      setSelectedItem(menuItem);
      setItemData(data[menuItem]);
      if (menuItem === data.length) {
        setMenuItem(1);
        setSelectedItem(menuItem);
        setItemData(data[0]);
      }
    }

    if (e.key === 'ArrowUp' && !showItem) {
      if (menuItem === 1) {
        setMenuItem(data.length);
        setSelectedItem(menuItem);
        setItemData(data[data.length - 1]);
      } else {
        setMenuItem((currentItem) => currentItem - 1);
        setSelectedItem(menuItem - 2);
        setItemData(data[menuItem - 2]);
      }
    }

    if (e.type === 'click' && !showItem) {
      setMenuItem(itemId);
      setSelectedItem(itemId);
      setItemData(data[itemId - 1]);
      setShowItem(true);
    }

    if (e.key === 'Tab') {
      e.preventDefault();
    }

    if (e.key === 'Enter' && menuItem && !showItem) {
      setShowItem(true);
    }
  };

  function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  return (
    <>
      {console.log('itemData.details', isObject(itemData.details))}
      {showItem && (
        <Modal
          closeTrigger={true}
          type={'bios-menu-item'}
          title={itemData.title}
          callback={setShowItem}>
          <div className='item-content'>
            {isObject(itemData.details) ? (
              <>
                {itemData.details['subtitle'] && (
                  <h2>{itemData.details['subtitle']}</h2>
                )}
                {itemData.details['company'] && (
                  <h3>{itemData.details['company']}</h3>
                )}
                {itemData.details['duration'] && (
                  <h3>{itemData.details['duration']}</h3>
                )}
                {itemData.details['list'] && (
                  <ul>
                    {itemData.details['list'].map((item, idx) => {
                      return <li key={idx}>{item}</li>;
                    })}
                  </ul>
                )}
                {itemData.details['text'] && <p>{itemData.details['text']}</p>}
              </>
            ) : (
              <p>{itemData.details}</p>
            )}
          </div>
        </Modal>
      )}
      <div
        className='bios-menu-wrapper'
        style={{ pointerEvents: showItem ? 'none' : 'auto' }}>
        <section>
          <ul>
            {data.map((item) => {
              return (
                <li
                  key={item.id}
                  tabIndex={item.id}
                  ref={item.id === menuItem ? itemElement : null}
                  onClick={(e) => {
                    getKeyStrokes(e, item.id);
                  }}>
                  &#9658; {item.title}
                </li>
              );
            })}
          </ul>
        </section>
        <section>SECTION2</section>
        <section>
          <span>Esc : Quit</span>
          <span>&uarr; &darr; &rarr; &larr; : Select Item </span>
          <span>Enter : Open</span>
          <span>F10 : Save & Exit Setup</span>
        </section>
        <section>SECTION4</section>
      </div>
    </>
  );
};

export default BiosMenu;
