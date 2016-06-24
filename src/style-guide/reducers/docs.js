import * as types from 'style-guide/constants/ActionTypes';
import { getFirstDocumentRoute } from 'style-guide/utils/markdown-document';

export const initialState = {
  activePath: getFirstDocumentRoute(),
  openPath: getFirstDocumentRoute(),
  visible: false,
};

export default function docsReducer(state = initialState, action) {
  switch (action.type) {
  case types.DOCS_SET_ACTIVE_PATH:
    return {
      ...state,
      activePath: action.payload.path,
    };
  case types.DOCS_SET_OPEN_PATH:
    return {
      ...state,
      openPath: action.payload.path,
    };
  default:
    return state;
  }
}