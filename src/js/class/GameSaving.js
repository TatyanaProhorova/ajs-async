export default class GameSaving {
  constructor(id, created, userInfo = {
    id: 0, name: 'null', level: 0, points: 0,
  }) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo; // timestamp создания
    // userInfo = {
    //   id: 0, // user id
    //   name: 'null', // user name
    //   level: 0, // user level
    //   points: 0, // user points
  }
}

// как соэдать объект с вложенностью?
