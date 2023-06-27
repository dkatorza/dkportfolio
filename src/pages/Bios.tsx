import biosLogo from '../assets/media/bios/bios-company-logo.png';
import biosEnergyLogo from '../assets/media/bios/bios-loading-energy-logo.png';

// const biosDetails = [{}];
const Bios = () => {
  return (
    <div className='old-interface startup'>
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
            <span> Memory Test : &nbsp; 65536K OK</span>
          </p>
          <p className='details-item'>
            <span>Award Plug and Play BIOS Extension v1.0A</span>
            <span>Copyright (C) 1995, Award Software, Inc.</span>
          </p>
          <p className='details-item'>
            <span>Initialize Plug and Play Cards...</span>
            <span>PMP Init Completed</span>
          </p>
          <p className='details-item'>
            <span>Detecting HDD Primary Master ...[Press F4 to skip]</span>
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

export default Bios;
