import { ReactChildren, ReactChild } from 'react';

import { LorenProvider } from './loren';

interface TsxProps {
  children: ReactChildren | ReactChild;
}

const AppProvider = ({ children }: TsxProps) => (
  <LorenProvider>{children}</LorenProvider>
);

export default AppProvider;
