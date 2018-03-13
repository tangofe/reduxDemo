const INIT_THEME = 'INIT_THEME'
const CHANGE_THEME = 'CHANGE_THEME'

//reducer
export default function (state, action) {
  if (!state) {
    state = { color: '' }
  }
  switch (action.type) {
    case INIT_THEME:
      //初始化主题
      return { color: action.color}
    default:
      return state
  }
}

//action creators
export const initTheme = (color) => {
  return { type: INIT_THEME, color}
}
