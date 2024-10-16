using A2.Data;
using A2.Dtos;
using A2.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Security.Claims;
using System.Text.RegularExpressions;
using A2.Helper;

namespace A2.Controllers
{
    [Route("webapi")]
    [ApiController]
    public class A2Controller : Controller
    {
        private readonly IA2Repo _repo;
        public A2Controller(IA2Repo repo)
        {
            _repo = repo;
        }

        [HttpPost("Register")]
        public ActionResult<User> Register(User user)
        {
            User? c = _repo.GetUserByUserName(user.UserName);
            if (c == null)
            {
                User addedUser = _repo.AddUser(user);
                return Ok("User successfully registered.");
            }
            else
            {
                string message = String.Format("UserName {0} is not available.", user.UserName);
                return Ok(message);
            }
        }

        [Authorize(AuthenticationSchemes = "Authentication")]
        [Authorize(Policy = "RegisteredUserOnly")]
        [HttpGet("PurchaseSign/{id}")]
        public ActionResult<PurchaseOutput> PurchaseSign(string id)
        {
            string SignId = id;
            Sign? sign = _repo.GetSignByID(SignId);
            if (sign == null)
            {
                return BadRequest("Sign " + id + " not found");
            }
            else
            {
                ClaimsIdentity? ci = HttpContext.User.Identities.FirstOrDefault();
                Claim? c = ci.FindFirst("user");
                string username = c.Value;
                PurchaseOutput output = new PurchaseOutput { UserName = username, SignID = SignId };
                return Ok(output);
            }
        }

        [Authorize(AuthenticationSchemes = "Authentication")]
        [Authorize(Policy = "OrganizorOnly")]
        [HttpPost("AddEvent")]
        public ActionResult<Event> AddEvent(EventInput input)
        {
            DateTime Start;
            DateTime End;
            string format = "yyyyMMddTHHmmssZ";
            bool correctStart = DateTime.TryParseExact(input.Start, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out Start);
            bool correctEnd = DateTime.TryParseExact(input.End, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out End);
            if (!correctStart && !correctEnd)
            {
                return BadRequest("The format of Start and End should be yyyyMMddTHHmmssZ.");
            }
            else if (!correctStart)
            {
                return BadRequest("The format of Start should be yyyyMMddTHHmmssZ.");
            }
            else if (!correctEnd)
            {
                return BadRequest("The format of End should be yyyyMMddTHHmmssZ.");
            }
            else
            {
                Event e = new Event { Start = input.Start, End = input.End, Summary = input.Summary, Description = input.Description, Location = input.Location };
                Event addedEvent = _repo.AddEvent(e);
                return Ok("Success.");
            }
        }

        [Authorize(AuthenticationSchemes = "Authentication")]
        [Authorize(Policy = "OrganizorOrUser")]
        [HttpGet("EventCount")]
        public ActionResult<int> EventCount()
        {
           IEnumerable<Event> events = _repo.GetAllEvents();
           return Ok(events.Count());   
        }

        [Authorize(AuthenticationSchemes = "Authentication")]
        [Authorize(Policy = "OrganizorOrUser")]
        [HttpGet("Event/{id}")]
        public IActionResult GetEventDetails(int id)
        {
            Event? eventItem = _repo.GetEventByID(id);

            if (eventItem == null)
            {
                return BadRequest($"Event {id} does not exist.");
            }

            
            string icalData = CalendarOutputFormatter.FormatEventToICalendar(eventItem, "YourUPI");

            
            return Content(icalData, "text/calendar; charset=utf-8");
        }
    }
}
