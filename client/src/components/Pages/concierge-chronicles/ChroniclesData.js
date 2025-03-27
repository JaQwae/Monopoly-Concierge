const articles = [
    {
        title: 'Advancements in AI-Powered Image Generation',
        description: 'Exploring the latest breakthroughs in AI-driven image creation, including OpenAI\'s GPT-4o.',
        image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2h8ZW58MHx8MHx8fDA%3D',
        alt: 'AI-powered image generation concept',
        link: 'https://www.wsj.com/articles/openai-claims-breakthrough-in-image-creation-for-chatgpt-62ed0318',
    },
    {
        title: 'The Future of Electric Vehicle Charging',
        description: 'Insights into the evolution of EV charging technologies and their impact on sustainable transportation.',
        image: 'https://images.unsplash.com/photo-1490775949603-0e355e8e01ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Electric vehicle charging at home',
        link: 'https://www.carsguide.com.au/ev/advice/charging-your-electric-car-at-home-everything-you-need-to-know-85675',
    },
    {
        title: 'Remote Work: Navigating the Digital Workspace',
        description: 'Strategies and tools for effective collaboration and productivity in a remote work environment.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8Mg%3D%3D',
        alt: 'Business people working remotely',
        link: 'https://www.freepik.com/premium-photo/two-business-people-working-remotely-online-using-laptop-colleagues-work-remotely-workspace_38844350.htm',
    },
    {
        title: 'The Rise of Women in Tech',
        description: 'Highlighting the contributions and growing presence of women in the technology sector.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Female software developer coding',
        link: 'https://www.alamy.com/first-person-view-of-female-software-developer-coding-on-computer-image499327226.html',
    },
    {
        title: 'Mindfulness Practices in the Workplace',
        description: 'Exploring the benefits of mindfulness and meditation for enhancing employee well-being and productivity.',
        image: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Business colleagues meditating at work',
        link: 'https://www.dreamstime.com/group-business-coworkers-meditating-work-sitting-floor-modern-business-meditation-group-business-coworkers-image172614487',
    },
    {
        title: 'Blockchain Technology: Beyond Cryptocurrency',
        description: 'Understanding the applications of blockchain in various industries beyond digital currencies.',
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8Mg%3D%3D',
        alt: 'Blockchain technology concept',
        link: 'https://www.istockphoto.com/photos/artificial-intelligence-concept',
    },
    {
        title: 'Cybersecurity in the Age of Remote Work',
        description: 'Addressing the challenges and solutions for maintaining security in a decentralized work environment.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Cybersecurity protection shield',
        link: 'https://www.istockphoto.com/photos/electric-vehicle-charging-station',
    },
    {
        title: 'Space Exploration: The Next Frontier',
        description: 'Discussing upcoming missions and the future of human exploration beyond Earth.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8Mg%3D%3D',
        alt: 'Astronaut floating in space',
        link: 'https://www.istockphoto.com/photos/ev-charger',
    },
    {
        title: 'The Benefits of Regular Physical Activity',
        description: 'Examining how consistent exercise contributes to overall health and well-being.',
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx0ZWNofGVufDB8fDB8fHwy',
        alt: 'Person jogging in the park',
        link: 'https://www.istockphoto.com/photos/artificial-intelligence-concept',
    },
    {
        title: 'Sustainable Practices in Modern Architecture',
        description: 'Exploring eco-friendly design and construction methods in contemporary building projects.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDI%3D',
        alt: 'Modern sustainable architecture',
        link: 'https://www.istockphoto.com/photos/electric-vehicle-charging-station',
    },
];

export default articles;
