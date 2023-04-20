const categoryData = {
  "Automotive, Car & Accessories": {
    "Automotive - Helmets, Oils & Lubricants, Batteries, Pressure washer, Vacuum cleaner, Air Freshener, Air purifiers and Vehicle Tools": 6.5,
    "Automotive - Tyres & Rims": 5,
    "Automotive Vehicles - 2-Wheelers, 4-Wheelers and Electric Vehicles": 2,
    "Automotive – Car and Bike parts, Brakes, Styling and body fittings, Transmission, Engine parts, Exhaust systems, Interior fitting, Suspension and Wipers": 11.0,
    "Automotive - Other Subcategories": 18,
    "Automotive – Cleaning kits (Sponges, Brush, Duster, Cloths and liquids), Car interior & exterior care (Waxes, polish, Shampoo and other), Car and Bike Lighting and Paints": 9.0,
    "Automotive Accessories (Floor Mats, Seat/Car/Bike Covers) and Riding Gear (Face Covers and Gloves)": 16,
    "Car Electronics Devices": 5.5,
    "Car Electronics Accessories": 10.5,
  },
  "Baby Products, Toys & Education": {
    "Baby Products - Other Products": 3.5,
    //  {
    // '<=500': '3.5%',
    // '>500 and <=1,000': '6.0%',
    // '>1,000': '8.0%',

    // },
    "Craft Materials": 8,
    "Baby Hardlines - Swings, Bouncers and Rockers, Carriers, Walkers Baby Safety - Guards & Locks Baby Room Décor Baby Furniture Baby Car Seats & Accessories appa Strollers, Buggies & Prams": 6,
    "Craft Materials": 8,
    "Toys - Other Products": 9.5,
    //       {
    //         9.5% for item price <=1,000
    // 11.0% for item price >1,000
    //       }
    "Toys - Drones": 10.5,
    // {10.5% for item price <=1,000
    //   11.0% for item price >1,000}
    "Toys - Balloons and Soft Toys": 11.0,
  },
  "Books, Music, Movies, Video Games, Entertainment": {
    books: 3.0,
    // {3.0% for item price <=300
    //   4.5% for item price >300 and <=500
    //   9.0% for item price >500 and <=1,000
    //   12.5% for item price >1,000}
    "   Movies": 6.5,
    Music: 6.5,
    "Musical Instruments (excluding Guitars and Keyboards)": 7.5,
    "Musical Instruments - Guitars": 8,
    "Musical Instruments - Keyboards": 5,
    "Musical Instruments - DJ & VJ Equipment, Recording and Computer, Cables & Leads, Microphones, PA & Stage": 9.5,
    "Video Games - Online game services": 2,
    "Video Games - Accessories": 10.5,
    // {10.5% for item price <= 500
    //   13.5% for item price >500}
    "Video Games - Consoles": 7.0,
    //{ 7.0% for item price <=1,000
    // 9.0% for item price >1,000}
    "Video Games": 9,
  },
  "Industrial, Medical, Scientific Supplies & Office Products": {
    "Business and Industrial Supplies - Robotics, Lab supplies, Soldering equipment, Personal Protective equipment (excluding masks) and PPE kits": 11.5,
    // {11.5% upto INR 15000
    //   5% more than INR 15000}
    " Janitorial & Sanitation (Cleaners & deodorisers, Mops/buckets, tissues & wipes, commercial vacuum cleaners, dispensers etc.), Medical and Healthcare supplies": 5.5,
    "Pharmacy - Prescription Medicines": 5.5,
    "Masks ": 6.0,
    " Weighing Scales & Fat Analyzers": 15,
    "Business and Industrial Supplies - Material Handling Equipment, Janitorial & Sanitation, Medical & Dental Supplies, Commercial kitchen and refrigeration Equipment": 5.5,
    "Business and Industrial Supplies - Electrical Testing, Dimensional Measurement, 3D Printer, Thermal Printers, Barcode Scanners": 5,
    "Business and Industrial Supplies -Power tools & accessories, Welding machines, Microscopes, Industrial Electrical products ": 9.0,
    "Occupational Safety Supplies (Mask, gloves, Safety shoes, Face shields & other PPE products)": 5,
    "Business and Industrial Supplies - Testing & Measuring instruments, Tapes & Adhesives, Packaging material, 3D printer, Thermal printer and Barcode scanner ": 8,
    // {8% upto INR 15000
    // 5% more than INR 15000}
    "Office products - Office supplies, stationary, Paper products, Art and craft supplies, Pens, Pencils & Writing Supplies": 8,
    "Office - Other products": 8.0,
    // {8.0% for item price <=1,000
    // 9.0% for item price >1,000
    // }
  },
  "Clothing, Fashion, Fashion Accessories, Jewellery, Luggage, Shoes": {
    " Apparel - Accessories": 14,
    // 14% for item price <= 300
    // 18% for item price > 300
    "Apparel - Sweat Shirts and Jackets": 10,
    // 10% for item price <=500
    // 13.5% for item price >500 and <=1,000
    // 19% for item price >1,000
    "Apparel - Shorts": 13,
    // 13.0% for item price <=300
    // 19.0% for item price >300
    "Apparel - Baby": 14.0,
    // 14.0% for item price <=300
    // 15.0% for item price >300
    "Apparel - Ethnic wear": 12.0,
    // 12.0% for item price <= 300
    // 16.5% for item price >300 and <=1,000
    // 18.5% for item price >1,000
    "Apparel - Other innerwear": 7.5,

    // 7.5% for item price <=300
    // 12.5% for item price >300
    "Apparel - Sleepwear": 12.0,
    // 12.0% for item price <=500
    // 13.0% for item price >500
    "Apparel - Other Products": 14,

    // 14% for item price <= 300
    // 16.5% for item price > 300 and <=1000
    // 18% for item price >1000
    "Apparel - Sarees and Dress Materials": 10.5,

    // 10.5% for item price <=300
    // 18% for item price >300 and <=1,000
    // 19.5% for item price >1,000
    "Apparel - Men's T-shirts (except Polos, Tank tops and full sleeve tops)": 17,
    // 17.0% for item price <=500
    // 16.0% for item price >500
    "Apparel - Womens' Innerwear / Lingerie": 6.5,
    // 6.5% for item price <=300
    // 12% for item price >300
    Backpacks: 12.0,
    // 12.0% for item price <=500
    // 10.0% for item price >500
    "Eyewear - Sunglasses, Frames and zero power eye glasses": 10.0,
    // 10.0% for item price <=500
    // 14.0% for item price >500
    "Fashion Jewellery": 22.5,

    // 22.5% for item price <= 1000
    // 24% for item price > 1000
    "Fine Jewellery - Gold Coins ": 2.5,
    "Fine Jewellery - studded": 10,
    "Fine Jewellery - unstudded and solitaire": 5,
    "Flip Flops, Fashion Sandals and Slippers": 9,

    // 9% for item price <= 500
    // 12.5% for item price > 500
    Handbags: 12.5,
    // 12.5% for item price <=500
    // 9.5% for item price >500 and <=1,000
    // 8.5% for item price >1,000
    "Luggage - Suitcase & Trolleys": 6 / 5,
    // 6.5% for item price <=1,000
    // 5.5% for item price >1,000
    "Luggage - Travel Accessories": 11,
    // 11% for item price <= 500
    // 10% for item price > 500
    "Luggage - Other Subcategories": 5.5,
    "Silver Jewellery": 10.5,
    Shoes: 14.0,
    // 14.0% for item price <1,000
    // 16.0% for item price >1,000
    "Kids footwear": 6.0,
    // 6.0% for item price <=300
    // 10.0% for item price >300 and <=500
    // 15.0% for item price >500
    "Shoes - Sandals & Floaters": 10.5,
    Wallets: 8.0,
    // 8.0% for item price <=500
    // 12.0% for item price >500
    Watches: 13.5,
  },
  "Electronics (Camera, Mobile, PC, Wireless) & Accessories": {
    " Cables - Electronics, PC, Wireless": 20,
    "Camera Accessories": 11,
    "Camera Lenses": 7,
    "Camera and Camcorder": 5,
    "Cases, Covers, Skins, Screen Guards": 3,
    // 3% for item price <=150
    // 18% for item price > 150 and <=300
    // 20% for item price > 300 and <= 500
    // 25% for item price > 500
    Desktops: "8%",
    "Electronic Accessories (Electronics, PC & Wireless)": 17,
    "Electronic Devices (except TV, Camera & Camcorder, Camera Lenses and Accessories, GPS Devices, Speakers)": 9,
    "Entertainment Collectibles": 13,
    // 13% for itemprice <= 300
    // 17% for itemprice > 300
    "Fashion Smartwatches": 14.5,
    "GPS Devices": 13.5,
    "Hard Disks": 8.5,
    "Headsets, Headphones and Earphones": 18,
    "Keyboards and Mouse": 13,
    "Kindle Accessories": 2,
    "Laptop Bags & Sleeves": 12,
    // 12% for item price <= 500
    // 9% for item price > 500
    "Laptop and Camera Battery": 12,
    Laptops: 6,
    "Memory Cards": 13,
    "Mobile phones": 5,
    "Tablets (including Graphic Tablets)": 6,
    "Modems & Networking Devices": 14,
    Monitors: 6.5,
    "PC Components (RAM, Motherboards)": 5.5,
    "Power Banks & Chargers": 20,
    "Printers & Scanners": 9,
    "Software Products": 9.5,
    Speakers: 11,
    Television: 6,
    "Landline Phones": 7,
    "USB Flash Drives (Pen Drives)": 16,
    "Projectors, Home Theatre Systems, Binoculars and Telescopes": 6.0,
  },
  "Grocery, Food & Pet Supplies": {
    "  Grocery and Gourmet - Other Products": 4.5,
    // 4.5% for item price <=500
    // 5.5% for item price >500 and <=1,000
    // 8.0% for item price >1,000
    "Grocery and Gourmet - Hampers and gifting": 6.5,
    // 6.0% for item price <=1000
    // 9.5% for item price > 1000
    "Pet Products": 5.0,
    // 5.0% for item price <=250
    // 11.5% for item price >250
  },
  "Health, Beauty, Personal Care & Personal Care Appliances  ": {
    "Beauty - Fragrance": 14.0,
    "Beauty - Haircare, Bath and Shower": 7.0,
    // 7.0% for item price <=500
    // 6.0% for item price >500
    "Beauty - Makeup": 3.0,
    // 3.0% for item price <=500
    // 6.0% for item price >500
    "Beauty Products": 3.5,
    // 3.5% for item price <=500
    // 6.0% for item price > 500
    Deodrants: 6.5,
    "Facial steamers": 7,
    "Prescription Medicine": 2.5,
    "Health & Personal Care (HPC) - Medical Equipment & Contact Lens": 8,
    "Health and Personal Care - Ayurvedic products, Oral care, hand sanitizers, Pooja supplies": 5.0,
    // 5.0% for item price <=500
    // 8.0% for item price > 500
    "Health & Personal Care (HPC) - Nutrition": 9,
    "Health & Personal Care (HPC) - Other Subcategories": 11,
    "Health and Personal Care - Other Household Supplies": 4.5,
    // 4.5% for item price <=500
    // 6.5% for item price >500
    "Health and Personal Care - Contact lens and reading glasses": 12,
    "Luxury Beauty": 5.0,
    "Car Cradles, Lens Kits and Tablet Cases": 19.0,
    // 19.0% for item price <=500
    // 23.0% for item price >500
    "Personal Care Appliances - Electric Massagers": 9.5,
    // 9.5% for item price <= 500
    // 14.5% for item price >500
    "Personal Care Appliances (Grooming & Styling)": 10.0,
    // 10.0% for item price <=300
    // 9.0% for item price >300
    "Personal Care Appliances - Glucometer and Glucometer Strips": 5.5,
    "Personal Care Appliances - Thermometers": 12.5,
    // 12.5% for item price <=500
    // 10.5% for item price >500
    "Personal Care Appliances - Weighing Scales and Fat Analyzers": 10.5,
    // 10.5% for item price <=500
    // 12.0% for item price > 500
    "Personal Care Appliances - Other Products": 7.5,
  },
  "Home, Décor, Home Improvement, Furniture, Outdoor, Lawn & Garden": {
    "  Bean Bags & Inflatables": 11,
    Mattresses: 16.0,
    // 16.0% for item price <=15,000
    // 12.0% for item price >15,000
    Clocks: 8,
    "Furniture - Other products": 15.5,
    // 15.5% for item price <=15,000
    // 10.0% for item price >15,000
    "Home - Fragrance & Candles": 10.5,
    "Carpets, Bedsheets, Blankets and covers": 6,
    // 6% for item price <= 500
    // 10.5% for item price > 500
    "Home Furnishing": 12,
    "Containers, Boxes, Bottles, and Kitchen Storage": 5.0,
    // 5.0% for item price <=300
    // 9.5% for item price >300 and <=500
    // 11.5% for item price >500
    "Home improvement - Wallpapers": 13.5,
    "Home improvement (excl. accessories), including Home Security Systems": 9,
    "Ladders, Kitchen and Bath fixtures": 8.0,
    "Home Storage (Excluding Kitchen Containers, Boxes, Bottles, and Kitchen Storage)": 10.0,
    // 10.0% for item price <=300
    // 14.0% for item price >300
    "Wallpapers & Wallpaper Accessories": 11,
    "Home - Other Subcategories": 17,
    "Home - Waste & Recycling": 6,
    "Home - Posters": 17,
    "Home improvement - Kitchen & Bath, Cleaning Supplies, Paints, Electricals, Hardware, Building Materials": 9,
    "Home Safety & Security Systems": 6,
    Ladders: 7,
    "Indoor Lighting - Others": 16,
    "Indoor Lighting – Wall, ceiling fixture lights, lamp bases, lamp shades and Smart Lighting": 12.0,
    // 12.0% for item price <=500
    // 13.0% for item price >500
    "LED Bulbs and Battens": 7.0,
    // 7.0% for item price <=300
    // 12.0% for item price >300
    "Cushion Covers": 10,
    "Slipcovers and Kitchen Linens": 14.5,
    "Safes and Lockers with Locking Mechanism": 11,
    "Lawn & Garden - Commercial Agricultural Products": 3.0,
    "Lawn & Garden- Chemical Pest Control, Mosquito nets, Bird control, Plant protection, Foggers": 6,
    // 6% for item price <= 1000
    // 8% for item price > 1000
    "Lawn & Garden - Solar Devices (Panels, Inverters, Charge controller, Battery, Lights, Solar gadgets)": 8,
    "Lawn and Garden - Planters, Fertilisers, Watering and other subcategories": 13,
    // 13% for item price <= 300
    // 10% for item price > 300 and <=15000
    // 5% for item price > 15000
    "Lawn and Garden - Plants, Seeds & Bulbs": 9,
    // 9% for item price <=500
    // 10% for item price > 500
    "Lawn & Garden - Outdoor equipments (Saws, Lawn Mowers, Cultivator, Tiller, String Trimmers, Water Pumps, Generators, Barbeque Grills, Greenhouses)": 5.5,
    "Lawn and Garden - Other products": 9.0,
    // 9.0% for item price <=300
    // 10.0% for item price >300 and <=15,000
    // 5% for item price >15,000
  },
  "Kitchen, Large & Small Appliances": {
    "  Kitchen- Non Appliances": 6.0,
    // 6% for item price <= 300
    // 11.5% for item price > 300
    "Kitchen - Glassware & Ceramicware": 6.0,

    // 6.0% for item price <=300
    // 13.5% for item price >300
    "Kitchen - Gas Stoves & Pressure Cookers": 6.0,
    // 6.0% for item price <=1,500
    // 7.5% for item price >1,500
    "Kitchen Tools & Supplies - Choppers, Knives, Bakeware & Accessories": 5.0,
    // 5.0% for item price <=300
    // 11.5% for item price >300
    "Large Appliances (excl. Accessories, Refrigerators and Chimneys)": 5.5,
    "Large Appliances - Accessories": 16,
    "Large Appliances - Chimneys": 7.5,
    "Large Appliances – Refrigerators": 5,
    "Small Appliances": 6.5,
    // 6.5% for item price <=5,000
    // 7.5% for item price >5,000
    "Fans and Robotic Vacuums": 6.5,
    // 6.5% for item price <=3,000
    // 7.5% for item price >3,000
  },
  "Sports, Gym & Sporting Equipment": {
    Bicycles: 6,
    "    Gym Equipments": 9.0,
    // 9.0% for item price <=1,000
    // 10.0% for item price >1,000
    " Sports- Cricket and Badminton Equipments, Tennis, Table Tennis , Squash, Football, Volleyball, Basketball , Throwball, Swimming": 6,
    // 6.0.% for item price <=500
    // 8.0% for item price >500
    "Sports & Outdoors - Footwear": 14,
    // 14% for item price <=1000
    // 15% for item price > 1000
    "Sports & Outdoors - Other Products (excl. cricket and badminton equipments)": 9.0,
    // 9.0% for item price <=500
    // 13.0% for item price >500
  },
  Others: {
    "    Coin Collectibles": 15,
    "Consumable Physical Gift Card": 5,
    "Fine Art": 20,
    "Silver Coins & Bars": 2.5,
    "Sports Collectibles": 13,
    // 13% upto INR 300
    // 17% more than INR 300
    "Wall Art": 13.5,
    "Warranty Services ": 25,
  },
};

export default categoryData;
