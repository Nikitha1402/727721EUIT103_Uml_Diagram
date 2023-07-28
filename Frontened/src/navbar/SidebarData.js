import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: ' Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Course Management',
    path: '/course',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Fees Management',
    path: '/tasks',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  /*{
    title: 'Profile',
    path: '/cal',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },*/
  /*{
    title: 'Attendence Management',
    path: '/atten',
    icon: <IoIcons.IoMdPeople  />,
    cName: 'nav-text'
  },*/

  {
    title: 'Communication',
    path: '/time',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Attendence_Details',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback',
    path: '/feedback',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];