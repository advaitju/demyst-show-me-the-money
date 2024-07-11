import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BalanceSheet } from './components/BalanceSheet/BalanceSheet';

const queryClient = new QueryClient();
console.clear();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BalanceSheet />
    </QueryClientProvider>
  );
};

export default App;
