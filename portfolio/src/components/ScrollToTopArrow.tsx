import { ActionIcon, Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { ArrowBarToUp } from 'tabler-icons-react';

import { PRIMARY_COLOR } from '../constants';

const ScrollToTopArrow = (): JSX.Element => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {transitionStyles => (
          <ActionIcon
            title="Arrow to scroll to top"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <ArrowBarToUp size={40} strokeWidth={3} color={PRIMARY_COLOR} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollToTopArrow;
