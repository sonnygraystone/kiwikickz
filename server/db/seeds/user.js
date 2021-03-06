exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { id: 1, 
          admin: true, 
          username: 'nicklesBack', 
          first_name: 'Joe', 
          last_name: 'Nickle', 
          email: 'joenickle@gamil.com', 
          contact_number: 0273456755, 
          contact_address: 'pleaseGiveMeExample', 
          shipping_address: 'please_give_me_example', 
          auth_status: true, 
          reg_status: true,
        },
        { id: 2, 
          admin: false, 
          username: 'farFarAway', 
          first_name: 'Peter', 
          last_name: 'Farway', 
          email: 'pfarway@yahoo.com', 
          contact_number: 0279343752,
          contact_address: 'pleaseGiveMeExample', 
          shipping_address: 'please_give_me_example', 
          auth_status: true, 
          reg_status: true,
        },
        { id: 3, 
          admin: false,  
          username: 'PixeSmith37', 
          first_name: 'Pixie', 
          last_name: 'Smith', 
          email: 'pqueen@gmail.com', 
          contact_number: 0272755827, 
          contact_address: 'pleaseGiveMeExample', 
          shipping_address: 'please_give_me_example', 
          auth_status: false, 
          reg_status: true,
        },
        { id: 4, 
          admin: false, 
          username: 'superSeth48', 
          first_name: 'Seth', 
          last_name: 'Deth', 
          email: 'sethdeth@outlook.com', 
          contact_number: 0274593278, 
          contact_address: 'pleaseGiveMeExample', 
          shipping_address: 'please_give_me_example', 
          auth_status: false, 
          reg_status: false,
        },
        { id: 5, 
          admin: false, 
          username: 'paulnaul865', 
          first_name: 'Paul', 
          last_name: 'Naul', 
          email: 'npg@telecom.co.nz', 
          contact_number: 0278373863, 
          contact_address: 'pleaseGiveMeExample', 
          shipping_address: 'please_give_me_example', 
          auth_status: false, 
          reg_status: false,
        }
      ]);
    });
};
