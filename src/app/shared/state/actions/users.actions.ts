import { Action } from '@ngrx/store';
import { User } from '../../modules/user.model';

export enum ActionTypes {
  GET_USERS = '[Results Component] GetUsers',
  SEARCH_USERS = '[Search Component] SearchUsers'
}

export class GetUsers implements Action {
  readonly type = ActionTypes.GET_USERS;
}

export class SearchUsers implements Action {
  readonly type = ActionTypes.SEARCH_USERS;
  constructor(public payload: User) {}
}

export type UserActions = GetUsers | SearchUsers;
