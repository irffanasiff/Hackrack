/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Text,
  Avatar,
  useBreakpointValue,
  AvatarGroup,
  Tooltip,
} from '@chakra-ui/react';
import useSWR from 'swr';
const avatar = [
  {
    login: 'demonicirfan',
    id: 74172466,
    node_id: 'MDQ6VXNlcjc0MTcyNDY2',
    avatar_url: 'https://avatars.githubusercontent.com/u/74172466?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/demonicirfan',
    html_url: 'https://github.com/demonicirfan',
    followers_url: 'https://api.github.com/users/demonicirfan/followers',
    following_url:
      'https://api.github.com/users/demonicirfan/following{/other_user}',
    gists_url: 'https://api.github.com/users/demonicirfan/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/demonicirfan/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/demonicirfan/subscriptions',
    organizations_url: 'https://api.github.com/users/demonicirfan/orgs',
    repos_url: 'https://api.github.com/users/demonicirfan/repos',
    events_url: 'https://api.github.com/users/demonicirfan/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/demonicirfan/received_events',
    type: 'User',
    site_admin: false,
    contributions: 16,
  },
  {
    login: 'Ashley936',
    id: 76586814,
    node_id: 'MDQ6VXNlcjc2NTg2ODE0',
    avatar_url: 'https://avatars.githubusercontent.com/u/76586814?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Ashley936',
    html_url: 'https://github.com/Ashley936',
    followers_url: 'https://api.github.com/users/Ashley936/followers',
    following_url:
      'https://api.github.com/users/Ashley936/following{/other_user}',
    gists_url: 'https://api.github.com/users/Ashley936/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Ashley936/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Ashley936/subscriptions',
    organizations_url: 'https://api.github.com/users/Ashley936/orgs',
    repos_url: 'https://api.github.com/users/Ashley936/repos',
    events_url: 'https://api.github.com/users/Ashley936/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Ashley936/received_events',
    type: 'User',
    site_admin: false,
    contributions: 2,
  },
  {
    login: 'kady-z',
    id: 78522666,
    node_id: 'MDQ6VXNlcjc4NTIyNjY2',
    avatar_url: 'https://avatars.githubusercontent.com/u/78522666?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/kady-z',
    html_url: 'https://github.com/kady-z',
    followers_url: 'https://api.github.com/users/kady-z/followers',
    following_url: 'https://api.github.com/users/kady-z/following{/other_user}',
    gists_url: 'https://api.github.com/users/kady-z/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/kady-z/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/kady-z/subscriptions',
    organizations_url: 'https://api.github.com/users/kady-z/orgs',
    repos_url: 'https://api.github.com/users/kady-z/repos',
    events_url: 'https://api.github.com/users/kady-z/events{/privacy}',
    received_events_url: 'https://api.github.com/users/kady-z/received_events',
    type: 'User',
    site_admin: false,
    contributions: 1,
  },
];

const Contributors = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/github', fetcher);

  console.log('DATA frontend ', data);
  return (
    <Box py={['12', '20']}>
      <VStack spacing={'12'} maxW={'s6xl'} mx={'auto'}>
        <VStack mb={['0', '4', '8']}>
          <Text
            fontSize={['30', '3xl', '5xl']}
            w={['90vw', 'xl', '3xl']}
            fontWeight={['700', '700']}
            letterSpacing={['-1px', '-1px', '-1px']}
            h={'fit-content'}
            lineHeight={'130%'}
            textAlign={'center'}
            bgGradient='linear(to-l, #3783F6 , #02CBDE, #5F0FCD )'
            bgClip='text'
          >
            Shoutout to all the contributors & community members
          </Text>
          <Text fontSize={['sm', 'md']}>
            Make a Pull Request to get Featured ✨
          </Text>
        </VStack>
        <AvatarGroup>
          {avatar &&
            avatar.map((user) => (
              <Tooltip key={user.name} label={'@' + `${user.login}`}>
                <Avatar
                  name={user.name}
                  src={user.avatar_url}
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl,  #D3CCE3, #E9E4F0)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              </Tooltip>
            ))}
        </AvatarGroup>
      </VStack>
    </Box>
  );
};

export default Contributors;
