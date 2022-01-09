import { useState, useEffect } from 'react';
import { Typography, Button, Stack } from '@mui/material';

import { CardStyled } from './styles';

enum Priority {
    Error,
    Warn,
    Info,
  }

type IProps = {
    text: string;
    messageType: Priority;
    timeToHide: number;
    paused: boolean;
}

type IColorProps = {
    [key: string]: string;
}

const colorTypes: IColorProps = {
    '0': '#F56236',
    '1': '#FCE788',
    '2': '#88FCA3',
  }
  

const Card = ({text, messageType, timeToHide, paused}: IProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if(!paused) {
            setTimeout(() => setVisible(false), timeToHide);
        }
    },[visible, timeToHide, paused])

    return (
        <>
            {visible && (
                <CardStyled backgroundColor={colorTypes[messageType]}>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography>{text}</Typography>
                        <Button size="small" onClick={() => setVisible(false)}>Clear</Button>
                    </Stack>
                </CardStyled>
                )        
            }
        </>
    )
}

export default Card;
