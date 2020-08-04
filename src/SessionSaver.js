class SessionSaver {
  static USER_NAME_KEY = 'name';

  setUserName(name) {
    localStorage.setItem(SessionSaver.USER_NAME_KEY, name);
  }

  getUserName() {
    return localStorage.getItem(SessionSaver.USER_NAME_KEY) || '';
  }
}

export const sessionSaver = new SessionSaver();