import InboxScreen from './InboxScreen.svelte';

import { render } from '@testing-library/svelte';

import { Error } from './InboxScreen.stories'; //👈  Our story imported here

test('renders pinned tasks at the start of the list', () => {
  //👇 Story's args used with our test
  const { container, getByText } = render(InboxScreen, {
    props: Error.args,
  });

  expect(getByText('Something went wrong')).toBeInTheDocument();
});