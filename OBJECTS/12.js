
var user2 = {
    name: "uday",
    age: 20,
    gender: "male",
    city: "ahmedabad",
    hobbies: "food",
    marks: [25, 100, 80, 90, 80],
    address: {
      state: "gujarat",
      country: "India",
      district: "ahmedabad",
      pincode: "381919",
    }
  };
  
  console.log(user2["address"]["country"]);
  
  console.log(user2.address.country);
  