import { State, Action } from './State';

export type VendingMachineContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
