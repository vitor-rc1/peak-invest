using peak_invest_back.Controllers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peak_invest_back.Service
{
    public class UserService
    {
        static List<KeyValuePair<int, string>> Users { get; }
        static int nextId = 4;

        static UserService()
        {
            Users = new List<KeyValuePair<int, string>>()
            {
                new KeyValuePair<int, string>(1, "João"),
                new KeyValuePair<int, string>(2, "Maria"),
                new KeyValuePair<int, string>(3, "Ana")
            };
        }

        public static List<KeyValuePair<int, string>> GetAll => Users;

        public static KeyValuePair<int, string> Get(int id) => Users.FirstOrDefault(user => user.Key == id);

        public static void Add(User user)
        {
            user.Id = nextId++;
            Users.Add(new KeyValuePair<int, string>(user.Id, user.Name));
        }

        public static void Delete(int id)
        {
            var user = Get(id);
            if (user.Value is null)
                return;
            Users.Remove(user);
        }

        public static void Update(User user)
        {
            var index = Users.FindIndex(u => u.Key == user.Id);
            if (index == -1)
                return;

            Users[index] = new KeyValuePair<int, string>(user.Id, user.Name);
        }
    }
}
