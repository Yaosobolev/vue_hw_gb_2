const app = new Vue({
    el: '#app',
    data: {
      month: [
        'December',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'January',
      ],
      articles: [
        {
          id: 0,
          img: './images/blog1.jpg',
          name: 'let’s get solution for building construction work',
          date: 1735171200,
          tag: 'kitchan design',
        },
        {
          id: 1,
          img: './images/blog2.jpg',
          name: ' low cost latest invented interior designing ideas.',
          date: 1734825600,
          tag: 'living design',
        },
        {
          id: 2,
          img: './images/blog3.jpg',
          name: 'best for any office & business interior solution',
          date: 1735171200,
          tag: 'interior design',
        },
        {
          id: 3,
          img: './images/blog4.jpg',
          name: 'let’s get solution for building construction work',
          date: 1735084800,
          tag: 'kitchan design',
        },
        {
          id: 4,
          img: './images/blog5.jpg',
          name: ' low cost latest invented interior designing ideas.',
          date: 1734825600,
          tag: 'living design',
        },
        {
          id: 5,
          img: './images/blog6.jpg',
          name: 'best for any office & business interior solution',
          date: 1735084800,
          tag: 'interior design',
        },
      ],
    },
    methods: {
      getDateToString(timestamp) {
        const date = new Date(timestamp * 1000);
        return `${date.getDate()} ${
          this.month[date.getMonth()]
        } ${date.getFullYear()}`;
      },
    },
  });