import Link from 'next/link';
import { useRouter } from 'next/router';
import { chakra, Flex } from '@chakra-ui/react';
import { LinkProps } from '../navbar/links';

const HamburgerLink: React.FC<LinkProps> = ({ path, label }) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Link href={path} passHref>
      <Flex
        _hover={{ cursor: 'pointer' }}
        _first={{ borderTop: 'none' }}
        height="fit-content"
        data-cy="nav-bar"
        borderTop="1px solid #CD0A69"
        width="100%"
        justifyContent="flex-end"
        padding="10px 0">
        <chakra.span
          backgroundColor={isActive ? 'var(--purple)' : 'transparent'}
          color={isActive ? '#FFFFFF' : 'gray.600'}
          borderRadius="20px"
          padding="0 10px"
          margin="0 10px"
          fontWeight="bold"
          fontSize="24px">
          {label}
        </chakra.span>
      </Flex>
    </Link>
  );
};

export default HamburgerLink;