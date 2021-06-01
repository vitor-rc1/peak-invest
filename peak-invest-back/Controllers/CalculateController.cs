using Microsoft.AspNetCore.Mvc;
using peak_invest_back.Models;
using peak_invest_back.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peak_invest_back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalculateController : ControllerBase
    {
        [HttpPost]
        public ActionResult<double> Calculate(Calculate calculate)
        {
            return CalculateService.calculateTotalValue(calculate);
        }
    }
}
