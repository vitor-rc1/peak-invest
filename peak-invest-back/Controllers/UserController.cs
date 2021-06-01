using Microsoft.AspNetCore.Mvc;
using peak_invest_back.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peak_invest_back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        
        [HttpGet("{id}")]
        public ActionResult<KeyValuePair<int, string>> Get(int id)
        {
            var user = UserService.Get(id);

            if (user.Value is null)
                return NotFound();

            return user;
        }
    }
}
