import { useMemo, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../components/auth/login/actions';
import  ActionCreator  from '../store/action-creator';

const actions = {
    ...LoginActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(()=> bindActionCreators(LoginActions, dispatch), [dispatch]);
}