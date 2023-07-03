import { useEffect, useRef, useState } from 'react';
import biosLogo from '../assets/media/bios/bios-company-logo.png';
import biosEnergyLogo from '../assets/media/bios/bios-loading-energy-logo.png';
import Modal from '../components/Modal';

type DetailLine = {
  lineName: string;
  display: boolean;
  delay: number;
}[];

type Keys = {
  escape: {
    isClicked: boolean;
  };
};

const Boot = () => {
  const counterInterval = useRef<number>();
  const counterLineTimeout = useRef<number>();
  const lineRef = useRef<number>(0);
  const [memCounter, setMemCounter] = useState<number>(0);
  const [lineDisplay, setLineDisplay] = useState<DetailLine>([
    {
      lineName: 'awardFirst',
      display: false,
      delay: 2000,
    },
    {
      lineName: 'awardSecond',
      display: false,
      delay: 1000,
    },
    {
      lineName: 'initFirst',
      display: false,
      delay: 1000,
    },
    {
      lineName: 'initSecond',
      display: false,
      delay: 800,
    },
    {
      lineName: 'detectFirst',
      display: false,
      delay: 500,
    },
  ]);

  const [lineCount, setLineCount] = useState<number>(0);
  const [activeLine, setActiveLine] = useState<string>('memoryTest');
  const [keyDownCount, setKeyDownCount] = useState<Keys>({
    escape: {
      isClicked: false,
    },
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('keydown', getKeyStrokes);

    return () => {
      window.removeEventListener('keydown', getKeyStrokes);
    };
  }, [keyDownCount]);

  useEffect(() => {
    counterInterval.current = setInterval(() => {
      if (memCounter < 65536) {
        setMemCounter(memCounter + 100);
      } else {
        setMemCounter(65536);
        setLineAppearance();
        clearInterval(counterInterval.current);
      }
    }, 1);

    return () => {
      clearInterval(counterInterval.current);
    };
  }, [memCounter]);

  useEffect(() => {
    lineRef.current = lineCount;
  }, [lineCount]);

  const setLineAppearance = () => {
    if (lineRef.current < lineDisplay.length) {
      counterLineTimeout.current = setTimeout(() => {
        if (
          lineDisplay[lineRef.current] &&
          !lineDisplay[lineRef.current].display
        ) {
          setLineDisplay((current) =>
            current.map((line, idx) => {
              if (idx === lineRef.current) {
                return { ...line, display: true };
              }
              return line;
            })
          );
          setActiveLine(lineDisplay[lineRef.current].lineName);
          setLineCount((currentCount) => currentCount + 1);
        }
        clearTimeout(counterLineTimeout.current);
        setLineAppearance();
      }, lineDisplay[lineRef.current] && lineDisplay[lineRef.current].delay);
    }
  };

  const getKeyStrokes = (e: KeyboardEvent) => {
    console.log('e', e);

    if (e.key === 'Escape' && !keyDownCount.escape.isClicked) {
      setKeyDownCount({
        escape: {
          isClicked: true,
        },
      });

      console.log('zzzzzzzzzz', keyDownCount.escape.isClicked);
      clearInterval(counterInterval.current);
      setLineAppearance();
    }

    if (e.key === 'Delete' && !showModal) {
      setShowModal(!showModal);
      console.log('whysss');
    }
  };

  return (
    <div className='old-interface startup'>
      {showModal && <Modal />}
      <header>
        <div className='bios-energy-logo'>
          <img src={biosEnergyLogo} alt='bios energy logo' />
        </div>
        <div className='title-wrapper'>
          <div className='bios-logo'>
            <img src={biosLogo} alt='bios logo' />
          </div>
          <h1>
            Award Modular BIOS v6.00PG, An Energy Star Ally Copyright (C)
            1985-2023, Award Software, Inc.
          </h1>
        </div>
      </header>
      <main>
        <div className='details-wrapper'>
          <p className='details-item'>
            <span>BRTH-D VER:1.0 15/6/85</span>
          </p>
          <p className='details-item'>
            <span>PENTIUM-MMX CPU at 200Mhz</span>
            <span className='mem-counter'>
              Memory Test : <span className='counter'>{memCounter}K</span>
              <span className='ok-check'>
                OK
                <span
                  className={`${
                    activeLine === 'memoryTest'
                      ? 'active-line'
                      : 'non-active-line'
                  }`}></span>
              </span>
            </span>
          </p>
          <p className='details-item'>
            <span
              style={{ display: lineDisplay[0].display ? 'block' : 'none' }}>
              Award Plug and Play BIOS Extension v1.0A
              <span
                className={`${
                  activeLine === 'awardFirst'
                    ? 'active-line'
                    : 'non-active-line'
                }`}>
                _
              </span>
            </span>
            <span
              style={{ display: lineDisplay[1].display ? 'block' : 'none' }}>
              Copyright (C) 1995, Award Software, Inc.
              <span
                className={`${
                  activeLine === 'awardSecond'
                    ? 'active-line'
                    : 'non-active-line'
                }`}>
                _
              </span>
            </span>
          </p>
          <p className='details-item'>
            <span
              style={{ display: lineDisplay[2].display ? 'block' : 'none' }}>
              Initialize Plug and Play Cards...
            </span>
            <span
              style={{ display: lineDisplay[3].display ? 'block' : 'none' }}>
              PMP Init Completed
              <span
                className={`${
                  activeLine === 'initSecond'
                    ? 'active-line'
                    : 'non-active-line'
                }`}>
                _
              </span>
            </span>
          </p>
          <p className='details-item'>
            <span
              style={{ display: lineDisplay[4].display ? 'block' : 'none' }}>
              Detecting HDD Primary Master ...[Press F4 to skip]
              <span
                className={`${
                  activeLine === 'detectFirst'
                    ? 'active-line'
                    : 'non-active-line'
                }`}>
                _
              </span>
            </span>
          </p>
        </div>
      </main>
      <footer>
        <p>
          Press <strong>DEL</strong> to enter SETUP, <strong>ESC</strong> to
          skip memory test
        </p>
        <p>07/08/95 82430DK-PT55T2P4C-00</p>
      </footer>
    </div>
  );
};

export default Boot;
