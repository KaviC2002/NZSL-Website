using System.ComponentModel.DataAnnotations;
using System.Text;
using A2.Models;

namespace A2.Helper
{
    public static class CalendarOutputFormatter
    {
        public static string FormatEventToICalendar(Event eventItem, string upi)
        {

            string dtstamp = DateTime.UtcNow.ToString("yyyyMMddTHHmmssZ");

            
            StringBuilder ical = new StringBuilder();
            ical.AppendLine("BEGIN:VCALENDAR");
            ical.AppendLine("VERSION:2.0");
            ical.AppendLine($"PRODID:-//{"kcha612"}//NONSGML Event Calendar//EN");
            ical.AppendLine("BEGIN:VEVENT");
            ical.AppendLine($"UID:{eventItem.Id}");
            ical.AppendLine($"DTSTAMP:{dtstamp}");
            ical.AppendLine($"DTSTART:{eventItem.Start}");
            ical.AppendLine($"DTEND:{eventItem.End}");
            ical.AppendLine($"SUMMARY:{eventItem.Summary}");
            ical.AppendLine($"DESCRIPTION:{eventItem.Description}");
            ical.AppendLine($"LOCATION:{eventItem.Location}");
            ical.AppendLine("END:VEVENT");
            ical.AppendLine("END:VCALENDAR");

            return ical.ToString();
        }
    }
}