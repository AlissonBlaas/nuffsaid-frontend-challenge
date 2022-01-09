import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';

import { useLoren } from '../../providers/loren';

import { getResultByPriority } from '../../utils';

import Card from '../../components/Snackbar';

import { Message } from '../../interfaces';

import { ButtonStyled } from './styles';

type IPropsGridSection = {
  messages: Message[];
  count(priority: number): void;
  errorTypeNumber: string;
  priority: number;
  paused: boolean;
}

const GridSection = ({ errorTypeNumber, messages, count, priority, paused }: IPropsGridSection) => (
    <Grid item xs={12} md={4}>
    <Typography fontWeight="bold" fontSize={24}>{`errorType: ${errorTypeNumber}`}</Typography>
    <Typography>{`Count:${count(priority)}`}</Typography>
    {getResultByPriority(messages, priority).map?.(msg => 
      <Card
          key={msg?.message}
          timeToHide={2000}
          text={msg?.message}
          messageType={msg?.priority}
          paused={paused}
      />
    )}
  </Grid>
)

const App = () => {
const { messages, setMessages, subscribe } = useLoren();
const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if(!isPaused) {
      const cleanUp = subscribe((message: Message) => {
        setMessages((oldMessages: any) => [ message, ...oldMessages]);
      });
      return cleanUp;
    }

  }, [setMessages, isPaused]);

  const clearMessages = () => {
    setMessages([]);
  }

  const count = (priority: number) => getResultByPriority(messages, priority).length;

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Stack flexDirection="row">
        <ButtonStyled onClick={clearMessages}>Clean</ButtonStyled>
        <ButtonStyled onClick={() => setIsPaused(!isPaused)}>
          {`${isPaused ? 'Continue' : 'Pause'}`}
        </ButtonStyled>
      </Stack>
      <Grid container spacing={2} maxWidth={1200}>
        <GridSection
          errorTypeNumber="1"
          messages={messages}
          count={count}
          priority={0}
          paused={isPaused}
        />
        <GridSection
          errorTypeNumber="2" 
          messages={messages}
          count={count}
          priority={1}
          paused={isPaused}
        />
        <GridSection
          errorTypeNumber="3" 
          messages={messages}
          count={count}
          priority={2}
          paused={isPaused}
        />
      </Grid>
    </Box>
  );
}

export default App;