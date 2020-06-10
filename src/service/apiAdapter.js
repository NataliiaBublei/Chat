const getRandomMessage = () => {
  const url = 'https://api.chucknorris.io/jokes/random';

  return (
    fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err))
  );
};

class apiAdapter {
  users = [
    {
      id: 2,
      fullName: 'Alice Freeman',
      avatar: 'https://i.pinimg.com/564x/80/6c/97/806c97f4f91a2c657bd15f0351442539.jpg',
      dialog: [
        {
          userId: 2,
          date: 'Jun 12, 2017',
          time: '4:00 AM',
          text: 'I hate you!'
        }, {
          userId: 1,
          date: 'Jun 12, 2017',
          time: '4:00 AM',
          text: 'You are the worst!'
        }
      ]
    }, {
      id: 3,
      fullName: 'Josefina',
      avatar: 'https://i.pinimg.com/564x/b3/c2/51/b3c2518f7aa392df987c183d84bed6e4.jpg',
      dialog: [
        {
          userId: 3,
          date: 'Feb 18, 2017',
          time: '4:00 AM',
          text: 'Quickly come to the meeting room 1B, we have a big server issue'
        }, {
          userId: 1,
          date: 'Feb 18, 2017',
          time: '4:00 AM',
          text: 'I\'m having breakfast right now, can you wait for 10 minutes'
        }, {
          userId: 3,
          date: 'Feb 18, 2017',
          time: '4:00 AM',
          text: 'We are losing money! Quick!'
        }
      ]
    }, {
      id: 4,
      fullName: 'Velazquez',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHZuCteFyzQ_U3Ca9i9Xn3ecXP_TBW6KktO6qnED8zBEEUp16P&usqp=CAU',
      dialog: [
        {
          userId: 4,
          date: 'Mar 18, 2017',
          time: '4:00 AM',
          text: 'Bu Bu Bu Bu11111'
        }, {
          userId: 1,
          date: 'Mar 18, 2017',
          time: '4:00 AM',
          text: 'Bu Bu Bu Bu 222222'
        }, {
          userId: 4,
          date: 'Mar 18, 2017',
          time: '4:00 AM',
          text: 'Quickly come to the meeting room 1B, we have a big server issue'
        }
      ]
    }, {
      id: 5,
      fullName: 'Barrera ',
      avatar: 'https://i.pinimg.com/564x/19/1c/a8/191ca8eeafdad18ad52a608f6872e3fd.jpg',
      dialog: [
        {
          userId: 5,
          date: 'Feb 18, 2017',
          time: '4:00 AM',
          text: 'La la la la la 11111'
        }, {
          userId: 1,
          date: 'Feb 18, 2017',
          time: '4:00 AM',
          text: 'La la la la la 222222'
        }, {
          userId: 5,
          date: 'Feb 18, 2017',
          time: '4:00 AM',
          text: 'We are losing money! Quick!'
        }
      ]
    },
    {
      id: 6,
      fullName: 'Anna Frog',
      avatar: 'https://www.volynnews.com/files/news/2018/10-13/255025/22852918_1982106992067727_7362106326307481847_n.jpg',
      dialog: [
        {
          userId: 6,
          date: 'Jun 12, 2017',
          time: '4:00 AM',
          text: 'I hate you!'
        }, {
          userId: 6,
          date: 'Jun 12, 2017',
          time: '4:00 AM',
          text: 'You are the worst!'
        }
      ]
    }
  ];

  getAllUsers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.users);
      }, 100);
    });
  }

  postNewMessage = (message, userId, dialogUserId, time, date) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newMessage = {
          userId,
          date,
          time,
          text: message
        };

        this.users.find(user => user.id === dialogUserId).dialog.push(newMessage);

        resolve(this.users);
      }, 100);
    });
  };
}


export {
  getRandomMessage,
  apiAdapter
};
