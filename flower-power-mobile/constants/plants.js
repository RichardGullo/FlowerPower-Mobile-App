
// Mock JSON array
var plantReminders = [
    {
        key:'supersayin',
        nickname:"Silly Cilantro", 
        species:"Cilantro", 
        date: "2020-12-5", 
        classification: ["Algae", "Flower", "Fruit"],
        image: require('../assets/flower5.png'),
        waterNeeded:[true, false, true],
        sunNeeded:[true, true, false],
        reminders:{
            fertilized:10,
            rotated:15,
            prunned:15,
            trimmed:15,
            replanted:12,
            watered:5,
        },

        notes:"This is my favorite Cilantro",
        completedTask:[false, false],
        deleteEntry:false

    },
    {
        key:'girls', 
        nickname:"Apple Fruit", 
        species:"Richard", 
        date: "2019-6-6", 
        classification: ["Grass", "Herb", "Moss"], 
        image: require('../assets/apple.png'),
        waterNeeded:[true, false, true],
        sunNeeded:[true, true, false],
        reminders:{
            fertilized:10,
            rotated:15,
            prunned:15,
            trimmed:15,
            replanted:12,
            watered:5,
        },
        notes:"This is my favorite Apple",
        completedTask:[false, false],
        deleteEntry:false
    },
    {
        key:'2', 
        nickname:"Banana Fruit", 
        species:"Hiyorinne", 
        date: "2018-3-6", 
        classification: ["Orchid", "Root", "Shrub"],
        image: require('../assets/banana.png'),
        waterNeeded:[true, false, true],
        sunNeeded:[true, true, true],
        reminders:{
            fertilized:10,
            rotated:15,
            prunned:15,
            trimmed:15,
            replanted:12,
            watered:5,
        },
        notes:"This is my favorite Banana",
        completedTask:[false, false],
        deleteEntry:false
    },
    {
        key:'3', 
        nickname:"Orange Fruit", 
        species:"Donald", 
        date: "2019-5-12", 
        classification: ["Succulent", "Tree", "Veggie"],
        image: require('../assets/orange.png'),
        waterNeeded:[true, false, true],
        sunNeeded:[true, true, false],
        reminders:{
            fertilized:10,
            rotated:15,
            prunned:15,
            trimmed:15,
            replanted:12,
            watered:5,
        },
        notes:"This is my favorite Orange",
        completedTask:[false, false],
        deleteEntry:false
    },
    {
        key:'guru', 
        nickname:"Apple Cider", 
        species:"Donald", 
        date: "2019-10-7", 
        classification: ["Vine", "Other"],
        image: require('../assets/cider.png'),
        waterNeeded:[true, false, true],
        sunNeeded:[true, true, true],
        reminders:{
            fertilized:10,
            rotated:15,
            prunned:15,
            trimmed:15,
            replanted:12,
            watered:5,
        },
        notes:"This is my favorite Cider",
        completedTask:[false, false],
        deleteEntry:false,
    },

]

var plantReminders2 = [

]


var users = [
    {username:"Richard",password:"123pass", email:"john@example.com"},
    //{username:"Xavier",password:"123pass", email:"jane@example.com"}
];

plantReminders = plantReminders.sort((a,b) =>{
    if(a.nickname.toLowerCase() > b.nickname.toLowerCase())
        return 1;
    else if(a.nickname.toLowerCase() < b.nickname.toLowerCase())
        return -1;
    else
        return 0;
})

plantReminders2 = plantReminders2.sort((a,b) =>{
    if(a.nickname.toLowerCase() > b.nickname.toLowerCase())
        return 1;
    else if(a.nickname.toLowerCase() < b.nickname.toLowerCase())
        return -1;
    else
        return 0;
})
export {plantReminders,plantReminders2, users};