var categories = [
    {
        "id":1,
        "name":"Action"
    },
    {
        "id":2,
        "name":"Adventure"
    },
    {
        "id":3,
        "name":"Indie"
    },
    {
        "id":4,
        "name":"RPG"
    },
    {
        "id":5,
        "name":"Strategy"
    },
    {
        "id":6,
        "name":"Shooter"
    },
    {
        "id":7,
        "name":"First Person"
    },
    {
        "id":8,
        "name":"Racing"
    },
    {
        "id":9,
        "name":"Horror"
    },
    {
        "id":10,
        "name":"Simulation"
    },
    {
        "id":11,
        "name":"Stealth"
    },
    {
        "id":12,
        "name":"Casual"
    },
    {
        "id" : 13,
        "name" : "Sports"
    }
]
var modes = [
    {
        "id":1,
        "name":"Single Player"
    },
    {
        "id":2,
        "name":"Multiplayer"
    }
]
var otherFilters = [
    {
        "id" : 1,
        "name" : "New Releases"
    },
    {
        "id" : 2,
        "name" : "Top Sellers"
    },
    {
        "id" : 3,
        "name" : "On Sale"
    }
]
var allGames = [
    {
        "id" : 1,
        "name" : "Cyberpunk 2077",
        "modes": [1],
        "otherId" : [1,2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "CD PROJEKT RED"
            },
            {
                "name" : "Release date",
                "value" : "Dec 10, 2020"
            },
            {
                "name" : "Rating",
                "value" : "8.4/10"
            }],
            "text" : [["NIGHT CITY CHANGES EVERY BODY","Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you."],
        ["PLAY AS A MERCENARY OUTLAW", "Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City."],
        ["LIVE IN THE CITY OF THE FUTURE", "Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth."],
        ["STEAL THE IMPLANT THAT GRANTS ETERNAL LIFE", "Take the riskiest job of your life and go after a prototype implant that is the key to immortality."]
        ]
        },
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_1.jpg",
            "gallery" : [
                "images/screenshot_cyberpunk_1.jpg","images/screenshot_cyberpunk_2.jpg","images/screenshot_cyberpunk_3.jpg"
            ],
            "logo" : "images/cyberpunk_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 49.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i5-3570K or AMD FX-8310"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
                },
                {
                    "name":"Storage",
                    "value":"70 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
                }
            ]
        },
        "catId" : [1,2,7,6,4],
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 2,
        "name" : "Minecraft Dungeons",
        "modes": [1, 2],
        "catId" : [2,12],
        "otherId" : [1],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Mojang"
            },
            {
                "name" : "Release date",
                "value" : "May 26, 2020"
            },
            {
                "name" : "Rating",
                "value" : "9.3/10"
            }],
            "text" : [["UNITE.","Brave the dungeons alone, or team up with friends! Up to four players can battle together in local and online co-op."],
        ["FIGHT.", "Use melee swings, hang back with ranged attacks, or tank your way through shielded by heavy armor! Personalize your character and unlock unique items and weapon enchantments for devastating special attacks"],
        ["SURVIVE.", "Explore the action-packed, treasure-stuffed, wildly varied levels – all in an epic quest to save the villagers and take down the evil Arch-Illager!"],
        ["Game details", "Discover a trove of powerful new weapons and items that will help you defeat ruthless swarms of new-and-nasty mobs. Fight or flee through canyons, swamps and – of course – mines! Any adventurer brave or foolish enough to explore this blocky and beautiful world will need to come prepared. So quickly, gear up!"]
        ]
        },
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_14.jpg",
            "gallery" : [
                "images/screenshot_minecraft_1.jpg","images/screenshot_minecraft_2.jpg","images/screenshot_minecraft_3.jpg"
            ],
            "logo" : "images/minecraft_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 29.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 10, 8 or 7 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i5 2.8GHz or equivalent"
                },
                {
                    "name":"RAM",
                    "value": "6 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 660 or AMD Radeon HD 7870 or equivalent"
                },
                {
                    "name":"Storage",
                    "value":"6 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i5-4670K 3.4GHz / AMD FX-8370"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"AMD Radeon RX 580 8GB or NVIDIA GeForce GTX 1060"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 3,
        "name" : "Assassin's Creed Valhalla",
        "modes": [1],
        "otherId" : [1,2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Ubisoft"
            },
            {
                "name" : "Release date",
                "value" : "Nov 10, 2020"
            },
            {
                "name" : "Rating",
                "value" : "9.6/10"
            }],
            "text" : [["WRITE YOUR VIKING SAGA","Blaze your own path across England with advanced RPG mechanics. Fight brutal battles, lead fiery raids or use strategy and alliances with other leaders to bring victory. Every choice you make in combat and conversation is another step on the path to greatness."],
        ["LEAD EPIC RAIDS", "Lead a crew of raiders and launch lightning-fast surprise attacks against Saxon armies and fortresses. Claim the riches of your enemies' lands for your clan and expand your influence far beyond your growing settlement."],
        ["GROW YOUR SETTLEMENT", "Your clan's new home grows with your legend. Customise your settlement by building upgradable structures. Unlock new features and quests by constructing a barracks, a blacksmith, a tattoo parlour, and much more."]
        ]
        },
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_2.jpg",
            "gallery" : [
                "images/screenshot_valhalla_1.jpg","images/screenshot_valhalla_2.jpg","images/screenshot_valhalla_3.jpg"
            ],
            "logo" : "images/valhalla_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 59.99
            }
        },
        "catId" : [1,2,11,4],
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 10 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i5-4460 3.2GHz / AMD Ryzen R3 1200"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"AMD Radeon R9 380 or NVIDIA GeForce GTX 960 2GB"
                },
                {
                    "name":"Storage",
                    "value":"50 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i7-4790 4-Core 3.6GHz / AMD Ryzen R5 1600"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"AMD Radeon RX 570 8GB or NVIDIA GeForce GTX 1060"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 4,
        "name" : "Kena: Bridge of Spirits",
        "modes": [1],
        "otherId" : [1],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Ember Lab"
            },
            {
                "name" : "Release date",
                "value" : "Feb 6, 2020"
            },
            {
                "name" : "Rating",
                "value" : "9.0/10"
            }],
            "text" : [["The Story","Kena, a young Spirit Guide, travels to an abandoned village in search of the sacred mountain shrine.  She struggles to uncover the secrets of this forgotten community hidden in an overgrown forest where wandering spirits are trapped."],
        ["Find the Rot", "Timid and illusive spirits scattered throughout the forest. They maintain balance by decomposing dead and rotting elements."]
        ]
        },
        "catId" : [2, 1],
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_4.jpg",
            "gallery" : [
                "images/screenshot_kena_1.jpg","images/screenshot_kena_2.jpg","images/screenshot_kena_3.jpg"
            ],
            "logo" : "images/kena_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 49.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7/8.1/10 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "AMD FX-6100/Intel i3-3220 or Equivalent"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"AMD Radeon HD 7750/NVIDIA GeForce GTX 650 or Equivalent"
                },
                {
                    "name":"Direct X",
                    "value":"Version 11"
                },
                {
                    "name":"Storage",
                    "value":"25 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10"
                },
                {
                    "name":"Processor",
                    "value": "AMD Ryzen 7 1700/Intel i7-6700K or Equivalent"
                },
                {
                    "name":"RAM",
                    "value": "16 GB"
                },
                {
                    "name":"Direct X",
                    "value":"Version 11"
                },
                {
                    "name":"Graphics",
                    "value":"AMD RX Vega 56/ Nvidia GTX 1070 or Equivalent"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 16,
        "name" : "Mafia: Definite Edition",
        "modes": [1],
        "otherId" : [1,2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Hangar  13 | 2K Games"
            },
            {
                "name" : "Release date",
                "value" : "Sep 25, 2020"
            },
            {
                "name" : "Rating",
                "value" : "9.3/10"
            }],
            "text" : [["Play a Mob Movie","Live the life of a Prohibition-era gangster and rise through the ranks of the Mafia."],
            ["Re-Made Classic", "Recreated 1930's cityscape, filled with interwar architecture, cars and culture to see, hear and interact with."]
        ]
        },
        "catId" : [1, 6],
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_16.jpg",
            "gallery" : [
                "images/screenshot_mafia_1.jpg","images/screenshot_mafia_2.jpg","images/screenshot_mafia_3.jpeg", "images/screenshot_mafia_4.jpg"
            ],
            "logo" : "images/mafia_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 49.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 10 64-bit"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core-i5 2550K 3.4GHz / AMD FX 8120 3.1 GHz"
                },
                {
                    "name":"RAM",
                    "value": "6 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 660 / AMD Radeon HD 7870"
                },
                {
                    "name":"Storage",
                    "value":"50 GB"
                },
                {
                    "name" : "DirectX",
                    "value" : "11"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 64-bit"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core-i7 3770 3.4GHz / AMD FX-8350 4.2GHz"
                },
                {
                    "name":"Memory",
                    "value": "16 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 1080 / AMD Radeon RX 5700"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 5,
        "name" : "Blair Witch",
        "modes": [1],
        "otherId" : [1],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Bloober Team"
            },
            {
                "name" : "Release date",
                "value" : "Oct 29, 2020"
            },
            {
                "name" : "Rating",
                "value" : "8.9/10"
            }],
            "text" : [["Your darkest fears will awaken in these woods.","It’s 1996. A young boy disappears in the Black Hills Forest near Burkittsville, Maryland. As Ellis, a former police officer with a troubled past, you join the search. What starts as an ordinary investigation soon turns into an endless nightmare as you confront your fears and the Blair Witch, a mysterious force that haunts the woods…"]
        ]
        },
        "catId" : [9, 2, 7],
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_6.jpg",
            "gallery" : [
                "images/screenshot_blair_1.jpg","images/screenshot_blair_2.jpg","images/screenshot_blair_3.jpg"
            ],
            "logo" : "images/blair_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 39.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i3-3220 (3.30 GHz) / AMD A8-7600 (3.1 GHz)"
                },
                {
                    "name":"RAM",
                    "value": "4 GB"
                },
                {
                    "name":"Graphics",
                    "value":"GeForce GTX 750 Ti / AMD Radeon R7 265"
                },
                {
                    "name":"Direct X",
                    "value":"DirectX 11.0"
                },
                {
                    "name":"Storage",
                    "value":"16 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i5-6500 (3.2 GHz) / AMD Ryzen 5 1600"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"GeForce GTX 1070 / AMD Radeon RX 590"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 6,
        "name" : "Snowrunner",
        "modes": [1, 2],
        "otherId" : [1],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Saber Interactive"
            },
            {
                "name" : "Release date",
                "value" : "Oct 29, 2020"
            },
            {
                "name" : "Rating",
                "value" : "8.9/10"
            }],
            "text" : [["Overcome mud","SnowRunner puts you in the driver’s seat of powerful vehicles as you conquer extreme open environments with the most advanced terrain simulation ever. Drive 40 vehicles from brands such as Ford, Chevrolet, and Freightliner as you leave your mark on an untamed open world."]
        ]
        },
        "catId" : [12, 10],
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_10.jpg",
            "gallery" : [
                "images/screenshot_snowrunner_1.jpg","images/screenshot_snowrunner_2.jpg","images/screenshot_snowrunner_3.jpg", "images/screenshot_snowrunner_4.jpg"
            ],
            "logo" : "images/snowrunner_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 34.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7/8/10 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "Intel i3-4130 3.4 GHz / AMD Ryzen 3 2200U 3.4 GHz"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"2 GB, GeForce GTX 660 / Radeon R9 270"
                },
                {
                    "name":"Storage",
                    "value":"20 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10"
                },
                {
                    "name":"Processor",
                    "value": "Intel i7-8700 3.2 GHz / AMD Ryzen 7 2700 3.2 GHz"
                },
                {
                    "name":"Memory",
                    "value": "16 GB"
                },
                {
                    "name":"Graphics",
                    "value":"4 GB, GeForce GTX 970 / Radeon RX 580"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 13,
        "name" : "The Elder Scrolls V: Skyrim",
        "modes": [1],
        "otherId" : [3],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Bethesda"
            },
            {
                "name" : "Release date",
                "value" : "Oct 28, 2016"
            },
            {
                "name" : "Rating",
                "value" : 8.9
            }],
            "text" : [["Explore Skyrim","Skyrim retains the traditional open world gameplay found in the Elder Scrolls series. The player is free to roam the land of Skyrim at will. Within Skyrim lie five cities, comparatively larger to those in Oblivion's Cyrodiil setting, and expanses of wilderness and mountainous ranges. When visiting cities, the player can complete activities such as farming and mining, and is able to smith weapons from a forge. Aside from the main story quest, the player can complete side-quests, which are dynamically created based on the player's actions within the game. The in-game head-up display can be hidden, and the menu is presented in a compass-style overlay."]]
        },
        "catId" : [1,2,4],
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_12.jpg",
            "gallery" : [
                "images/screenshot_skyrim_1.jpg","images/screenshot_skyrim_2.jpg"
            ],
            "logo" : "images/skyrim_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 30
            },
            "value" : {
                "listPrice" : 24.99,
                "netPrice" : 19.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7/Vista/XP PC (32 or 64 bit)"
                },
                {
                    "name":"Processor",
                    "value": "Dual Core 2.0 GHz or equivalent"
                },
                {
                    "name":"RAM",
                    "value": "2 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce 7600 GT & ATI Radeon X1800"
                },
                {
                    "name":"Storage",
                    "value":"6 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 7/Vista/XP PC (32 or 64 bit)"
                },
                {
                    "name":"Processor",
                    "value": "Quad-core Intel or AMD CPU"
                },
                {
                    "name":"Memory",
                    "value": "4 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 260 or higher; ATI Radeon HD 4890 or higher"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 39,
        "name" : "Back 4 Blood",
        "modes": [1, 2],
        "otherId" : [1],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Turtle Rock"
            },
            {
                "name" : "Release date",
                "value" : "Feb 22, 2021"
            },
            {
                "name" : "Rating",
                "value" : "8.4/10"
            }],
            "text" : [["Extreme Replayability","A new \"rogue-lite\" Card System creates different experiences each and every time, putting you in control to craft custom decks, roll different builds and undertake more demanding fights."],
        ["Competitive Multiplayer", "Play with or against friends in PVP. Switch between playing as a Cleaner with special perks and the horrific Ridden. Both sides come with unique weapons, abilities, and specialties."],
        ["Cooperative Campaign", "Fight your way through a dynamic, perilous world in a 4-player co-op story campaign where you must work together to survive increasingly challenging missions. Play with up to 3 of your friends online or go solo and lead your team in battle. Choose from 8 customizable Cleaners, one of the immune survivors, and a range of lethal weapons and items. Strategize against an ever-evolving enemy bent on your total destruction."]
        ]
        },
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_28.jpg",
            "gallery" : [
                "images/screenshot_b4b_1.jpg","images/screenshot_b4b_2.jpg","images/screenshot_b4b_3.jpg"
            ],
            "logo" : "images/b4b_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 49.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i5-3570K or AMD FX-8310"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
                },
                {
                    "name":"Storage",
                    "value":"70 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
                }
            ]
        },
        "catId" : [1, 2, 7, 6, 9],
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 7,
        "name" : "Godfall",
        "modes": [1 , 2],
        "otherId" : [1],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Counterplay Games"
            },
            {
                "name" : "Release date",
                "value" : "Nov 12, 2020"
            },
            {
                "name" : "Rating",
                "value" : "9.2/10"
            }],
            "text" : [["Explore Water Realm","Aperion is on the precipice of ruin. You are the last of the Valorian knights, god-like warriors able to equip Valorplates, legendary armor sets that transform wielders into unstoppable masters of melee combat. Tear through foes as you climb through the elemental realms and challenge the mad god, Macros who awaits you at the top. Ascend in Godfall, the first-of-its-kind, looter-slasher, melee action-RPG."]
        ]
        },
        "catId" : [1,2],
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_9.jpg",
            "gallery" : [
                "images/screenshot_godfall_1.jpg","images/screenshot_godfall_2.jpg"
            ],
            "logo" : "images/godfall_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 49.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 10"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i5-6600 | AMD Ryzen 5 1600"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060, 6 GB | AMD Radeon RX 580, 8 GB"
                },
                {
                    "name":"Direct X",
                    "value":"DirectX 11"
                },
                {
                    "name":"Storage",
                    "value":"50 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i7-8700 | AMD Ryzen 5 3600"
                },
                {
                    "name":"RAM",
                    "value": "16 GB"
                },
                {
                    "name":"Direct X",
                    "value":"DirectX 12"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1080 Ti, 11 GB | AMD Radeon RX 5700 XT, 8 GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 28,
        "catId" : [8,10],
        "name" : "Dirt 5",
        "modes": [1, 2],
        "otherId" : [3],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Codemasters"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_22.jpg",
            "gallery" : [
                "images/screenshot_dirt_1.jpg","images/screenshot_dirt_2.jpg","images/screenshot_dirt_3.jpg"
            ],
            "logo" : "images/dirt_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 50
            },
            "value" : {
                "listPrice" : 19.99,
                "netPrice" : 9.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 25,
        "name" : "Bee Simulator",
        "modes": [1],
        "otherId" : [3],
        "catId" : [12, 2, 10],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Codemasters"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_25.jpg",
            "gallery" : [
                "images/screenshot_bee_1.jpg","images/screenshot_bee_2.jpg","images/screenshot_bee_3.jpg", "images/screenshot_bee_4.jpg"
            ],
            "logo" : "images/bee_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 50
            },
            "value" : {
                "listPrice" : 29.99,
                "netPrice" : 14.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 31,
        "catId" : [6,1,7],
        "name" : "Call of Duty: Cold War",
        "modes" : [2,1],
        "otherId" : [3],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Codemasters"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_26.jpg",
            "gallery" : [
                "images/screenshot_cod_1.jpg","images/screenshot_cod_2.jpg","images/screenshot_cod_3.jpg", "images/screenshot_cod_4.jpg"
            ],
            "logo" : "images/cod_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 20
            },
            "value" : {
                "listPrice" : 49.99,
                "netPrice" : 39.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 30,
        "catId" : [8,10, 13],
        "name" : "WRC 9 FIA Rally Championship",
        "modes" : [1,2],
        "otherId" : [],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Codemasters"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_27.jpg",
            "gallery" : [
                "images/screenshot_wrc_1.jpg","images/screenshot_wrc_2.jpg","images/screenshot_wrc_3.jpg"
            ],
            "logo" : "images/wrc_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false,
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 19.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 23,
        "catId" : [13],
        "name" : "Fifa 2020",
        "modes" : [1,2],
        "otherId" : [],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "EA Games"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_24.jpg",
            "gallery" : [
                "images/screenshot_fifa_1.jpg","images/screenshot_fifa_2.jpg","images/screenshot_fifa_3.jpg", "images/screenshot_fifa_4.jpg"
            ],
            "logo" : "images/fifa_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false,
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 29.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 24,
        "catId" : [13],
        "name" : "NBA 2K21",
        "modes" : [1,2],
        "otherId" : [3, 2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "2K Games"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_23.jpg",
            "gallery" : [
                "images/screenshot_nba_1.jpg","images/screenshot_nba_2.jpg","images/screenshot_nba_3.jpg"
            ],
            "logo" : "images/nba_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 30
            },
            "value" : {
                "listPrice" : 39.99,
                "netPrice" : 27.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 8,
        "name" : "Hitman III",
        "modes" : [1],
        "otherId" : [1,2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "IO Interactive"
            },
            {
                "name" : "Release date",
                "value" : "Jan 20, 2021"
            },
            {
                "name" : "Rating",
                "value" : "9.6/10"
            }],
            "text" : [["Death Awaits.","Agent 47 returns in HITMAN 3, the dramatic conclusion to the World of Assassination trilogy."]
        ]
        },
        "newRelease" : {
            "value" : true
        },
        "catId" : [11, 1],
        "image" : {
            "cover" : "images/banner_3.jpg",
            "gallery" : [
                "images/screenshot_hitman_1.jpg","images/screenshot_hitman_2.jpg","images/screenshot_hitman_3.jpg"
            ],
            "logo" : "images/hitman_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 59.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 10 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GeForce GTX 660 / Radeon HD 7870"
                },
                {
                    "name":"Direct X",
                    "value":"DirectX 12"
                },
                {
                    "name":"Storage",
                    "value":"80 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "Intel CPU Core i7 4790 4 GHz"
                },
                {
                    "name":"RAM",
                    "value": "16 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GPU GeForce GTX 1070 / AMD GPU Radeon RX Vega 56 8GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 20,
        "catId" : [5,12,10],
        "name" : "Cities Skylines",
        "modes" : [1,2],
        "otherId" : [3],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Rockstar Games"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_20.jpg",
            "gallery" : [
                "images/screenshot_cities_1.jpg","images/screenshot_cities_2.jpg","images/screenshot_cities_3.jpg"
            ],
            "logo" : "images/cities_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 50
            },
            "value" : {
                "listPrice" : 15.99,
                "netPrice" : 7.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 21,
        "catId" : [1, 12, 3],
        "name" : "Fall Guys",
        "modes" : [2],
        "otherId" : [2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Devolver Games"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_21.jpg",
            "gallery" : [
                "images/screenshot_fallguys_1.jpg","images/screenshot_fallguys_2.jpg","images/screenshot_fallguys_3.jpg"
            ],
            "logo" : "images/fallguys_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false,
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 9.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 9,
        "catId" : [1,2,4,6],
        "otherId" : [3, 2],
        "name" : "Red Dead Redemption II",
        "modes" : [1,2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Rockstar Games"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_8.jpg",
            "gallery" : [
                "images/screenshot_rdr2_1.jpg","images/screenshot_rdr2_2.jpg","images/screenshot_rdr2_3.jpg", "images/screenshot_rdr2_4.jpg"
            ],
            "logo" : "images/rdr2_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 50
            },
            "value" : {
                "listPrice" : 59.99,
                "netPrice" : 29.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 19,
        "catId" : [5,12],
        "name" : "Sid Meier's: Civilization VI",
        "modes" : [1,2],
        "otherId" : [3],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Rockstar Games"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_19.jpg",
            "gallery" : [
                "images/screenshot_civilization_1.jpg","images/screenshot_civilization_2.jpg","images/screenshot_civilization_3.jpg"
            ],
            "logo" : "images/civilization_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 20
            },
            "value" : {
                "listPrice" : 59.99,
                "netPrice" : 47.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 18,
        "catId" : [8,12],
        "name" : "Need For Speed: Heat",
        "modes" : [1],
        "otherId" : [],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "EA Games | Ghost Studios"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_18.jpg",
            "gallery" : [
                "images/screenshot_nfs_1.jpg","images/screenshot_nfs_2.jpg","images/screenshot_nfs_3.jpg"
            ],
            "logo" : "images/nfs_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false,
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 34.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 17,
        "catId" : [8, 10, 12],
        "name" : "Forza Horizon 4",
        "modes" : [1,2],
        "otherId" : [3,2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Playground Games"
            },
            {
                "name" : "Release date",
                "value" : "Nov 5, 2019"
            },
            {
                "name" : "Rating",
                "value" : "9.9/10"
            }],
            "text" : [["America, 1899.","Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."],
            ["Explore", "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding..."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_17.jpg",
            "gallery" : [
                "images/screenshot_forza_1.jpg","images/screenshot_forza_2.jpg","images/screenshot_forza_3.jpg", "images/screenshot_forza_4.jpg"
            ],
            "logo" : "images/forza_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 70
            },
            "value" : {
                "listPrice" : 49.99,
                "netPrice" : 14.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7 - Service Pack 1 (6.1.7601)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i5-2500K / AMD FX-6300"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
                },
                {
                    "name":"Storage",
                    "value":"150 GB (SSD Recommended)"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 - April 2018 Update (v1803)"
                },
                {
                    "name":"Processor",
                    "value": "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x"
                },
                {
                    "name":"RAM",
                    "value": "12 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 10,
        "name" : "Far Cry 3",
        "catId" : [1,2, 7, 11,6],
        "modes" : [1,2],
        "otherId" : [3],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Ubisoft"
            },
            {
                "name" : "Release date",
                "value" : "Nov 29, 2012"
            },
            {
                "name" : "Rating",
                "value" : "9.7/10"
            }],
            "text" : [["AN OPEN WORLD FIRST-PERSON SHOOTER","Create your own FPS adventure. Customize your weapons, your skills and your approach to each mission, whether you favor intense run-and-gun action, stealthy close-up takedowns or long-range sniping."],
            ["AN ISLAND OF DANGER AND DISCOVERY", "Explore a diverse island playground, from mountain ranges and swampy grasslands to white sandy beaches. Discover relics, hunt exotic animals, play mini-games and travel quickly by land, sea or air. Fight your way through the island’s towns, temples, river ports and more!"],
            ["UNCOVER A MEMORABLE STORY AND AN INSANE CAST OF CHARACTERS", "Encounter an engaging and disturbed cast of characters as you take a gritty journey to the dark side of humanity, written by a Writers Guild Award winner."],
            ["PLAY WITH FRIENDS IN A FULL CO-OP CAMPAIGN", "Play online and team up in a four-player campaign which challenges you to be your best and work together to prevail. Experience the island through the eyes of a wayward crew in their own quest to survive against the odds."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_13.jpg",
            "gallery" : [
                "images/screenshot_fc3_1.jpg","images/screenshot_fc3_2.jpg","images/screenshot_fc3_3.jpg"
            ],
            "logo" : "images/fc3_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 50
            },
            "value" : {
                "listPrice" : 13.99,
                "netPrice" : 6.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows® 7SP1 / Windows® 8"
                },
                {
                    "name":"Processor",
                    "value": "2.6 GHz Intel® Core®2 Duo E6700, 3.0Ghz AMD® Athlon64 X2 6000+"
                },
                {
                    "name":"RAM",
                    "value": "4 GB"
                },
                {
                    "name":"Graphics",
                    "value":"512 MB DirectX® 10 compliant with Shader Model 4.0 or higher"
                },
                {
                    "name":"Storage",
                    "value":"15 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 8"
                },
                {
                    "name":"Processor",
                    "value": "2.9 Ghz Intel® Core®i3-530 or better, 3.1 GHz AMD® PhenomII X2"
                },
                {
                    "name":"RAM",
                    "value": "4 GB"
                },
                {
                    "name":"Graphics",
                    "value":"1024Mb Video/Graphics Card"
                },
                {
                    "name":"Storage",
                    "value":"17 GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        },
        "mature" : true
    },
    {
        "id" : 11,
        "name" : "Grand Theft Auto V",
        "modes" : [1,2],
        "catId" : [4, 6, 12],
        "otherId" : [3,2],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Rockstar Games"
            },
            {
                "name" : "Release date",
                "value" : "Sep 17, 2013"
            },
            {
                "name" : "Rating",
                "value" : "9.8/10"
            }],
            "text" : [["GRAND THEFT AUTO ONLINE", "Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience."],
                ["LAUNCH YOUR CRIMINAL EMPIRE", "Launch business ventures from your Maze Bank West Executive Office, research powerful weapons technology from your underground Gunrunning Bunker and use your Counterfeit Cash Factory to start a lucrative counterfeiting operation."],
                ["A FLEET OF POWERFUL VEHICLES", "Tear through the streets with a range of 10 high performance vehicles including a Supercar, Motorcycles, the weaponized Dune FAV, a Helicopter, a Rally Car and more. You’ll also get properties including a 10 car garage to store your growing fleet."],
                ["WEAPONS, CLOTHING & TATTOOS", "You’ll also get access to the Compact Grenade Launcher, Marksman Rifle and Compact Rifle along with Stunt Racing Outfits, Biker Tattoos and more."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_7.jpg",
            "gallery" : [
                "images/screenshot_gtav_1.jpg","images/screenshot_gtav_2.jpg","images/screenshot_gtav_3.jpg"
            ],
            "logo" : "images/gta_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 50
            },
            "value" : {
                "listPrice" : 39.99,
                "netPrice" : 19.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7+"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz"
                },
                {
                    "name":"RAM",
                    "value": "4 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA 9800 GT 1GB / AMD HD 4870 1GB"
                },
                {
                    "name":"Direct X",
                    "value":"DirectX 10.0+"
                },
                {
                    "name":"Storage",
                    "value":"90 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 (64-bit)"
                },
                {
                    "name":"Processor",
                    "value": "Intel Core i5 3470 @ 3.2GHZ (4 CPUs) / AMD X8 FX-8350 @ 4GHZ (8 CPUs)"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GTX 660 2GB / AMD HD7870 2GB"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    },
    {
        "id" : 12,
        "name" : "Stranded Deep",
        "catId" : [12,2,10,3],
        "modes" : [1],
        "otherId" : [3],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Beam Team Games"
            },
            {
                "name" : "Release date",
                "value" : "Apr 30, 2017"
            },
            {
                "name" : "Rating",
                "value" : "8.7/10"
            }],
            "text" : [["Survive", "Take the role of a plane crash survivor stranded somewhere in the Pacific Ocean. Come face to face with some of the most life threatening scenarios that will result in a different experience each time you play. Scavenge. Discover. Survive."]
        ]
        },
        "newRelease" : {
            "value" : false,
            "id" : null
        },
        "image" : {
            "cover" : "images/banner_5.jpg",
            "gallery" : [
                "images/screenshot_stranded_1.jpg","images/screenshot_stranded_2.jpg","images/screenshot_stranded_3.jpg"
            ],
            "logo" : "images/stranded_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : true,
                "amount" : 50
            },
            "value" : {
                "listPrice" : 19.99,
                "netPrice" : 9.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 7+ (64-bits)"
                },
                {
                    "name":"Processor",
                    "value": "X64 Quad Core CPU 2.0GHz+"
                },
                {
                    "name":"RAM",
                    "value": "4 GB"
                },
                {
                    "name":"Graphics",
                    "value":"Intel HD6500 and above. Minimum 512MB VRAM. Pixel Shader 3.0 support. Deferred lighting support (most 2005 and later cards)"
                },
                {
                    "name":"Storage",
                    "value":"2 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 7+ (64-bits)"
                },
                {
                    "name":"Processor",
                    "value": "X64 Quad Core CPU 3.0GHz+"
                },
                {
                    "name":"Memory",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"NVIDIA GTX600 series or ATI HD7000 series with 2-4GB VRAM"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        }
    }, 
    {
        "id" : 14,
        "name" : "Medium",
        "catId" : [9, 2],
        "modes" : [1],
        "otherId" : [1],
        "info" :{
            "about" : [
            {
                "name" : "Publisher",
                "value" : "Bloober Team"
            },
            {
                "name" : "Release date",
                "value" : "Jan 28, 2021"
            },
            {
                "name" : "Rating",
                "value" : "9.0/10"
            }],
            "text" : [
            ["SEE WHAT’S HIDDEN","Delve deep into a mature and morally ambiguous story, where nothing is what it seems and everything has another side. As a medium you see, hear and experience more than others, and with every new perspective you will change your perception on what happened at the Niwa resort."],
            ["PLAY IN TWO WORLDS AT THE SAME TIME", "Never-seen-before gameplay that plays out across two worlds displayed at the same time. Explore the physical world and the spirit world simultaneously, and use the interactions between them to solve dual-reality puzzles, unlock new paths, and awaken memories of past events."],
            ["ENTER A DARK REALITY INSPIRED BY BEKSIŃSKI", "The Medium’s spirit world is a dark mirror reflection of our reality, a grim and unsettling place where our unpunished deeds, evil urges, and vile secrets manifest themselves and can take on a form. This world has been invented and designed under the inspiration of Zdzisław Beksiński’s paintings, Polish dystopian surrealist internationally recognized for his distinctive and strikingly ominous style."],
            ["MUSIC BY YAMAOKA & REIKOWSKI", "Immerse yourself in the disturbing and oppressive atmosphere of the game thanks to the original ‘dual’ soundtrack co-created by Akira Yamaoka and Arkadiusz Reikowski. Yamaoka-san is a legendary Japanese composer best known for his work on the Silent Hill series; Reikowski is a Hollywood Music in Media Awards nominee who worked on such acclaimed horror games as Blair Witch, Layers of Fear, and Observer. Now they join their creative forces for the music and songs of The Medium."]
        ]
        },
        "newRelease" : {
            "value" : true
        },
        "image" : {
            "cover" : "images/banner_15.jpg",
            "gallery" : [
                "images/screenshot_medium_1.jpg","images/screenshot_medium_2.jpg", "images/screenshot_medium_3.jpg", "images/screenshot_medium_4.jpg"
            ],
            "logo" : "images/medium_logo.png"
        },
        "price" : {
            "discount" : {
                "isDiscounted" : false,
                "amount" : null
            },
            "value" : {
                "listPrice" : null,
                "netPrice" : 24.99
            }
        },
        "specifications":{
            "minimum":[
                {
                    "name":"OS",
                    "value": "Windows 10 (64bit version only)"
                },
                {
                    "name":"Processor",
                    "value": "Intel® Core™ i5-6600 / AMD Ryzen™ 5 2500X"
                },
                {
                    "name":"RAM",
                    "value": "8 GB"
                },
                {
                    "name":"Graphics",
                    "value":"@1080p NVIDIA GeForce® GTX 1060 6GB / AMD Radeon™ R9 390X (or equivalent with 4 GB VRAM)"
                },
                {
                    "name":"Direct X",
                    "value":"11"
                },
                {
                    "name":"Storage",
                    "value":"30 GB"
                }
            ],
            "recommended":[
                {
                    "name":"OS",
                    "value": "Windows 10 (64bit version only)"
                },
                {
                    "name":"Processor",
                    "value": "Intel® Core™ i5-9600 / AMD Ryzen™ 7 3700X"
                },
                {
                    "name":"RAM",
                    "value": "16 GB"
                },
                {
                    "name":"Direct X",
                    "value":"DirectX 12"
                },
                {
                    "name":"Graphics",
                    "value":"@1080p NVIDIA GeForce® GTX 1660 Ti / Radeon™ RX Vega 56 | @4K NVIDIA GeForce® RTX 2070 / Radeon™ RX 5700 XT"
                }
            ]
        },
        "ratings":{
            "criticsRecommend": 61,
            "criticsAvg": 76,
            "openCritics": "Strong"
        },
        "mature" : true
    }
]
