import * as RegActionCreator from '../components/auth/register/actions';
import * as LoginActions from '../components/auth/login/actions';

const action = {
    ...RegActionCreator,
    ...LoginActions
}

export default action;