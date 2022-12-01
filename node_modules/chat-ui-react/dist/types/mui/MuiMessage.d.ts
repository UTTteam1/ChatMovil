import React from 'react';
import { Message, MessageContent } from '../chat-types';
export declare function MuiMessage({ id, message, showDate, showTime, }: {
    id: string;
    message: Message<MessageContent>;
    showDate: boolean;
    showTime: boolean;
}): React.ReactElement;
