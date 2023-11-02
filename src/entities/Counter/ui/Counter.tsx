import { Button } from 'shared/ui/Button/Button';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/countrerSlice';
import { CounterSchema } from '../model/types/counterSchema';

/* eslint-disable i18next/no-literal-string */
export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter.value);
    const increment = () => {
        dispatch(counterActions.increment);
    };

    const decrement = () => {
        dispatch(counterActions.decrement);
    };

    return (
        <div>
            <h1>
                value =
                {' '}
                {counterValue}
            </h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    );
};
