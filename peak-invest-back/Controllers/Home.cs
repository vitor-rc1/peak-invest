using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peak_invest_back.Controllers
{
    [ApiController]
    [Route("/")]
    public class Home : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Index()
        {
            return 
                "Peak Invest API:" +
                "\nPara mais inofrmações consulte: https://github.com/vitor-rc1/peak-invest";
        }
    }
}
