import { useEffect } from 'react';

const Modal = ({ type, closeTrigger, title, callback, children }) => {
  console.log('closeTrigger', closeTrigger);

  useEffect(() => {
    window.addEventListener('keydown', getKeyStrokes);

    return () => {
      window.removeEventListener('keydown', getKeyStrokes);
    };
  }, []);

  const getKeyStrokes = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      callback && callback(false);
    }
  };

  return (
    <div className={`${`modal-wrapper ${type}`}`}>
      {closeTrigger && (
        <div
          className='close-trigger'
          onClick={() => {
            callback(false);
          }}>
          [X]
        </div>
      )}
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Modal;
