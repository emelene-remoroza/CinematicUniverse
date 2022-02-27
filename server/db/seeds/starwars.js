exports.seed = function (knex) {
  return knex('starwars').del()
    .then(function () {
      return knex('starwars').insert([
        { id: 1, Title: 'Star Wars: Episode I - The Phantom Menace', Released: '1999-05-19', ChronoDate: '3001-01-01', Period: '32 BBY', Image: 'starwars-ep1.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/bD7bpG-zDJQ' },
        { id: 2, Title: 'Star Wars: Episode II - Attack of the Clones', Released: '2002-05-16', ChronoDate: '3002-01-01', Period: '22 BBY', Image: 'starwars-ep2.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/gYbW1F_c9eM' },
        { id: 3, Title: 'Star Wars: Clone Wars', Released: '2008-10-03', ChronoDate: '3003-01-01', Period: '22-19 BBY', Image: 'starwars-the-clone-wars.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/74vZOXM7cMc' },
        { id: 4, Title: 'Star Wars: Forces of Destiny', Released: '2017-07-03', ChronoDate: '3004-01-01', Period: '22-35 BBY', Image: 'starwars-forces-of-destiny.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/ZLW2jkd6E7g' },
        { id: 5, Title: 'Star Wars: Episode III - Revenge of the Sith', Released: '2005-05-19', ChronoDate: '3005-01-01', Period: '19 BBY', Image: 'starwars-ep3.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/5UnjrG_N8hU' },
        { id: 6, Title: 'Star Wars: The Bad Batch', Released: '2021-05-04', ChronoDate: '3006-01-01', Period: '19 BBY', Image: 'starwars-the-bad-batch.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/BsOmYpP4UDU' },
        { id: 7, Title: 'Solo: A Star Wars Story', Released: '2018-05-25', ChronoDate: '3007-01-01', Period: '13-10 BBY', Image: 'starwars-solo.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/jPEYpryMp2s' },
        { id: 8, Title: 'Star Wars: Rebels', Released: '2015-09-26', ChronoDate: '3008-01-01', Period: '5-1 BBY', Image: 'starwars-rebels.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/xg5YN3LAGw4' },
        { id: 9, Title: 'Rogue One: A Star Wars Story', Released: '2016-12-16', ChronoDate: '3009-01-01', Period: '0 BBY', Image: 'starwars-rogue-one.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/frdj1zb9sMY' },
        { id: 10, Title: 'Star Wars: Episode IV - A New Hope', Released: '1977-05-25', ChronoDate: '3010-01-01', Period: '0 BBY - 0 ABY', Image: 'starwars-ep4.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/vZ734NWnAHA' },
        { id: 11, Title: 'Star Wars: Episode V - The Empire Strikes Back', Released: '1980-05-21', ChronoDate: '3011-01-01', Period: '3 ABY', Image: 'starwars-ep5.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/JNwNXF9Y6kY' },
        { id: 12, Title: 'Star Wars: Episode VI - Return of the Jedi', Released: '1983-05-23', ChronoDate: '3012-01-01', Period: '4 ABY', Image: 'starwars-ep6.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/fUitG_pBjjI' },
        { id: 13, Title: 'The Mandalorian', Released: '2019-11-12', ChronoDate: '3013-01-01', Period: '9 ABY', Image: 'starwars-the-mandalorian-poster.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/aOC8E8z_ifw' },
        { id: 14, Title: 'The Book of Boba Fett', Released: '2021-12-29', ChronoDate: '3014-01-01', Period: '9 ABY',Image: 'starwars-book-of-boba-fett.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/rOJ1cw6mohw' },
        { id: 15, Title: 'Star Wars Resistance', Released: '2018-10-07', ChronoDate: '3015-01-01', Period: '34 ABY', Image: 'starwars-resistance.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/m7Pls-vYWwM' },
        { id: 16, Title: 'Star Wars: Episode VII - The Force Awakens', Released: '2015-12-18', ChronoDate: '3016-01-01', Period: '34 ABY', Image: 'starwars-ep7.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/sGbxmsDFVnE' },
        { id: 17, Title: 'Star Wars: Episode VIII - The Last Jedi', Released: '2017-12-15', ChronoDate: '3017-01-01', Period:'34 ABY', Image: 'starwars-ep8.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/Q0CbN8sfihY' },
        { id: 18, Title: 'Star Wars: Episode IX - The Rise of Skywalker', Released: '2019-12-20', ChronoDate: '3018-01-01', Period: '35 ABY', Image: 'starwars-ep9.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/8Qn_spdM5Zg' },
        { id: 19, Title: 'Star Wars: Visions', Released: '2021-09-22', ChronoDate: '3019-01-01', Period: 'Multiple period BBY-ABY', Image: 'starwars-visions.jpg', Trailer: 'https://www.youtube-nocookie.com/embed/jtAsl-0o3O0' }
      ])
    })
}