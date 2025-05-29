const articles = [
    {
        id: '6837b8415207202388b6e7a9',
        title: 'Experience The Isabella Oasis',
        description: 'Escape to a lush, private oasis in Houston designed for unforgettable gatherings, comfort, and connection.',
        image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2h8ZW58MHx8MHx8fDA%3D',
        alt: 'AI-powered image generation concept',
        category: 'TIPS'
    },
    {
        id: '6837dcc85207202388b6e7aa',
        title: 'Experience House of Tunes',
        description: 'House of Tunes blends bold design, music history, and luxury comforts into Houston’s most unforgettable creative retreat.',
        image: 'https://images.unsplash.com/photo-1490775949603-0e355e8e01ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Electric vehicle charging at home',
        link: 'https://www.carsguide.com.au/ev/advice/charging-your-electric-car-at-home-everything-you-need-to-know-85675',
        category: 'CULTURE'
    },
    {
        id:'6837e0ca5207202388b6e7ab',
        title: 'Your Birthday, Your Way',
        description: 'Celebrate in style with a custom birthday experience delivered to your luxury rental.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8Mg%3D%3D',
        alt: 'Business people working remotely',
        link: 'https://www.freepik.com/premium-photo/two-business-people-working-remotely-online-using-laptop-colleagues-work-remotely-workspace_38844350.htm',
        category: 'TIPS'
    },
    {
        id:'6837e5195207202388b6e7ac',
        title: 'Why Private Jet Travel is Worth It',
        description: 'Discover how private jet travel saves time, enhances comfort, and redefines every journey with Monopoly Concierge.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Female software developer coding',
        link: 'https://www.alamy.com/first-person-view-of-female-software-developer-coding-on-computer-image499327226.html',
        category: 'JOURNEYS'
    },
    {
        id: '6837eaff5207202388b6e7ad',
        title: 'The Real Costs of Flying Private',
        description: 'Learn what really shapes private jet pricing, from hourly rates to hidden fees and flight logistics.',
        image: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Business colleagues meditating at work',
        link: 'https://www.dreamstime.com/group-business-coworkers-meditating-work-sitting-floor-modern-business-meditation-group-business-coworkers-image172614487',
        category: 'TIPS'
    },
    {
        id:'6837fa225207202388b6e7ae',
        title: 'The Luxury Flight You Deserve',
        description: 'Explore private aircraft options that fit your trip, group, and lifestyle for the ultimate flight experience.',
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8Mg%3D%3D',
        alt: 'Blockchain technology concept',
        link: 'https://www.istockphoto.com/photos/artificial-intelligence-concept',
        category: 'CULTURE'
    },
    {
        id: '6837feb55207202388b6e7af',
        title: 'Fuel Arbitrage is the Secret to Smarter Private Jet Travel',
        description: 'Discover how smart refueling strategies can cut private jet costs without compromising comfort or performance.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Cybersecurity protection shield',
        link: 'https://www.istockphoto.com/photos/electric-vehicle-charging-station',
        category: 'TIPS'
    },
    {
        id: '683802b25207202388b6e7b0',
        title: 'How to Make Your Next Stay Unforgettable With Concierge Services',
        description: 'Elevate your short-term rental stay with luxury concierge services designed to surprise, delight, and personalize.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8Mg%3D%3D',
        alt: 'Astronaut floating in space',
        link: 'https://www.istockphoto.com/photos/ev-charger',
        category: 'JOURNEYS'
    },
    {
        id: '683809cc5207202388b6e7b1',
        title: 'Vehicle Travel, Redefined',
        description: 'Enjoy luxury car rentals and private drivers that make every part of your journey seamless and stylish.',
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx0ZWNofGVufDB8fDB8fHwy',
        alt: 'Person jogging in the park',
        link: 'https://www.istockphoto.com/photos/artificial-intelligence-concept',
        category: 'TIPS'
    },
    {
        id: '68380cfd5207202388b6e7b2',
        title: 'The Difference Between Brokers and Operators in Private Jet Travel',
        description: 'Key differences between brokers and operators to help you make smarter, safer private jet decisions.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Modern sustainable architecture',
        link: 'https://www.istockphoto.com/photos/electric-vehicle-charging-station',
        category: 'ART'
    },
];

export default articles;