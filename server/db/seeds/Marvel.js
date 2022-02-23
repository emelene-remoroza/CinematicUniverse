exports.seed = function (knex) {
  return knex('Marvel').del()
    .then(function () {
      return knex('Marvel').insert([
        { id: 1, Title: 'Captain America: The First Avenger', Released: '2011-07-22', ChronoDate: '1942-01-01', Image: 'captain-america-the-first-avenger.jpg', Trailer: 'https://www.youtube.com/watch?v=JerVrbLldXw' },
        { id: 2, Title: 'Captain Marvel', Released: '2019-03-08', ChronoDate: '1995-01-01', Image: 'captain-marvel-1.jpg', Trailer: 'https://www.youtube.com/watch?v=Z1BCujX3pw8' },
        { id: 3, Title: 'Iron Man', Released: '2008-05-02', ChronoDate: '2010-01-01', Image: 'iron-man-1.jpg', Trailer: 'https://www.youtube.com/watch?v=byQpcN78UjQ' },
        { id: 4, Title: 'Iron Man 2', Released: '2010-05-07', ChronoDate: '2011-01-01', Image: 'iron-man-2.jpg', Trailer: 'https://www.youtube.com/watch?v=DIfgxIv5xmk' },
        { id: 5, Title: 'The Incredible Hulk', Released: '2008-06-13', ChronoDate: '2011-01-02', Image: 'the-incredible-hulk-1.jpg', Trailer: 'https://www.youtube.com/watch?v=Cat3xjvN-hQ' },
        { id: 6, Title: 'Thor', Released: '2011-05-06', ChronoDate: '2011-01-03', Image: 'thor-1.jpg', Trailer: 'https://www.youtube.com/watch?v=uHBnrJowBZE' },
        { id: 7, Title: 'The Avengers', Released: '2012-05-04', ChronoDate: '2012-01-01', Image: 'the-avengers-1.jpg', Trailer: 'https://www.youtube.com/watch?v=eOrNdBpGMv8' },
        { id: 8, Title: 'Thor: The Dark World', Released: '2013-11-08', ChronoDate: '2012-01-02', Image: 'thor-dark-world.jpg', Trailer: 'https://www.youtube.com/watch?v=npvJ9FTgZbM' },
        { id: 9, Title: 'Iron Man 3', Released: '2013-05-03', ChronoDate: '2013-01-01', Image: 'iron-man-3.jpg', Trailer: 'https://www.youtube.com/watch?v=V59_6zk1Hgg' },
        { id: 10, Title: 'Captain America: The Winter Soldier', Released: '2014-04-04', ChronoDate: '2014-01-01', Image: 'captain-america-winter-soldier.jpg', Trailer: 'https://www.youtube.com/watch?v=PEXQc1V8JxY' },
        { id: 11, Title: 'Guardians of the Galaxy', Released: '2014-08-01', ChronoDate: '2014-05-27', Image: 'guardians-of-the-galaxy-1.jpg', Trailer: 'https://www.youtube.com/watch?v=2LIQ2-PZBC8' },
        { id: 12, Title: 'Guardians of the Galaxy Vol.2', Released: '2017-05-05', ChronoDate: '2014-07-05', Image: 'guardians-of-the-galaxy-2.jpg', Trailer: 'https://www.youtube.com/watch?v=dW1BIid8Osg' },
        { id: 13, Title: 'Avengers: Age of Ultron', Released: '2015-05-01', ChronoDate: '2015-01-23', Image: 'the-avengers-age-of-ultron.jpg', Trailer: 'https://www.youtube.com/watch?v=tmeOjFno6Do' },
        { id: 14, Title: 'Ant-Man', Released: '2015-07-15', ChronoDate: '2015-03-04', Image: 'ant-man-1.jpg', Trailer: 'https://www.youtube.com/watch?v=pWdKf3MneyI' },
        { id: 15, Title: 'Captain America: Civil War', Released: '2016-05-06', ChronoDate: '2016-01-25', Image: 'captain-america-civil-war.jpg', Trailer: 'https://www.youtube.com/watch?v=dKrVegVI0Us' },
        { id: 16, Title: 'Black Widow', Released: '2021-07-09', ChronoDate: '2016-6-20', Image: 'black-widow-1.jpg', Trailer: 'https://www.youtube.com/watch?v=ybji16u608U' },
        { id: 17, Title: 'Spider-Man: Homecoming', Released: '2017-07-07', ChronoDate: '2016-01-01', Image: 'spiderman-homecoming.jpg', Trailer: 'https://www.youtube.com/watch?v=39udgGPyYMg' },
        { id: 18, Title: 'Black Panther', Released: '2017-02-16', ChronoDate: '2016-01-01', Image: 'black-panther-1.jpg', Trailer: 'https://www.youtube.com/watch?v=xjDjIWPwcPU' },
        { id: 19, Title: 'Doctor Strange', Released: '2016-11-04', ChronoDate: '2016-01-01', Image: 'doctor-strange-1.jpg', Trailer: 'https://www.youtube.com/watch?v=aWzlQ2N6qqg' },
        { id: 20, Title: 'Thor: Ragnarok', Released: '2017-11-03', ChronoDate: '2017-01-01', Image: 'thor-ragnarok.jpg', Trailer: 'https://www.youtube.com/watch?v=ue80QwXMRHg' },
        { id: 21, Title: 'Ant-Man and the Wasp', Released: '2018-07-06', ChronoDate: '2018-01-01', Image: 'ant-man-wasp.jpg', Trailer: 'https://www.youtube.com/watch?v=8_rTIAOohas' },
        { id: 22, Title: 'Avengers: Infinity War', Released: '2018-04-27', ChronoDate: '2018-01-01', Image: 'the-avengers-infinity-war.jpg', Trailer: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8' },
        { id: 23, Title: 'Avengers: End Game', Released: '2019-04-26', ChronoDate: '2023-01-01', Image: 'the-avengers-endgame.jpg', Trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c' },
        { id: 24, Title: 'Spider-Man Far From Home', Released: '2019-07-02', ChronoDate: '2024-01-01', Image: 'spiderman-far-from-home.jpg', Trailer: 'https://www.youtube.com/watch?v=Nt9L1jCKGnE' },
        { id: 25, Title: 'Shang-Chi and the Legend of the Ten Rings', Released: '2021-09-01', ChronoDate: '2024-01-01', Image: 'shang-chi-and-the-legend-of-the-ten-rings.jpg', Trailer: 'https://www.youtube.com/watch?v=8YjFbMbfXaQ' },
        { id: 26, Title: 'Eternals', Released: '2021-11-05', ChronoDate: '2024-01-01', Image: 'eternals-1.jpg', Trailer: 'https://www.youtube.com/watch?v=x_me3xsvDgk' },
        { id: 27, Title: 'Spider-Man: No Way Home', Released: '2021-12-17', ChronoDate: '2024-01-01', Image: 'spiderman-no-way-home.jpg', Trailer: 'https://www.youtube.com/watch?v=JfVOs4VSpmA' },
        { id: 28, Title: 'WandaVision', Released: '2021-01-15', ChronoDate: '2023-01-01', Image: 'wandavision.jpg', Trailer: 'https://www.youtube.com/watch?v=sj9J2ecsSpo' },
        { id: 29, Title: 'The Falcon and the Winter Soldier', Released: '2021-02-19', ChronoDate: '2024-01-01', Image: 'the-falcon-and-the-winter-soldier.jpg', Trailer: 'https://www.youtube.com/watch?v=IWBsDaFWyTE' },
        { id: 30, Title: 'Loki', Released: '2021-06-09', ChronoDate: '2012-02-01', Image: 'loki-1.jpg', Trailer: 'https://www.youtube.com/watch?v=nW948Va-l10' },
        { id: 31, Title: 'What If...?', Released: '2021-08-11', ChronoDate: '2023-01-01', Image: 'what-if-1.jpg', Trailer: 'https://www.youtube.com/watch?v=x9D0uUKJ5KI' },
        { id: 32, Title: 'Hawkeye', Released: '2021-11-24', ChronoDate: '2024-01-01', Image: 'hawkeye-1.jpg', Trailer: 'https://www.youtube.com/watch?v=5VYb3B1ETlk' }
      ])
    })
}
