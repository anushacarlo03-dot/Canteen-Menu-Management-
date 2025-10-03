const menuData = {
  breakfast: [
    {name: "Classic Pancakes", price: 50, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "Fluffy pancakes served with maple syrup and butter"},
    {name: "Masala Omelette", price: 40, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80", description: "Spiced eggs with onions, tomatoes, and green chilies"},
    {name: "French Toast", price: 45, img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80", description: "Golden toast with cinnamon and powdered sugar"},
    {name: "Idli Sambhar", price: 35, img: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=400&q=80", description: "Steamed rice cakes with lentil curry and chutney"},
    {name: "Masala Dosa", price: 40, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80", description: "Crispy dosa filled with spiced potato masala"},
    {name: "Poha", price: 30, img: "/images/vegetable_poha.jpg", description: "Flattened rice with peanuts and spices"},
    {name: "Vada Sambhar", price: 35, img: "/images/vada_sambar.jpg", description: "Crispy lentil fritters with sambhar"},
    {name: "Aloo Paratha", price: 45, img: "/images/aloo_parata.jpg", description: "Stuffed potato flatbread with butter and curd"}
  ],
  lunch: [
    {name: "South Indian Thali", price: 100, img: "/images/south_indian_thali.jpg", description: "Complete meal with rice, dal, vegetables, and dessert"},
    {name: "Chicken Curry", price: 120, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80", description: "Tender chicken in rich, spiced gravy"},
    {name: "Paneer Butter Masala", price: 110, img: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?auto=format&fit=crop&w=400&q=80", description: "Creamy paneer cubes in rich tomato-based sauce"},
    {name: "Vegetable Fried Rice", price: 90, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80", description: "Wok-tossed rice with fresh vegetables and soy sauce"},
    {name: "Chicken Biryani", price: 150, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80", description: "Fragrant basmati rice with tender chicken pieces"},
    {name: "Dal Tadka", price: 70, img: "/images/dal.jpg", description: "Yellow lentils tempered with aromatic spices"},
    {name: "Chole Bhature", price: 80, img: "/images/chole_bature.jpg", description: "Spicy chickpeas with fluffy fried bread"},
    {name: "Palak Paneer", price: 100, img: "/images/palak_panner.jpg", description: "Cottage cheese in creamy spinach gravy"},
    {name: "Rajma Chawal", price: 85, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80", description: "Kidney bean curry with steamed rice"},
    {name: "Veg Biryani", price: 100, img: "/images/biryani_veg.jpg", description: "Aromatic rice with mixed vegetables and spices"}
  ],
  dinner: [
    {name: "Creamy Pasta", price: 110, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80", description: "Italian pasta in white sauce with herbs"},
    {name: "Grilled Chicken", price: 200, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=400&q=80", description: "Perfectly grilled chicken breast with sides"},
    {name: "Margherita Pizza", price: 180, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80", description: "Classic pizza with fresh tomatoes and mozzarella"},
    {name: "Paneer Tikka", price: 150, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80", description: "Grilled paneer cubes marinated in tandoor spices"},
    {name: "Chicken Burger", price: 120, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80", description: "Juicy chicken patty with fresh veggies and fries"},
    {name: "Veg Burger", price: 90, img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=400&q=80", description: "Crispy veg patty with lettuce and cheese"},
    {name: "Hakka Noodles", price: 100, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80", description: "Stir-fried noodles with vegetables"},
    {name: "Manchurian Fried Rice", price: 120, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80", description: "Spicy fried rice with manchurian balls"},
    {name: "Tomato Soup", price: 50, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80", description: "Creamy tomato soup with croutons"},
    {name: "Sweet Corn Soup", price: 55, img: "/images/corn_soup.jpg", description: "Thick corn soup with vegetables"}
  ],
  beverages: [
    {name: "Fresh Lime Water", price: 20, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "Refreshing lime juice with mint leaves"},
    {name: "Masala Chai", price: 15, img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=400&q=80", description: "Traditional Indian spiced tea"},
    {name: "Filter Coffee", price: 18, img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80", description: "Authentic South Indian filter coffee"},
    {name: "Cold Coffee", price: 40, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80", description: "Chilled coffee with ice cream and whipped cream"},
    {name: "Mango Lassi", price: 45, img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=400&q=80", description: "Sweet mango yogurt drink"},
    {name: "Buttermilk", price: 20, img: "/images/buttermilk.jpg", description: "Spiced yogurt drink with curry leaves"},
    {name: "Fresh Orange Juice", price: 40, img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80", description: "Freshly squeezed orange juice"},
    {name: "Iced Tea", price: 35, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80", description: "Refreshing lemon iced tea"},
    {name: "Badam Milk", price: 50, img: "/images/badam_milk.jpg", description: "Almond flavored milk drink"},
    {name: "Green Tea", price: 25, img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400&q=80", description: "Healthy green tea with antioxidants"}
  ]
};
