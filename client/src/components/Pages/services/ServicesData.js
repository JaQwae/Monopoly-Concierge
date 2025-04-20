// Reservation Add-on Images
import { 
    earlyCheckIn, 
    midStayCleaning 
} from '../../../assets/services/reservation-add-ons/reservationAddOnsImages';
// Luxury Experience Images
import {  
    mixologistExperience, 
    privateChefService, 
    wineCheeseTasting 
} from '../../../assets/services/luxury-experiences/luxuryExperiencesImages.js';
// Adventure and Leisure Images
import {  
    offRoadTour,
    cityTour,
    fishingCharter,
    hotAirBallonRide,
    outdoorTheatre,
    jetSkiOrBoatRentals
} from '../../../assets/services/adventure-and-leisure/adventureAndLeisureImages.js';
// Wellness and Relaxation Images
import {  
    indulgentMassages,
    skinCareTreatments,
    yogaSessions,
} from '../../../assets/services/wellness-and-relaxation/wellnessAndRelaxationImages.js';
// Convenience Services Images
import {  
    carRentals,
    privateJetCharters,
} from '../../../assets/services/convenience-services/convenienceServices.js';
// Celebration and Event Enhancements Image
import {  
    customCakeDelivery,
    romanticRoomSetup,
} from '../../../assets/services/celebration-and-event-enhancements/celebrationAndEventEnhancementImage.js';


const servicesData = [
    {
        title: 'Early Check-In / Late Checkout',
        description: 'Enjoy more time at your rental with flexible check-in and checkout options arranged by your Monopoly Manager.',
        image: earlyCheckIn,
        alt: 'Flexible check-in and checkout',
        requiresTwoWeekBooking: false,
        category: 'Reservation Add-Ons'
    },
    {
        title: 'Mid-Stay Cleaning',
        description: 'Keep your space immaculate during longer stays with professional mid-stay cleaning coordinated by your Monopoly Manager.',
        image: midStayCleaning,
        alt: 'Mid-stay cleaning service',
        link: 'https://www.yourbookingsite.com/mid-stay-cleaning',
        requiresTwoWeekBooking: false,
        category: 'Reservation Add-Ons'
    },
    {
        title: 'Private Chef Service',
        description: 'Savor a gourmet dining experience prepared by a private chef. Every detail is managed by Monsieur Concierge.',
        image: privateChefService,
        alt: 'Private chef service',
        link: 'https://www.yourbookingsite.com/private-chef',
        requiresTwoWeekBooking: true,
        category: 'Luxury Experiences'
    },
    {
        title: 'Wine & Cheese Tasting',
        description: 'Delight in a curated selection of fine wines and artisanal cheeses selected by Monsieur Concierge.',
        image: wineCheeseTasting,
        alt: 'Wine and cheese tasting',
        link: 'https://www.yourbookingsite.com/wine-cheese-tasting',
        requiresTwoWeekBooking: true,
        category: 'Luxury Experiences'
    },
    {
        title: 'Mixologist Experience',
        description: 'Enjoy custom-crafted cocktails without leaving your rental, all arranged by Monsieur Concierge.',
        image: mixologistExperience,
        alt: 'Mixologist making drinks',
        link: 'https://www.yourbookingsite.com/mixologist-experience',
        requiresTwoWeekBooking: true,
        category: 'Luxury Experiences'
    },
    {
        title: 'Outdoor Theater',
        description: 'Transform your property into an open-air cinema arranged by Monsieur Concierge.',
        image: outdoorTheatre,
        alt: 'Outdoor theater setup',
        link: 'https://www.yourbookingsite.com/outdoor-theater',
        requiresTwoWeekBooking: true,
        category: 'Adventure & Leisure'
    },
    {
        title: 'Jet Ski or Boat Rental',
        description: 'Experience the thrill of the water with rentals coordinated by Monsieur Concierge in Galveston’s waters.',
        image: jetSkiOrBoatRentals,
        alt: 'Jet ski or boat rental',
        link: 'https://www.yourbookingsite.com/water-rentals',
        requiresTwoWeekBooking: true,
        category: 'Adventure & Leisure'
    },
    {
        title: 'ATV or Off-Road Tour',
        description: 'Explore the best off-road trails near Houston with guided ATV tours arranged by Monsieur Concierge.',
        image: offRoadTour,
        alt: 'ATV off-road adventure',
        link: 'https://www.yourbookingsite.com/atv-tour',
        requiresTwoWeekBooking: true,
        category: 'Adventure & Leisure'
    },
    {
        title: 'Hot Air Balloon Ride',
        description: 'Soar over Houston’s scenic landscapes with every detail managed by Monsieur Concierge.',
        image: hotAirBallonRide,
        alt: 'Hot air balloon ride',
        link: 'https://www.yourbookingsite.com/hot-air-balloon',
        requiresTwoWeekBooking: true,
        category: 'Adventure & Leisure'
    },
    {
        title: 'City Tour or Nightlife Guide',
        description: 'Discover Houston’s vibrant nightlife or cultural landmarks with a private guide handpicked by Monsieur Concierge.',
        image: cityTour,
        alt: 'City tour at night',
        link: 'https://www.yourbookingsite.com/city-nightlife-tour',
        requiresTwoWeekBooking: true,
        category: 'Adventure & Leisure'
    },
    {
        title: 'Fishing Charter',
        description: 'Spend a day fishing off the Texas Gulf Coast with a private charter arranged by Monsieur Concierge.',
        image: fishingCharter,
        alt: 'Fishing charter boat',
        link: 'https://www.yourbookingsite.com/fishing-charter',
        requiresTwoWeekBooking: true,
        category: 'Adventure & Leisure'
    },
    {
        title: 'Indulgent Massages',
        description: 'Enjoy a spa experience at your property with professional massages arranged by Monsieur Concierge.',
        image: indulgentMassages,
        alt: 'Relaxing massage setup',
        link: 'https://www.yourbookingsite.com/indulgent-massages',
        requiresTwoWeekBooking: true,
        category: 'Wellness & Relaxation'
    },
    {
        title: 'Yoga Sessions',
        description: 'Find your zen with private yoga sessions held at your property coordinated by Monsieur Concierge.',
        image: yogaSessions,
        alt: 'Private yoga session',
        link: 'https://www.yourbookingsite.com/yoga-sessions',
        requiresTwoWeekBooking: true,
        category: 'Wellness & Relaxation'
    },
    {
        title: 'Facial & Skincare Treatments',
        description: 'Refresh and rejuvenate with facials delivered right to your property by Monsieur Concierge.',
        image: skinCareTreatments,
        alt: 'Facial treatment at home',
        link: 'https://www.yourbookingsite.com/facial-skincare',
        requiresTwoWeekBooking: true,
        category: 'Wellness & Relaxation'
    },
    {
        title: 'Private Jet Charter',
        description: 'Travel in unparalleled luxury with private jet charters arranged by your Monopoly Manager.',
        image: privateJetCharters,
        alt: 'Private jet on runway',
        link: 'https://www.yourbookingsite.com/private-jet-charter',
        requiresTwoWeekBooking: true,
        category: 'Convenience Services'
    },
    {
        title: 'Car Rentals',
        description: 'Choose from a selection of luxury vehicles delivered by your Monopoly Manager.',
        image: carRentals,
        alt: 'Luxury rental car',
        link: 'https://www.yourbookingsite.com/car-rentals',
        requiresTwoWeekBooking: true,
        category: 'Convenience Services'
    },
    {
        title: 'Romantic Room Setup',
        description: 'Surprise your partner with rose petals, candles, and champagne for a romantic night in arranged by Monsieur Concierge.',
        image: romanticRoomSetup,
        alt: 'Romantic hotel room',
        link: 'https://www.yourbookingsite.com/romantic-setup',
        requiresTwoWeekBooking: true,
        category: 'Celebration & Event Enhancements'
    },
    {
        title: 'Custom Cake Delivery',
        description: 'Satisfy your sweet tooth with a custom cake delivered right to your rental by Monsieur Concierge.',
        image: customCakeDelivery,
        alt: 'Custom cake delivery',
        link: 'https://www.yourbookingsite.com/custom-cake',
        requiresTwoWeekBooking: true,
        category: 'Celebration & Event Enhancements'
    }
]

// {
//     title: 'Private Villa Rentals',
//     description: 'Luxurious private villas with breathtaking views for an unforgettable stay.',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFf6ZHY9d4l0M4z_ZqP2ojnFeG9ekF8LRUNg&s',
//     alt: 'Private villa rental',
//     link: 'https://www.yourbookingsite.com/private-villa-rentals',
//     requiresTwoWeekBooking: true,
//     category: 'Luxury Accommodations'
// },
// {
//     title: 'Personal Concierge Services',
//     description: 'Exclusive concierge services to fulfill your every need, from dining reservations to event planning.',
//     image: 'https://assets.entrepreneur.com/content/3x2/2000/be-personal-concierge.jpg',
//     alt: 'Personal concierge services',
//     link: 'https://www.yourbookingsite.com/personal-concierge',
//     requiresTwoWeekBooking: true,
//     category: 'Luxury Services'
// },
// {
//     title: 'Spa and Wellness Retreats',
//     description: 'Relax and rejuvenate with luxurious spa treatments in serene, picturesque settings.',
//     image: 'https://images.squarespace-cdn.com/content/v1/64a439dde5405e2ca5d9a1b1/67a68ece-48f1-4e07-a1cc-eb57ead1b0bc/SHA+Wellness.jpg',
//     alt: 'Spa and wellness retreat',
//     link: 'https://www.yourbookingsite.com/spa-wellness-retreats',
//     requiresTwoWeekBooking: true,
//     category: 'Wellness'
// },
// {
//     title: 'Gourmet Dining Experiences',
//     description: 'Indulge in world-class culinary experiences with private chefs and personalized menus.',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzphar8sQTqOM8UXm7-gXhvylM8sjptLT_Q&s',
//     alt: 'Gourmet dining',
//     link: 'https://www.yourbookingsite.com/gourmet-dining',
//     requiresTwoWeekBooking: true,
//     category: 'Dining'
// },
// {
//     title: 'Helicopter Tours',
//     description: 'Experience a stunning aerial view of your destination with our exclusive helicopter tours.',
//     image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/f0/69/b3.jpg',
//     alt: 'Helicopter tour',
//     link: 'https://www.yourbookingsite.com/helicopter-tours',
//     requiresTwoWeekBooking: true,
//     category: 'Exclusive Experiences'
// },
// {
//     title: 'Yacht Charters',
//     description: 'Set sail on a luxurious private yacht for a truly unforgettable experience on the water.',
//     image: 'https://luxuryliners.com/wp-content/uploads/101-Azimut-Newport-Beach-Luxury-Yacht-633x420.jpg',
//     alt: 'Yacht charter',
//     link: 'https://www.yourbookingsite.com/yacht-charters',
//     requiresTwoWeekBooking: true,
//     category: 'Exclusive Experiences'
// },
// {
//     title: 'Private Jet Services',
//     description: 'Travel in style and comfort with private jet charters tailored to your schedule.',
//     image: 'https://private-jets.pro/assets/images/home/private-jet-rent.jpg',
//     alt: 'Private jet',
//     link: 'https://www.yourbookingsite.com/private-jet-services',
//     requiresTwoWeekBooking: true,
//     category: 'Travel'
// },
// {
//     title: 'Luxury Chauffeur Services',
//     description: 'Enjoy the comfort and convenience of being driven in a luxury vehicle by a professional chauffeur.',
//     image: 'https://mphclub.com/wp-content/uploads/2020/09/rolls-royce-phantom-rental-chauffeur-services-mph-club.webp',
//     alt: 'Luxury chauffeur service',
//     link: 'https://www.yourbookingsite.com/luxury-chauffeur',
//     requiresTwoWeekBooking: true,
//     category: 'Travel'
// },
// {
//     title: 'Personalized Shopping Experience',
//     description: 'Indulge in a private shopping spree with the guidance of a personal shopper.',
//     image: 'https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-02/logo_0.jpg?VersionId=43gweefyzy.FYmNrS1Wrm7qk5whr6188&h=ad768323&size=750:*',
//     alt: 'Personal shopping experience',
//     link: 'https://www.yourbookingsite.com/personalized-shopping',
//     requiresTwoWeekBooking: false,
//     category: 'Luxury Services'
// },
// {
//     title: 'Private Art Tours',
//     description: 'Explore art collections with a private tour guide and access to exclusive exhibitions.',
//     image: 'https://babylontours.com/wp-content/uploads/2017/12/National-Gallery-Of-Art-Tour-Washington-DC-900x600.jpg',
//     alt: 'Private art tour',
//     link: 'https://www.yourbookingsite.com/private-art-tours',
//     requiresTwoWeekBooking: true,
//     category: 'Exclusive Experiences'
// },
// {
//     title: 'Luxury Wellness Packages',
//     description: 'Experience rejuvenating wellness treatments designed for ultimate relaxation and vitality.',
//     image: 'https://adagold.com.au/wp-content/uploads/2024/12/adagold-australian-luxury-retreats.jpg',
//     alt: 'Luxury wellness treatment',
//     link: 'https://www.yourbookingsite.com/luxury-wellness-packages',
//     requiresTwoWeekBooking: false,
//     category: 'Wellness'
// },
// {
//     title: 'Custom-Made Jewelry',
//     description: 'Design your own one-of-a-kind piece with the help of our expert jewelers.',
//     image: 'https://www.providencediamond.com/images/custom-design-img.png',
//     alt: 'Custom jewelry design',
//     link: 'https://www.yourbookingsite.com/custom-made-jewelry',
//     requiresTwoWeekBooking: false,
//     category: 'Luxury Services'
// },
// {
//     title: 'Private Wine Tastings',
//     description: 'Experience the finest wines from around the world with a personalized wine-tasting experience.',
//     image: 'https://images.squarespace-cdn.com/content/v1/55ae9aa7e4b0485b4e8a37a4/1467083582692-MNSS87H9TCCHK4TVT54E/Private+Wine+Tasting+Event+Sommelier+Wine+Expert+London',
//     alt: 'Private wine tasting',
//     link: 'https://www.yourbookingsite.com/private-wine-tastings',
//     requiresTwoWeekBooking: true,
//     category: 'Dining'
// },
// {
//     title: 'Luxury Golf Packages',
//     description: 'Enjoy a round of golf at some of the most exclusive courses, complete with a personal caddie.',
//     image: 'https://www.elegantgolfresorts.com/app/uploads/2019/08/all-inclusive-golf-holidays.jpg',
//     alt: 'Luxury golf package',
//     link: 'https://www.yourbookingsite.com/luxury-golf-packages',
//     requiresTwoWeekBooking: true,
//     category: 'Exclusive Experiences'
// },
// {
//     title: 'Bespoke Travel Planning',
//     description: 'Create a personalized travel itinerary tailored to your tastes and preferences.',
//     image: 'https://images.squarespace-cdn.com/content/v1/5662191ce4b0d8f09481c9a5/1451529871065-PSIELLJSFQ3I87ED7IKM/IMG_3929.JPG?format=1500w',
//     alt: 'Bespoke travel planning',
//     link: 'https://www.yourbookingsite.com/bespoke-travel-planning',
//     requiresTwoWeekBooking: false,
//     category: 'Travel'
// }
// ];

export default servicesData;
