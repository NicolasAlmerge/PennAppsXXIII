import { MantineProvider, Text } from '@mantine/core';
import { DoubleHeaderColored } from './components/header';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
		{DoubleHeaderColored( {mainLinks: [ {label: 'Home', link: 'www.google.com'}, {label: 'About', link: 'www.google.com'}], userLinks: [ {label: 'About', link: 'www.yahoo.com'}]} )}
      <Text>Welcome to HeatFinder!</Text>
    </MantineProvider>
  );
}