import { Flex, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { NavBarProps } from '../navbar';
import HamburgerLink from './HamburgerLink';
import { LinkProps } from '../navbar/links';

const HamburgerMenu: React.FC<NavBarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.x < window.innerWidth * 0.4 && isOpen) setIsOpen(false);
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <>
      <IconButton
        onClick={() => setIsOpen((_isOpen) => !_isOpen)}
        display={isOpen ? 'none' : 'block'}
        icon={<HamburgerIcon />}
        aria-label="open hamburger menu"
      />

      {isOpen && (
        <Flex
          position="fixed"
          zIndex="10"
          height="100vh"
          width="60vw"
          right="0"
          backgroundColor="#D1D1D1"
          flexDir="column"
          alignItems="flex-end"
          opacity="0.9">
          <IconButton
            onClick={() => setIsOpen((_isOpen) => !_isOpen)}
            display={!isOpen ? 'none' : 'block'}
            icon={<CloseIcon />}
            aria-label="close hamburger menu"
          />
          {navLinks.map((button: LinkProps) => (
            <HamburgerLink key={button.path} path={button.path} label={button.label} />
          ))}
        </Flex>
      )}
    </>
  );
};

export default HamburgerMenu;