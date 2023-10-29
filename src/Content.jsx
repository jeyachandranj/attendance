import React from 'react';
import CardGrid from './CardGrid';

const Content = () => {
  const cardData = [
    {
      title: 'AIML',
      imageUrl: "https://media.licdn.com/dms/image/C4E12AQHihDA4s2rc5w/article-cover_image-shrink_600_2000/0/1613806129265?e=2147483647&v=beta&t=pnPmc5gDxUNJc_tY4t3ZN95rKMkTzxj5C5zUVQPQ4So",
    },
    {
      title: 'AIDS',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsO1-3l8A29IiPvpqL84luQVA1MbaeqCfehmSR8jPq-SuU9yuL9zyz6znwfDsvg-0MBms&usqp=CAU',
    },
    {
        title: 'CSE',
        imageUrl: 'https://www.srit.ac.in/wp-content/uploads/2022/07/Computer-Science-and-Engineering-2.jpg',
    },
    {
        title: 'IT',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/14/92/75/1000_F_314927575_yqFMAuXFTNC6gBflR2njRZ4bQb8dAb7y.jpg',
    },
    {
        title: 'ECE',
        imageUrl: "https://frontlinesmedia.in/wp-content/uploads/2023/03/ece.jpg",
      },
      {
        title: 'EEE',
        imageUrl: 'https://img.brainkart.com/menu/2.jpg',
      },
      {
          title: 'CIVIL',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJ4lwaZoYOnGLTXo3Vk6v7VdjTTvtqDC0Rk2WL8tl0_D5bDNmHwkrQOxnMsKPcODNJ9Q&usqp=CAU',
      },
      {
          title: 'MECH',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYegCuL9d9OXTTDWdBFdGQ3gV-9QToeWR0A&usqp=CAU',
      },
    
    
  ];

  return (
    <div className="content-container">
    <CardGrid data={cardData} />
  </div>
  );
};

export default Content;
