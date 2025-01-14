import Link from 'next/link';
import { useRouter } from 'next/router';
import { chakra, Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps, NavDropdownItemProps } from '../navbar/links';

const HamburgerLink: React.FC<LinkProps | NavDropdownItemProps> = ({
  path,
  label,
  mobileLabel,
}) => {
  const router = useRouter();
  const isActive = router.pathname === path;
  const linkLabel = mobileLabel ? mobileLabel : label;

  return (
    <Link href={path} passHref>
      <ChakraLink
        _hover={{ cursor: 'pointer' }}
        _first={{ borderTop: 'none' }}
        _focus={{ boxShadow: 'none' }}
        height="fit-content"
        data-cy={'hamburger-navbar-' + linkLabel}
        borderTop="1px solid #CD0A69"
        width="100%"
        justifyContent="flex-end"
        padding="10px 0">
        <chakra.span
          backgroundColor={isActive ? 'var(--magenta)' : 'transparent'}
          color={isActive ? '#FFFFFF' : 'gray.600'}
          borderRadius="20px"
          padding="0 10px"
          margin="0 10px"
          fontWeight="bold"
          fontSize="24px">
          {linkLabel}
        </chakra.span>
      </ChakraLink>
    </Link>
  );
};

export default HamburgerLink;
