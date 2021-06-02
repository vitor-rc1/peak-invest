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

        public static KeyValuePair<int, string> Get(int id) => Users.FirstOrDefault(user => user.Key == id);
    }
}
