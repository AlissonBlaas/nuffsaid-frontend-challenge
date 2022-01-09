import { Message } from '../interfaces';

export const getResultByPriority = (messages: Message[], priorityType: number) => {
    const result = messages.filter((obj: any) => {
        return obj.priority === priorityType
      });

      return result;
}