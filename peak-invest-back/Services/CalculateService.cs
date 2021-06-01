using peak_invest_back.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peak_invest_back.Services
{
    public class CalculateService
    {
        static double FEES = 1.05;

        public static double calculateTotalValue(Calculate calculate)
        {
            return calculate.Value * calculate.Installments * FEES;
        }
    }
}
