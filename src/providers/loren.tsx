import {
    createContext,
    useContext,
    useState,
    ReactChildren,
    ReactChild
  } from 'react';

import random from 'lodash/random';
import faker from 'faker';
import { Observable } from 'rxjs';

import { Message } from '../interfaces';


enum Priority {
  Error,
  Warn,
  Info,
}

interface TsxProps {
    children: ReactChildren | ReactChild;
}
  
export type LorenContextData = {
    subscribe: any;
    messages: Message[];
    setMessages: any;
};

const LorenHooksContext = createContext<LorenContextData>({} as LorenContextData);

export const LorenProvider = ({ children }: TsxProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  
  const observable = new Observable<Message>(subscriber => {
      const generate = () => {
        const message = faker.lorem.sentence();
        const priority = random(0, 2) as Priority;
        const nextInMS = random(500, 3000);
        subscriber.next({ message, priority });
        setTimeout(generate, nextInMS);
      };
      generate();
    });
  
  const subscribe = (callback: (message: Message) => void) => {
    const subscription = observable.subscribe({
      next: callback,
    });
    return () => subscription.unsubscribe();
  };
    

  return (
    <LorenHooksContext.Provider value={{ subscribe, messages, setMessages }}>
      {children}
    </LorenHooksContext.Provider>
  );
};

export function useLoren() {
  const context = useContext(LorenHooksContext);

  if (!context) {
    throw new Error('useLoren must be use within an defaultHooksProvider');
  }

  return context;
}
  