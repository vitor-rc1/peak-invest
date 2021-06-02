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
        public ActionResult Calculate(Calculate calculate)
        {
            double totalValue = CalculateService.calculateTotalValue(calculate);
            var response = new { total = totalValue };
            return Ok(response);
        }
    }
}
