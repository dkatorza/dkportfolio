import { useEffect, useState } from 'react';
import ActiveLine from '../components/ActiveLine';
import Modal from '../components/Modal';
import BiosMenu from '../components/BiosMenu';

const biosMenuData = [
  {
    id: 1,
    title: 'Profile',
    details: `I'm a versatile Frontend Developer with experience in a diverse tech stack, including Vanilla JS, TypeScript, React.js, Next.js, HTML5, CSS3, Node.js, and MySQL.
        In my role at Kape Technologies, I was instrumental in redesigning the Intego website and maintaining their Windows antivirus GUI.
        During my time at Posturize, Ideveloped my skills in React.js and Storybook, working within Agile methodologies.
        I love diving into complex projects, streamlining processes, and working collaboratively to deliver a great user experience. I'm always ready to take on new challenges and look forward to contributing my skills to exciting new opportunities.`,
  },

  {
    id: 2,
    title: 'Work Experience',
    details: {
      subtitle: 'Frontend Developer',
      company: 'Kape Technologies - Cyber Security, B2C.',
      duration: '2022-Present',
      list: [
        `Working and coding with a mix of technologies: Vanilla JS / TypeScript
        React.js, Next.js, HTML5, CSS3, SASS, Node.js, Express.js, MySQL, Electron.js
        `,
        `Creating a new design system to work on a new look for the Intego website.
        This involved SCSS modules, TypeScript, and testing to make sure everything worked.`,
        `Collaborated closely with developers, stakeholders, designers, and productmanagers to ensure seamless integration and user experience.`,
        `Got to spend some quality time coding with Vanilla JS and with Electron.js as Iworked on the GUI for Intego's Windows antivirus.`,
        `Helped keep our older PHP/JavaScript platform running smoothly by fixing bugsand adding new features when needed.`,
        `Working in Agile, including sprint planning and retrospectives.`,
      ],
      text: '',
    },
  },
  {
    id: 3,
    title: 'Work Experience',
    details: {
      subtitle: 'Frontend Developer',
      company: 'Posturize - SVG Illustrations Generator.',
      duration: '2020-2022',
      list: [
        `Working with Next.js, TypeScript, Storybook, Firebase, HTML5, CSS3, andTailwind.`,
        `I was part of a remote team that helped build our website and our user interfaceworkflow to create SVG illustrations.`,
        `Got to spend some time building unit testing with React testing library.`,
        `Helped with the maintenance of the existing platform and fixing bugs.`,
        `Working in Agile, including sprint planning and retrospectives.`,
      ],
    },
  },

  {
    id: 4,
    title: 'Skills',
    details: {
      list: [
        'Leadership',
        'Team player',
        'Vanilla JavaScript',
        'React.js',
        'HTML5',
        'CSS / SASS',
        'TypeScript',
        'Node.js',
        'Jest / RTL',
        'Storybook',
        'MySQL',
      ],
    },
  },
  {
    id: 5,
    title: 'Education',
    details: {
      subtitle: 'Coding Academy',
      duration: 2019,
      text: `Full-Stack Web Coding Bootcamp – 640 hours.`,
    },
  },
  {
    id: 6,
    title: 'Languages',
    details: {
      list: ['Hebrew: Native', 'English: Fluent'],
    },
  },
  {
    id: 7,
    title: 'Contact',
    details: {
      list: [
        <div className='contact-list'>
          <img
            className='icon'
            src='src\assets\media\bios\linkedin.png'
            alt='Find me on Linkedin'
          />
          <a href='www.linkedin.com/in/dan-katorza'>
            www.linkedin.com/in/dan-katorza
          </a>
        </div>,
      ],
    },
  },
];

const Bios = () => {
  const [showBios, setShowBios] = useState<boolean>(false);

  useEffect(() => {
    const biosTimeout = setTimeout(() => {
      setShowBios(true);
    }, 2000);

    return () => {
      clearTimeout(biosTimeout);
    };
  }, []);

  return (
    <div className='old-interface bios'>
      {showBios ? (
        <Modal
          title={'CMOS Setup Utility - Copyright (C) 1985-2023 Award Software'}>
          <BiosMenu data={biosMenuData} />
        </Modal>
      ) : (
        <ActiveLine />
      )}
    </div>
  );
};

export default Bios;
