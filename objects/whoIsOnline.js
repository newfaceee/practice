const whosOnline = (friends) => {
  const onlineFriends = friends.filter(({status, lastActivity}) => status === 'online' && lastActivity <= 10).map(({username}) => username); 
  const offlineFriends = friends.filter(({status}) => status === 'offline').map(({username}) => username);
  const awayFriends = friends.filter(({status, lastActivity}) => status === 'online' && lastActivity > 10).map(({username}) => username);
  const res = {}
  if (onlineFriends.length > 0) {
    res.online = onlineFriends;
  }
  if (offlineFriends.length > 0) {
    res.offline = offlineFriends
  }
  if (awayFriends.length > 0) {
    res.away = awayFriends
  }
  return res;
};
whosOnline([{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}])