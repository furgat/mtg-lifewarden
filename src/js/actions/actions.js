import Dispatcher from '../dispatchers/dispatcher';

export const ACTIONS = {
  ADD_PLAYER : 0,
  DEL_PLAYER : 1,
  UPD_PLAYER : 2,
  ADD_TRACKER : 3,
  DEL_TRACKER : 4,
  UPD_TRACKER : 5
}

export function addPlayer() {
  Dispatcher.dispatch({
    type: ACTIONS.ADD_PLAYER,
  });
}

export function deletePlayer(id) {
  Dispatcher.dispatch({
    type: ACTIONS.DEL_PLAYER,
    id
  });
}

export function updatePlayer(id, data) {
  Dispatcher.dispatch({
    type: ACTIONS.UPD_PLAYER,
    id,
    data
  });
}

export function addTracker() {
  Dispatcher.dispatch({
    type: ACTIONS.ADD_TRACKER,
  });
}

export function deleteTracker(id) {
  Dispatcher.dispatch({
    type: ACTIONS.DEL_TRACKER,
    id
  });
}

export function updateTracker(id, data) {
  Dispatcher.dispatch({
    type: ACTIONS.UPD_TRACKER,
    id,
    data
  });
}
