import { Button, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconCheck } from '@tabler/icons';

export function ButtonCopy() {
  const clipboard = useClipboard();
  return (
    <Tooltip
      label="Link copied!"
      offset={5}
      position="bottom"
      radius="xl"
      transition="slide-down"
      transitionDuration={100}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightIcon={
          clipboard.copied ? (
            <IconCheck size={20} stroke={1.5} />
          ) : (
            <IconCopy size={20} stroke={1.5} />
          )
        }
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: 14, height: 48 },
          rightIcon: { marginLeft: 22 },
        }}
        onClick={() => clipboard.copy('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
      >
        Alert nearby NGOs
      </Button>
    </Tooltip>
  );
}