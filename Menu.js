import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from 'awesome-react-icons';

export default function Menu() {
    return (
      <>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members1"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Management',
                itemId: '/management',
                elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'Projects',
                    itemId: '/management/projects',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: 'Members',
                    itemId: '/management/members1',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: 'Members 2',
                    itemId: '/management/members2',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: 'Members 3',
                    itemId: '/management/members3',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: 'Members 4',
                    itemId: '/management/members4',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: 'Members 5',
                    itemId: '/management/members5',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: 'Members 6',
                    itemId: '/management/members6',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                  {
                    title: 'Members 7',
                    itemId: '/management/members7',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                elemBefore: () => <Icon name="inbox" />,
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                    elemBefore: () => <Icon name="inbox" />,
                  },
                ],
              },
            ]}
          />
      </>
    );
}

